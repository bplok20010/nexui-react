import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Portal from '../portal/Portal';
import position from '../shared/position';

const noop = () => {}

export default class Popup extends React.Component {
	static propTypes = {
		prefixCls: PropTypes.string,
		className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		visible: PropTypes.bool,
		fixed: PropTypes.bool,
		doClose: PropTypes.func,
	};

	static defaultProps = {
		prefixCls: 'nex-popop',
		fixed: true,
		visible: false
	};
	
	constructor(props){
		super(props);
		
		this.state = {
			visible: props.visible
		}	
	}
	
	closePopup(){
		const { onClose } = this.props;
		
		this.setState({
			visible: false	
		});
		
		if( onClose ) {
			onClose();	
		}
	}
	
	setPosition(){
		const popup = this.refs.popup;
		const {of, my, at, collision, using, within} = this.props;
		const config = {};
		
		if( my ) {
			config.my = my;	
		}
		if( at ) {
			config.at = at;	
		}
		if( collision ) {
			config.collision = collision;	
		}
		if( using ) {
			config.using = using;	
		}
		if( within ) {
			config.within = within;	
		}
		
		position(popup, of || document.body, config);	
	}
	
	componentDidMount(){
		this.setPosition();	
		this.doOpen();
	}
	
	doOpen() {
		const el = this.refs.popup;
		$(el).hide().fadeIn(1000);	
	}
	
	doClose(){
		const el = this.refs.popup;
		$(el).fadeOut(1000,()=>{
			this.closePopup();	
		});		
	}
	
	getRenderComponent(){
		const {prefixCls, position,className, style={}, fixed} = this.props;
		const { visible } = this.state;
		const classes = classNames(prefixCls, className, fixed ? prefixCls + '-fixed' : '');
		
		const others = omit(this.props, [
			'prefixCls',
			'position',
			'className',
			'style',
			'visible',
			'fixed',
			'onClose',
			'doClose',
			'of',
			'my',
			'at',
			'collision',
			'using',
			'within',
		]);
		
		const popup = (
			<div>
				<div ref="popup" className={classes} style={style} tabIndex={-1} {...others}></div>
			</div>
		);
		
		return visible ? (
			<Portal onCreate={this.doOpen}>{popup}</Portal>
		) : null;
	}

	render() {
		return this.getRenderComponent();
	}
}