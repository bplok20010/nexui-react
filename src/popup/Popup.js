import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Portal from '../portal/Portal';
import _assign from 'object-assign';
import position from '../shared/position';

function noop(){}

const UNMOUNTED = 'unmounted';
const ENTERED = 'entered';
const EXITING = 'exiting';
const EXITED = 'exited';

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
		//popup显示时触发func(node)
		enterHandle: PropTypes.func,
		//popup关闭是触发func(node, cb)
		exitHandle: PropTypes.func,
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
		
		let initialStatus;
		
		initialStatus = UNMOUNTED;
		
		this.state = {
			visible: props.visible,
			enableAnim: true,
			status: props.visible ? ENTERED : UNMOUNTED,
		}	
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
		const {visible} = this.state;
		
		if( visible ) {
			this.setPosition();
			this.animateAppear();
		}
	}
	
	componentWillReceiveProps({visible, destroyOnHide, exitHandle}){
		//隐藏popup
		if( this.state.visible && !visible ) {
			this.setState({
				visible: true	
			});	
		}
		
		
	}
	
	shouldComponentUpdate({visible}) {
		//if( !this.state.visible && !visible ) return false;
		return !!(this.state.visible || visible);
	}
	
	componentDidUpdate(){
		const { popup, mask } = this.refs;
		const { status, visible } = this.state;
		
		if( !visible ) return;
		
		if( status === EXITING ) {
			if( popup ) {
				popup.style.display = "none";	
			}
			if( mask ) {
				mask.style.display = "none";	
			}	
			
			this.state.status = EXITED;
		} else if( status === EXITED ) {
			if( popup ) {
				popup.style.display = "";	
			}
			if( mask ) {
				mask.style.display = "";	
			}	
			
			this.showPopup();
			
			this.animateAppear();
			
			this.state.status = ENTERED;	
		} else {
			this.showPopup();	
		}
	}
	
	componentWillUnmount(){
		if( this.state.isHidden ) {
			this.state.enableAnim = false;
		}
	}
	
	enterHandle(){
			
	}
	
	exitHandle(){
		const {exitHandle} = this.props;
		const {popup, mask} = this.refs;
		
		const cb = () => {
			if( popup ) {
				popup.style.display = "none";	
			}
			if( mask ) {
				mask.style.display = "none";	
			}	
			this.state.status = EXITED;
		}
		
		if( exitHandle ) {
				
		} else {
			cb();	
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
		if( !this.props.disabledSetPosition ) {
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
	
	render(){
		const {visible} = this.state;
		return visible ? this.getPopupComponent() : null;
	}
}