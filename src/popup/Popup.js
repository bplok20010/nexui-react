import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Portal from '../portal/Portal';
import _assign from 'object-assign';
import position from '../shared/position';

function noop(){}

const propTypes = {
		prefixCls: PropTypes.string,
		rootCls: PropTypes.string,
		className: PropTypes.string,
		mask: PropTypes.bool,
		maskCls: PropTypes.string,
		destroyOnHide: PropTypes.bool,
		visible: PropTypes.bool,
		fixed: PropTypes.bool,
		disabledSetPosition: PropTypes.bool,
		onMaskClick: PropTypes.func,
		popupAnimate: PropTypes.shape({
			appear: PropTypes.func,
			leave: PropTypes.func	
		}),
		maskAnimate: PropTypes.shape({
			appear: PropTypes.func,
			leave: PropTypes.func	
		}),
		of: PropTypes.any,
		my: PropTypes.any,
		at: PropTypes.any,
		collision: PropTypes.any,
		using: PropTypes.func,
		within: PropTypes.any,
	};

export default class Popup extends React.Component {
	static propTypes = propTypes

	static defaultProps = {
		prefixCls: 'nex-popup',
		rootCls: '',
		mask: false,
		fixed: false,
		destroyOnHide: true,
		//禁用每次刷新更新位置
		disabledSetPosition: false,
		visible: true,
		of: window,
		collision: 'flip', // none flip fit flipfit
	}
	
	constructor(props){
		super(props);
		
		this.state = {
			visible: props.visible,
			isInit: true,
			isHidden: false,
			enableAnim: true
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
		let {of, my, at, collision, using, within} = this.props;
		if( this._of ) {
			of = this._of;	
		}
		const config = {
			using: function(p, d){
				if( using ) {
					using(p, d);	
				}
				
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
		
		if( typeof of === 'function' ) {
			of = of();	
		}
		
		if( !of ) return null;
		
		position(popup, of, config);	

		return type == 1 ? pos : ( type == 2 ? dir : _assign(pos, dir) );
	}
	
	setPosition(pos){
		const popup = this.refs.popup;
		
		pos = pos || this.getPosition() || {}; 
		
		if( 'left' in pos ) {
			popup.style.left = pos.left + 'px';
		}
		if( 'top' in pos ) {
			popup.style.top = pos.top + 'px';
		}
		if( 'right' in pos ) {
			popup.style.right = pos.right + 'px';
		}
		if( 'bottom' in pos ) {
			popup.style.bottom = pos.bottom + 'px';
		}
	}
	
	_initAppear = false;
	_of = null
	updatePosition(of = null){
		this._of = of;
		this.setPosition();
		this._of = null;
		
		if( !this._initAppear ) {
			this.animateAppear();
		}
	}
	
	componentDidMount(){
		const { visible } = this.props;
		
		if( visible ) {
			this.showPopup();
			this.animateAppear();
		}
		
		this.state.isInit = false;
	}
	
	componentWillReceiveProps({visible}){
		this.setState({
			visible
		});
	}
	
	componentDidUpdate(){
		const { visible } = this.props;
		const { popup, mask } = this.refs;
		const { isHidden } = this.state;
		if( visible ) {
			if( isHidden ) {
				if( popup ) {
					popup.style.display = "";	
				}
				if( mask ) {
					mask.style.display = "";	
				}	
			}

			this.showPopup();
			
			if( isHidden ) {
				this.state.isHidden = false;
				this.animateAppear();
			} else if( !this._initAppear ) {
				this.animateAppear();	
			}
		} else if( isHidden ) {
			this.animateLeave(null, ()=> {
				if( popup ) {
					popup.style.display = "none";	
				}
				if( mask ) {
					mask.style.display = "none";	
				}
			});	
		}
	}
	
	componentWillUnmount(){
		if( this.state.isHidden ) {
			this.state.enableAnim = false;
		}
	}
	
	animateAppear = () => {
		const {popupAnimate, maskAnimate} = this.props;
		
		this._initAppear = true;
		
		if( popupAnimate && popupAnimate.appear ) {
			popupAnimate.appear(this.refs.popup);	
		}
		
		if( maskAnimate && maskAnimate.appear ) {
			maskAnimate.appear(this.refs.mask);	
		}
	}
	
	animateLeave = (node, done)=>{
		const {popupAnimate, maskAnimate, visible} = this.props;
		
		if( this.state.enableAnim && popupAnimate && popupAnimate.leave ) {
			popupAnimate.leave(this.refs.popup, done);	
		} else {
			done();	
		}
		
		if( this.state.enableAnim && maskAnimate && maskAnimate.leave ) {
			maskAnimate.leave(this.refs.mask, ()=>{});	
		}
	}
	
	showPopup(){
		if( this.state.isInit || !this.props.disabledSetPosition ) {
			this.setPosition();	
		}
	}
	
	handleMaskClick=(e)=>{
		const {onMaskClick} = this.props;
		if( onMaskClick ) {
			onMaskClick(e);	
		}	
	}
	
	getMaskComponent(){
		const {prefixCls, mask, maskCls} = this.props;
		
		const classes = classNames( {
				[`${prefixCls}-mask`]: true,
				[maskCls]: maskCls
			} );
		
		return (
			<div ref="mask" className={classes} onClick={this.handleMaskClick}></div>
		);	
	}
	
	savePopup=(node)=>{
		this._popupNode = node;	
	}
	
	getPopupDomNode(){
		return this._popupNode;
	}
	
	getRenderComponent(){
		const {
			prefixCls, 
			className, 
			destroyOnHide, 
			fixed, 
			mask, 
			animate={}, 
			renderTo, 
			container, 
			rootCls, 
			..._others
		} = this.props;
		
		let { visible, isInit } = this.state;
		
		let PortalConf = {};
		
		const classes = classNames(prefixCls, className, fixed ? prefixCls + '-fixed' : '');
		
		if( renderTo ) {
			PortalConf.renderTo = renderTo;
		}
		if( container ) {
			PortalConf.container = container;
		}
		
		const others = omit(_others, Object.keys(propTypes));
		
		const popup = (
			<div ref={this.savePopup}>
				{mask ? this.getMaskComponent() : null}
				<div {...others} ref="popup" className={classes} tabIndex={-1}></div>
			</div>
		);
		
		if( !visible && !destroyOnHide && !isInit ) {
			visible = true;
			this.state.isHidden = true;	
		}
	
		return visible ? (
			<Portal 
				{...PortalConf}
				className={`${prefixCls}-root ${rootCls}`} 
				animate={{
					appear: noop, //css3动画效果和position执行顺序问题
					leave: this.animateLeave	
				}} 
			>{popup}</Portal>
		) : null;
	}

	render() {
		return this.getRenderComponent();
	}
}