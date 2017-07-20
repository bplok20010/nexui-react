import React, {PureComponent, PropTypes} from 'react';
import {classNames} from '../shared/util';
import omit from 'omit.js';

export default class TextArea extends PureComponent {
	static defaultProps = {
		prefixCls: 'nex-input'
	};
	  
	textAreaRef= null;
	
	focus() {
		this.textAreaRef.focus();
	}
	
	blur() {
		this.textAreaRef.blur();
	}
	
	getTextAreaClassName() {
		const { prefixCls, disabled,autosize } = this.props;
		return classNames(prefixCls, {
			[`${prefixCls}-disabled`]: disabled,
			[`${prefixCls}-autosize`]: autosize
		});
	}
	
	handleKeyDown = (e) => {
		const { onPressEnter, onKeyDown } = this.props;
		if (e.keyCode === 13 && onPressEnter) {
			onPressEnter(e);
		}
		if (onKeyDown) {
			onKeyDown(e);
		}
	}
	
	saveTextAreaRef = (textArea) => {
		this.textAreaRef = textArea;
	}
	
	render() {
		const props = this.props;
		const otherProps = omit(props, [
			'prefixCls',
			'block',
			'addonBeforeCls',
			'addonAfterCls',
			'onPressEnter',
			'autosize',
			'width',
			'height'
		]);
		
		const classname = classNames(`${props.prefixCls}-wrapper`, {
			[`${props.prefixCls}-wrapper-inline`] : !props.block 	
		});
		
		const style = {};
		if( 'width' in props ) {
			style.width = props.width;	
		}
		if( 'height' in props ) {
			otherProps.style = otherProps.style || {};
			otherProps.style.height = props.height;
		}
		
		if ('value' in otherProps) {
			otherProps.value = otherProps.value || '';
			delete otherProps.defaultValue;
		}
		return (
			<div className={classname} style={style}>
				<textarea
					{...otherProps}
					className={classNames(this.getTextAreaClassName(), props.className)}
					onKeyDown={this.handleKeyDown}
					ref={this.saveTextAreaRef}
				/>
			</div>
		);
	}
}