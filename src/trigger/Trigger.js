import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Popup from '../popup/Popup';
import _assign from 'object-assign';
import {on, off, contains} from '../shared/dom';
import placements from './placements';

function noop(){}

const propTypes = {
		popupVisible: PropTypes.bool,
		defaultPopupVisible: PropTypes.bool,
		action: PropTypes.oneOf(['click', 'focus', 'hover', 'contextMenu']),
		onPopupVisibleChange: PropTypes.func,
		destroyPopupOnHide: PropTypes.bool,
		zIndex: PropTypes.number,
		popup: PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.func,
		]).isRequired,
		popupClassName: PropTypes.string,
		popupAnimate: PropTypes.object,
		popupMaskAnimate: PropTypes.object,
		popupStyle: PropTypes.object,
		popupProps: PropTypes.object,
		mask: PropTypes.bool,
		maskClosable: PropTypes.bool,
		placement: PropTypes.string,
	};

export default class Trigger extends React.Component {
	static propTypes = propTypes

	static defaultProps = {
		onPopupVisibleChange: noop,
		destroyPopupOnHide: false,
		action: 'click',
		mask: false,
		maskClosable: true,
		placement: 'BottomLeft'
	}
	
	constructor(props){
		super(props);
		
		let popupVisible;
		
		if ('popupVisible' in props) {
			popupVisible = !!props.popupVisible;
		} else {
			popupVisible = !!props.defaultPopupVisible;
		}
		
		this._container = null;
		
		this.state = {
			popupVisible	
		};
	}
	
	componentDidMount(){
		this.componentDidUpdate();
	}
	
	componentWillReceiveProps(nextProps){
		
		if( 'popupVisible' in nextProps ) {
			this.setState({
				popupVisible: nextProps.popupVisible		
			})	
		}
	}
	
	componentDidUpdate(){
		this.createPopup();
		this.createPopupEvents();
	}
	
	componentWillUnmount(){
		if( this._container ) {
			ReactDOM.unmountComponentAtNode(this._container);	
		}
	}
	
	setPopupVisible(popupVisible){
		this.clearDelayTimer();
		if (this.state.popupVisible !== popupVisible) {
			if (!('popupVisible' in this.props)) {
				this.setState({
				  popupVisible,
				});
			}
			this.props.onPopupVisibleChange(popupVisible);
		}
	}
	
	clearDelayTimer(){}
	
	getClickTriggerProps(child){
		const {action} = this.props;
		const { popupVisible } = this.state;
		const {onClick = noop } = child.props;
		
		if( action !== 'click' ) return;
		
		return {
			onClick: (e)=>{
				onClick(e);	
				this.setPopupVisible(!popupVisible);
			}	
		}	
	}
	
	getContextMenuTriggerProps(child){
		const { action } = this.props;
		const { popupVisible } = this.state;
		const { onContextMenu = noop } = child.props;	
		
		if( action !== 'contextMenu' ) return;
		
		return {
			onContextMenu: (e)=>{
				e.preventDefault();
				onContextMenu(e);
				if( !popupVisible )
					this.setPopupVisible(true);
			}		
		}
	}
	
	getHoverTriggerProps(child){
		const {action} = this.props;
		const { popupVisible } = this.state;
		const {onMouseEnter = noop, onMouseLeave = noop } = child.props;
		
		if( action !== 'hover' ) return;
		
		return {
			onMouseEnter: (e)=>{
				onMouseEnter(e);
				this.setPopupVisible(true);
			},
			onMouseLeave: (e)=>{
				onMouseLeave(e);
				this.setPopupVisible(false);
			}		
		}	
	}
	
	getFocusTriggerProps(child){
		const {action} = this.props;
		const { popupVisible } = this.state;
		const {onFocus = noop, onBlur = noop } = child.props;
		
		if( action !== 'focus' ) return;
		
		return {
			onFocus: (e)=>{
				onFocus(e);
				this.setPopupVisible(true);
			},
			onBlur: (e)=>{
				onBlur(e);	
				this.setPopupVisible(false);
			}		
		}	
	}
	
	getPopupAlign(){
			
	}
	
	onMaskClick = () => {
		const {maskClosable} = this.props;
		
		if(maskClosable) {
			this.setPopupVisible(false);	
		}
	}
	
	savePopup= (node)=>{
		this._popup = node;	
	}
	
	getComponent(){
		const {
			popup, 
			destroyPopupOnHide, 
			zIndex,
			mask,
			popupClassName,
			popupStyle, 
			popupAnimate,
			popupMaskAnimate, 
			popupProps,
			placement,
		} = this.props;
		const {popupVisible} = this.state;
		const triggerNode = ReactDOM.findDOMNode(this.refs.trigger);

		return (
			<Popup 
				{...placements(placement)}
				popupAnimate={popupAnimate}
				maskAnimate={popupMaskAnimate}
				className={popupClassName}
				style={{
					zIndex: zIndex,
					...popupStyle,	
				}}
				rootCls="nex-trigger-popup-root"
				of={triggerNode}
				destroyOnHide = {destroyPopupOnHide}
				mask={mask}
				onMaskClick={this.onMaskClick}
				{...popupProps}
				visible={popupVisible}
				ref={this.savePopup}
			>
				{typeof popup === 'function' ? popup() : popup}
			</Popup>
		);	
	}
	
	createPopup(){
		const {popupVisible} = this.state;
		
		if( !this._container && !popupVisible ) return null;
		
		if( popupVisible && !this._container ) {
			this._container = document.createElement('div');	
		}
		
		ReactDOM.unstable_renderSubtreeIntoContainer(
			this, 
			this.getComponent(), 
			this._container
		);
	}
	
	getPopupDomNode(){
		return this._popup ? this._popup.getPopupDomNode() : null;
	}
	
	//创建相关的close事件
	createPopupEvents(){
		const {action} = this.props;
		const {popupVisible} = this.state;
		const popup = this._popup;
		
		if( popupVisible ) {
			
			if( !this.__resizeHandle ) {
				this.__resizeHandle = ()=>{
					popup.updatePosition();
				};
				on(window, 'resize', this.__resizeHandle);
			}
			
			if( !this.__mousedownHandle ) { 
				this.__mousedownHandle = (e)=>{
					if( action === 'click' || action === 'contextMenu' ) {
						const target = e.target;
						const root = findDOMNode(this);
						const popupNode = this.getPopupDomNode();
						
						if (!contains(root, target) && !contains(popupNode, target)) {
							this.setPopupVisible(false);
						}
						
						if (action === 'contextMenu' && !contains(popupNode, target)) {
							this.setPopupVisible(false);
						}		
					}
				};
				on(document, 'mousedown', this.__mousedownHandle);
			}
			
			return;
		}
		
		this.clearPopupEvents();
	}
	
	clearPopupEvents(){
		if( this.__resizeHandle ) {
			this.__resizeHandle = null;
			off(window, 'resize', this.__resizeHandle);
		}
		
		if( this.__mousedownHandle ) {
			this.__mousedownHandle = null;
			off(document, 'mousedown', this.__mousedownHandle);
		}	
		
	}
	
	render() {
		const {children} = this.props;

		const child = React.Children.only(children);
		
		const trigger = React.cloneElement(child, {
			...this.getClickTriggerProps(child),
			...this.getContextMenuTriggerProps(child),
			...this.getHoverTriggerProps(child),
			...this.getFocusTriggerProps(child),
			key: 'trigger', 
			ref: 'trigger',
		});
		
		return trigger;
	}
}