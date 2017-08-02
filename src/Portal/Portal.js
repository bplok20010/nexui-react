import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {getDom, createContainer, removeContainer} from './util';

export default class Portal extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		selector: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		animate: PropTypes.shape({
			appear: PropTypes.func,
			leave: PropTypes.func	
		}),
	};

	static defaultProps = {
		selector: 'body',
		className: '',
		prefixCls: 'nex-portal'
	};

	componentDidMount() {
		const { selector, onCreate, prefixCls, className, animate={} } = this.props
		const elm = getDom(selector);
		this._container = createContainer(elm);
		this.renderPortal();
		
		if( animate.appear ) {
			animate.appear(findDOMNode(this._instance));	
		}
	}
	
	renderPortal(){
		const { prefixCls, className } = this.props
		const children = React.Children.only(this.props.children);
		
		this._container.className = classNames( prefixCls, className );
		
		this._instance = ReactDOM.unstable_renderSubtreeIntoContainer(
			this,
			children,
			this._container,
			this.props.onUpdate
		);
	}
	
	removePortal(){
		const container = this._container;
		ReactDOM.unmountComponentAtNode(container);
		removeContainer(container);
		this._container = null;	
		this._instance = null;	
	}

	componentWillUnmount() {
		const { animate={} } = this.props;
		
		const done = ()=>{
			this.removePortal();		
		}
		
		if( animate.leave ) {
			animate.leave(findDOMNode(this._instance), done)	
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