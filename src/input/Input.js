import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {classNames} from '../shared/util';
import omit from 'omit.js';
import TextArea from './TextArea';

function fixControlledValue(value) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

export default class Input extends PureComponent{

	static defaultProps = {
		disabled: false,
		autoComplete: 'off',
		addonBeforeCls: '',
		addonAfterCls: '',
		type: 'text',
		block: false,
		prefixCls: 'nex-input'
	};
	
	focus() {
		this.refs.input.focus();
	}
	
	blur() {
		this.refs.input.blur();
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
	
	handleChange = (e) => {
		const { onChange } = this.props;

		if(onChange) {
			onChange(e.target.value);
		}	
	}
	
	componentDidMount(){
		if( this.props.autoFocus ) {
			this.focus();	
		}	
	}
	
	getInputClassName() {
		const { prefixCls, size, disabled } = this.props;
		return classNames(prefixCls, {
			[`${prefixCls}-sm`]: size === 'small',
			[`${prefixCls}-lg`]: size === 'large',
			[`${prefixCls}-disabled`]: disabled
		});
	}
	renderInput(){
		const props = this.props;
		const { value, className, style={} } = this.props;
		// Fix https://fb.me/react-unknown-prop
		const otherProps = omit(this.props, [
			'prefixCls',
			'onPressEnter',
			'onChange',
			'addonBefore',
			'addonBeforeCls',
			'addonBeforeStyle',
			'addonAfter',
			'addonAfterCls',
			'addonAfterStyle',
			'autoFocus',
			'style',
			'size',
			'block',
			'width'
		]);	
		
		if( 'width' in props ) {
			style.width = props.width;	
		}
		if( props.type === 'hidden' ) {
			style.display = 'none';		
		}
		
		if ('value' in props) {
			otherProps.value = fixControlledValue(value);
			// Input elements must be either controlled or uncontrolled,
			// specify either the value prop, or the defaultValue prop, but not both.
			delete otherProps.defaultValue;
		}
		
		const classname = classNames(`${props.prefixCls}-wrapper`, {
			[`${props.prefixCls}-wrapper-inline`] : !props.block,
			[className]: className	
		});
		
		const addonBeforeCls = `${props.prefixCls}-addon ${props.prefixCls}-addon-before`;
		const addonBefore = props.addonBefore ? (
			<span className={addonBeforeCls}>{props.addonBefore}</span>
		) : null;
		
		const addonAfterCls = `${props.prefixCls}-addon ${props.prefixCls}-addon-after`;
		const addonAfter = props.addonAfter ? (
			<span className={addonAfterCls}>{props.addonAfter}</span>
		) : null;
		
		return (
			<div className={classname} style={style}>
            	{addonBefore}
				<span className={`${props.prefixCls}-inner`}>
					<input 
						{...otherProps} 
						ref="input" 
						onChange={this.handleChange}
						className={classNames(this.getInputClassName())} 
						onKeyDown={this.handleKeyDown}
					/>
				</span>
				{addonAfter}
            </div>
		);
	}
	
	render(){
		if (this.props.type === 'textarea') {
			return <TextArea {...this.props} ref="input" />;
		}
		return this.renderInput();
	}
		
}