import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Portal from '../portal/Portal';
import _assign from 'object-assign';
import position from '../shared/position';

const noop = () => {}

export default class Popup extends React.Component {
	static propTypes = {
		prefixCls: PropTypes.string,
		className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		destroyOnClose: PropTypes.bool,
		visible: PropTypes.bool,
		fixed: PropTypes.bool,
		onClose: PropTypes.func,
	};

	static defaultProps = {
		prefixCls: 'nex-popup',
		mask: false,
		fixed: true,
		visible: false
	};
	
	constructor(props){
		super(props);
		
		this.state = {
			visible: props.visible
		}	
	}
	
	shouldComponentUpdate({ visible }) {
		return !!(this.props.visible || visible);
	}
	
	/**
	* 获取显示方位 
	*  @param number 1 默认 
	*	- 1 位置
	*	- 2 方位
	*	- 0 包含位置和方位
	*/
	getPosition(type = 1){
		let pos, dir;
		const popup = this.refs.popup;
		const {of, my, at, collision, using, within} = this.props;
		const config = {
			using: function(p, d){
				pos = p;
				dir = d;	
			}	
		};	
		
		if( my ) {
			config.my = my;	
		}
		if( at ) {
			config.at = at;	
		}
		if( collision ) {
			config.collision = collision;	
		}
		if( within ) {
			config.within = within;	
		}
		
		position(popup, of || document.body, config);	
		
		return type == 1 ? pos : ( type == 2 ? dir : _assign(pos, dir) );
	}
	
	setPosition(pos){
		const popup = this.refs.popup;
		$(popup).css( pos || this.getPosition() );
	}
	
	componentDidMount(){
		if( this.props.visible ) {
			this.doShow();
		}
	}
	
	componentDidUpdate(){
		if( this.props.visible ) {
			this.doShow();
		}	
	}
	
	componentWillReceiveProps({visible}){
		this.setState({
			visible	
		});
	}
	
	doShow(){
		this.setPosition();	
	}
	
	close(){
		const onClose = this.props.onClose;
		if( onClose ) onClose();
	}
	
	getMaskComponent(){
		const {prefixCls, mask, maskCks} = this.props;
		
		const classes = classNames( {
				[`${prefixCls}-mask`]: true,
				[maskCks]: maskCks
			} );
		
		return (
			<div ref="mask" className={classes}></div>
		);	
	}
	
	getRenderComponent(){
		const {prefixCls, position,className, style={}, fixed, mask} = this.props;
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
			'of',
			'my',
			'at',
			'collision',
			'using',
			'within',
			'mask',
		]);
		
		const popup = (
			<div>
				{mask ? this.getMaskComponent() : null}
				<div ref="popup" className={classes} style={style} tabIndex={-1} {...others}></div>
			</div>
		);
		
		return visible ? (
			<Portal>{popup}</Portal>
		) : null;
	}

	render() {
		return this.getRenderComponent();
	}
}