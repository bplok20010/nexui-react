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
		onMaskClick: PropTypes.func,
		popupAnimate: PropTypes.shape({
			appear: PropTypes.func,
			leave: PropTypes.func	
		}),
		maskAnimate: PropTypes.shape({
			appear: PropTypes.func,
			leave: PropTypes.func	
		}),
	};

	static defaultProps = {
		prefixCls: 'nex-popup',
		mask: false,
		fixed: false,
		destroyOnClose: true,
		visible: false
	};
	
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
		
		if( typeof of === 'function' ) {
			of = of();	
		}
		
		position(popup, of || document.body, config);	
		
		return type == 1 ? pos : ( type == 2 ? dir : _assign(pos, dir) );
	}
	
	setPosition(pos){
		const popup = this.refs.popup;
		$(popup).css( pos || this.getPosition() );
	}
	
	componentDidMount(){
		const { visible } = this.props;
		
		this.state.isInit = false;
		
		if( visible ) {
			this.doShow();
		}
	}
	
	componentWillReceiveProps({visible}){
		this.setState({
			visible	
		});
	}
	
	componentDidUpdate(){
		const { visible } = this.props;
		const { popup, mask } = this.refs;
		if( visible ) {
			if( this.state.isHidden ) {
				$(popup).show();
				$(mask).show();		
			}
			
			this.doShow();
			
			if( this.state.isHidden ) {
				this.state.isHidden = false;
				this.animateAppear();
			}
		} else if( this.state.isHidden ) {
			this.animateLeave(null, ()=> {
				$(popup).hide();
				$(mask).hide();	
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
	
	doShow(){
		this.setPosition();	
	}
	
	handleMaskClick=(e)=>{
		const {onMaskClick} = this.props;
		if( onMaskClick ) {
			onMaskClick(e);	
		}	
	}
	
	getMaskComponent(){
		const {prefixCls, mask, maskCks} = this.props;
		
		const classes = classNames( {
				[`${prefixCls}-mask`]: true,
				[maskCks]: maskCks
			} );
		
		return (
			<div ref="mask" className={classes} onClick={this.handleMaskClick}></div>
		);	
	}
	
	getRenderComponent(){
		const {prefixCls, position,className, destroyOnClose, style={}, fixed, mask, animate={}} = this.props;
		let { visible, isInit } = this.state;
		const classes = classNames(prefixCls, className, fixed ? prefixCls + '-fixed' : '');
		
		const others = omit(this.props, [
			'prefixCls',
			'position',
			'className',
			'visible',
			'fixed',
			'of',
			'my',
			'at',
			'collision',
			'using',
			'within',
			'mask',
			'destroyOnClose',
			'popupAnimate',
			'maskAnimate'
		]);
		
		const popup = (
			<div>
				{mask ? this.getMaskComponent() : null}
				<div ref="popup" className={classes} tabIndex={-1} {...others}></div>
			</div>
		);
		
		if( !visible && !destroyOnClose && !isInit ) {
			visible = true;
			this.state.isHidden = true;	
		}
		
		return visible ? (
			<Portal animate={{
				appear: this.animateAppear,
				leave: this.animateLeave	
			}}>{popup}</Portal>
		) : null;
	}

	render() {
		return this.getRenderComponent();
	}
}