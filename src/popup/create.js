import Popup from './Popup';
import ReactDOM from 'react-dom';
import _assign from 'object-assign';

function getRender(selector){
	const dom = typeof selector === 'string'
		? document.querySelector(selector)
		: selector;
	return dom || document.body;	
}

const defaultConfig = {
	renderTo: document.body,
	autoShow: true,
	content: null,
	parentComponent: null,
	onUpdate: null
};

export default function(opt){
	const config = _assign({}, defaultConfig, opt);
	const {content, renderTo, autoShow,parentComponent, onUpdate,...others} = config;
	
	let visible = false;
	let inst, isUnmount = false;
	let children = content;
	
	if( autoShow ) {
		visible = true;	
	}
	
	const container = document.createElement('div');
	container.className = 'test'
	const render = getRender(renderTo);
	render.appendChild( container );

	const getPopup = ()=>{
		return (
			<Popup 
				visible={visible}
				{...others}
			>
				{typeof children === 'function' ? children() : children}
			</Popup>
		);	
	}
	
	const renderer = () => {
		inst = ReactDOM.unstable_renderSubtreeIntoContainer(parentComponent, getPopup(), container, onUpdate);	
	}
	
	if( autoShow )
		renderer();
	
	const close = function(){
		if( isUnmount ) return;
		visible = false;
		renderer()
	};
	
	const show = function(){
		if( isUnmount ) return;
		visible = true;
		renderer()
	};
	
	const destroy = function(){
		if( isUnmount ) return;
		ReactDOM.unmountComponentAtNode(container);	
		const { parentNode } = container;
		if (parentNode) {
			parentNode.removeChild(container);
		}
		inst = null;
		isUnmount = true;	
	}
	
	return {
		update(content){
			if( content ) children = content;
			visible && renderer();
		},
		toggle(){
			return visible ? close() : show();
		},
		close,
		show,
		destroy,
		getInst(){
			return inst;	
		}	
	};
	
}