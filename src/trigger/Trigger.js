import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getZIndex from '../shared/getZIndex';
import omit from 'omit.js';
import Popup from '../popup/Popup';
import _assign from 'object-assign';

function noop(){}

const propTypes = {
		popupVisible: PropTypes.bool,
		defaultPopupVisible: PropTypes.bool,
		action: PropTypes.oneOf(['click', 'focus', 'hover']),
		onPopupVisibleChange: PropTypes.func,
		destroyPopupOnHide: PropTypes.bool,
		content: PropTypes.any,
	};

export default class Trigger extends React.Component {
	static propTypes = propTypes

	static defaultProps = {
		onPopupVisibleChange: noop,
		destroyPopupOnHide: false,
		action: 'click',
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
	
	componentWillReceiveProps(){
	}
	
	componentDidUpdate(){
		this.createPopup();
	}
	
	componentWillUnmount(){
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
		
		return {
			onClick: (e)=>{
				
				if( action === 'click' ) {
					this.setPopupVisible(!popupVisible);
				}
				
				onClick(e);	
			}	
		}	
	}
	
	getHoverTriggerProps(child){
		const {action} = this.props;
		const { popupVisible } = this.state;
		const {onMouseEnter = noop, onMouseLeave = noop } = child.props;
		
		return {
			onMouseEnter: (e)=>{
				if( action === 'hover' ) {
					this.setPopupVisible(true);
				}
				onMouseEnter(e);	
			},
			onMouseLeave: (e)=>{
				if( action === 'hover' ) {
					this.setPopupVisible(false);
				}
				onMouseLeave(e);	
			}		
		}	
	}
	
	getFocusTriggerProps(child){
		const {action} = this.props;
		const { popupVisible } = this.state;
		const {onFocus = noop, onBlur = noop } = child.props;
		
		return {
			onFocus: (e)=>{
				if( action === 'focus' ) {
					this.setPopupVisible(true);
				}
				onFocus(e);	
			},
			onBlur: (e)=>{
				if( action === 'focus' ) {
					this.setPopupVisible(false);
				}
				onBlur(e);	
			}		
		}	
	}
	
	createPopup(){
		const {content, destroyPopupOnHide, style={}, ...others} = this.props;
		const {popupVisible} = this.state;
		const triggerNode = ReactDOM.findDOMNode(this.refs.trigger);
		
		const otherPorps = omit(others, Object.keys(propTypes));
		
		if( !this._container && !popupVisible ) return null;
		
		if( popupVisible && !this._container ) {
			this._container = document.createElement('div');	
		}
		
		const popup = (
			<Popup 
				at="center top"
				my="center bottom-5"
				{...otherPorps}
				rootCls="nex-trigger-popup-root"
				style={{
					zIndex: getZIndex(),
					...style,	
				}}
				of={triggerNode}
				destroyOnHide = {destroyPopupOnHide}
				visible={popupVisible}
			>
				{typeof content === 'function' ? content() : content}
			</Popup>
		);	
		
		ReactDOM.unstable_renderSubtreeIntoContainer(
			this, 
			popup, 
			this._container
		);
	}
	
	render() {
		const {children} = this.props;
		
		const child = React.Children.only(children);
		
		const trigger = React.cloneElement(child, {
			...this.getClickTriggerProps(child),
			...this.getHoverTriggerProps(child),
			...this.getFocusTriggerProps(child),
			key: 'trigger', 
			ref: 'trigger',
		});
		
		return trigger;
	}
}