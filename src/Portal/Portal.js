import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Identity from './Identity';
import {getDom, createContainer, removeContainer} from './util';

export default class Portal extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		container: PropTypes.node,
		renderTo: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]).isRequired,
		animate: PropTypes.shape({
			appear: PropTypes.func,
			leave: PropTypes.func	
		}),
	};

	static defaultProps = {
		renderTo: 'body',
		className: '',
		container: null,
		prefixCls: 'nex-portal'
	};

	componentDidMount() {
		const { renderTo, prefixCls, className, container, animate={} } = this.props;
		if( !container ) {
			const elm = getDom(typeof renderTo === 'function' ? renderTo() : renderTo);
			this._container = createContainer(elm);
		} else {
			this._container = container;	
		}
		
		this.renderPortal();

		if( animate.appear ) {
			animate.appear(findDOMNode(this._instance));	
		}
	}
	
	componentWillReceiveProps(nextProps){
		if( nextProps.container && this._container !== nextProps.container ) {
			this.removePortal();
			this._container = nextProps.container;
		}
	}
	
	_lastPortalDOM = null
	
	onPortalRender = (inst) => {
		const { animate={} } = this.props;
		
		const portalDOM = findDOMNode(inst);
		
		if( portalDOM && this._lastPortalDOM === null ) {
			if( animate.appear ) {
				animate.appear(portalDOM);	
			}	
		}
		
		this._lastPortalDOM = portalDOM;
	}
	
	renderPortal(){
		const { prefixCls, className } = this.props
		const children = React.Children.only(this.props.children);
		
		this._container.className = classNames( prefixCls, className );
		
		ReactDOM.unstable_renderSubtreeIntoContainer(
			this,
			<Identity ref={this.onPortalRender}>{children}</Identity>,
			this._container,
			this.props.onUpdate
		);
	}
	
	removePortal(){
		const container = this._container;
		ReactDOM.unmountComponentAtNode(container);
		if( !this.props.container ) {
			removeContainer(container);
		}
		this._container = null;	
		this._lastPortalDOM = null;	
	}

	componentWillUnmount() {
		const { animate={} } = this.props;
		
		const done = ()=>{
			this.removePortal();		
		}
		
		if( this._lastPortalDOM && animate.leave ) {
			animate.leave(this._lastPortalDOM, done)	
		} else {
			done();
		}
		
	}

	componentDidUpdate() {
		this.renderPortal();
	}

	render() {
		return null;
	}
}