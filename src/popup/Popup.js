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
		container: PropTypes.node.isRequired,
		className: PropTypes.string,
		mask: PropTypes.bool,
		maskCls: PropTypes.string,
		destroyOnHide: PropTypes.bool,
		visible: PropTypes.bool,
		fixed: PropTypes.bool,
		disabledSetPosition: PropTypes.bool,
		onUpdate: PropTypes.func,
		onMaskClick: PropTypes.func,
		popupAnimate: PropTypes.shape({
			appear: PropTypes.func,//enter
			leave: PropTypes.func	//exit
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
		container: document.body,
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
			enableAnim: true,
			status: !props.visible ? 'unmount' : 'mount',
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
	
	onUpdate=()=>{
		return;
	}
	
	componentDidMount(){
		const {visible} = this.props;//使用props.visible进行控制
		
		if( visible ) {
			this.showPopup();
			//this.animateAppear();
		}
		
		this.state.isInit = false;
	}
	
	componentDidUpdate(){
		const {visible} = this.props;
		if( visible ) {
			this.showPopup();
		}	
	}
	
	componentWillReceiveProps({visible}){
		this.setState({
			visible
		});
	}
	
	componentDidUpdate1(){
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
	
	
	
	savePopup=(node)=>{
		this._popupNode = node;	
	}
	
	getPopupMaskDomNode(){
		//return this._popupNode;
	}
	
	getPopupDomNode(){
		return this._popupNode;
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
	
	getPopupComponent(){
		const {
			prefixCls, 
			className,
			container,
			fixed, 
			mask, 
			rootCls, 
			style,
			children,
		} = this.props;
		
		const classes = classNames(prefixCls, fixed ? prefixCls + '-fixed' : '', className);
		
		return (
			<Portal 
				container={container}
			>
				<div ref={this.savePopup} className={classNames(`${prefixCls}-root`, rootCls)}>
					{mask ? this.getMaskComponent() : null}
					<div ref="popup" className={classes} tabIndex={-1} style={style}>{children}</div>
				</div>
			</Portal>
		);	
	}
	
	getRenderComponent(){
		const {
			prefixCls, 
			className, 
			container,
			destroyOnHide, 
			fixed, 
			mask, 
			animate={}, 
			rootCls, 
			..._others
		} = this.props;
		
		let { visible, isInit } = this.state;
		
		const classes = classNames(prefixCls, className, fixed ? prefixCls + '-fixed' : '');
		
		const others = omit(_others, Object.keys(propTypes));
		
		const popup = (
			<div ref={this.savePopup} className={classNames(`${prefixCls}-root`, rootCls)}>
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
				container={container}
			>{popup}</Portal>
		) : null;
	}
	
	render(){
		const {visible} = this.state;
		return visible ? this.getPopupComponent() : null;
	}
	
	render1(){
		const {destroyOnHide} = this.props;
		let {visible, isInit, status} = this.state;
		
		if( !visible && !destroyOnHide && !isInit ) {
			visible = true;
			this.state.isHidden = true;	
		}
		
		return status === 'unmount' ? null : this.getPopupComponent();
	}
	
	render2() {
		return this.getRenderComponent();
	}
}