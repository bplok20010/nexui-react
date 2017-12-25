import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';

function fixControlledValue(value) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

const propTypes = {
		size: PropTypes.oneOf(['small', 'default', 'large']),
		type: PropTypes.string, //text textarea
		inline: PropTypes.bool,
		prefixCls: PropTypes.string,
		className: PropTypes.string,
		onPressEnter: PropTypes.func,
		onKeyDown: PropTypes.func,
		onChange: PropTypes.func,
		autoFocus: PropTypes.bool,
		inputCls: PropTypes.string,
		inputStyle: PropTypes.object,
		prefix: PropTypes.any,
		suffix: PropTypes.any,
	};

export default class Input extends PureComponent{
	static propTypes = propTypes

	static defaultProps = {
		disabled: false,
		autoComplete: 'off',
		type: 'text',
		inline: true,
		size: 'default',
		prefixCls: 'nex-input'
	};
	
	focus() {
		this._input && this._input.focus();
	}
	
	blur() {
		this._input && this._input.blur();
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
		const { prefixCls, size, disabled, inputCls } = this.props;
		return classNames(prefixCls, {
			[`${prefixCls}-sm`]: size === 'small',
			[`${prefixCls}-lg`]: size === 'large',
			[`${prefixCls}-disabled`]: disabled,
			[inputCls]: inputCls,
		});
	}
	
	saveInput = (input) => {
		this._input = input;	
	}
	
	getInput(){
		return this._input;	
	}
	
	renderInput(){
		const props = this.props;
		const {
			inputStyle, 
			type,
		} = props;
		
		const otherProps = omit(props, Object.keys(propTypes));
		
		if ('value' in props) {
			otherProps.value = fixControlledValue(props.value);
			
			delete otherProps.defaultValue;
		}
		
		return this.wrapInput(
			<input 
				{...otherProps} 
				ref={this.saveInput} 
				type={type}
				style={inputStyle}
				onChange={this.handleChange}
				className={this.getInputClassName()} 
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
	
	getTextareaClassName() {
		const { prefixCls, disabled, inputCls } = this.props;
		return classNames({
			[`${prefixCls}`]: true,
			[`${prefixCls}-disabled`]: disabled,
			[inputCls]: inputCls,
		});
	}
	
	renderTextarea(){
		const props = this.props;
		const {
			inputStyle,
			style={}
		} = this.props;
		
		const otherProps = omit(props, Object.keys(propTypes));
		
		if ('value' in props) {
			otherProps.value = fixControlledValue(props.value);
			
			delete otherProps.defaultValue;
		}
		
		const {height} = style;
		
		return this.wrapInput(
			<textarea
				{...otherProps}
				ref={this.saveInput} 
				style={{
					height,
					...inputStyle	
				}}
				className={this.getTextareaClassName()}
				onChange={this.handleChange}
				onKeyDown={this.handleKeyDown}
			/>
		);
	}
	
	getPrefix(){
		let {prefix, prefixCls} = this.props;
		
		if( typeof prefix === 'function' ) {
			prefix = prefix();	
		}
		
		if( prefix ) {
			return <span className={`${prefixCls}-prefix`}>{prefix}</span>	
		}
		
		return null;
	}
	
	getSuffix(){
		let {suffix, prefixCls} = this.props;
		
		if( typeof suffix === 'function' ) {
			suffix = suffix();	
		}
		
		if( suffix ) {
			return <span className={`${prefixCls}-suffix`}>{suffix}</span>	
		}
		
		return null;
	}
	
	wrapInput(input){
		const {prefixCls, className, inline, style={}} = this.props;
		
		const prefix = this.getPrefix();
		const suffix = this.getSuffix();
		
		const classname = classNames({
			[`${prefixCls}-wrapper`]: true,
			[`${prefixCls}-wrapper-block`]: !inline,
			[className]: className
		});
		
		return <div className={classname} style={style}>{prefix}{input}{suffix}</div>;	
	}
	
	render(){
		if (this.props.type === 'textarea') {
			return this.renderTextarea();
		}
		return this.renderInput();
	}
		
}