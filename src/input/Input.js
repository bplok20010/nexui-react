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
		type: PropTypes.string, //text textarea hidden
		inline: PropTypes.bool,
		prefixCls: PropTypes.string,
		onPressEnter: PropTypes.func,
		onKeyDown: PropTypes.func,
		onChange: PropTypes.func,
		autoFocus: PropTypes.bool,
		inputCls: PropTypes.string,
		inputStyle: PropTypes.object,
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
		const { prefixCls, size, disabled, inputCls } = this.props;
		return classNames(prefixCls, {
			[`${prefixCls}-sm`]: size === 'small',
			[`${prefixCls}-lg`]: size === 'large',
			[`${prefixCls}-disabled`]: disabled,
			[inputCls]: inputCls,
		});
	}
	
	renderInput(){
		const props = this.props;
		const {
			className, 
			inputStyle, 
			type,
			style={}, 
			...others 
		} = props;
		
		const otherProps = omit(others, Object.keys(propTypes));
		
		if( props.type === 'hidden' ) {
			style.display = 'none';		
		}
		
		if ('value' in this.props) {
			otherProps.value = fixControlledValue(props.value);
			
			delete otherProps.defaultValue;
		}
		
		const classname = classNames({
			[`${props.prefixCls}-wrapper`]: true,
			[`${props.prefixCls}-wrapper-block`]: !props.inline,
			[className]: className,
		});
		
		return (
			<div 
				className={classname} 
				style={style}
			>
				<input 
					{...otherProps} 
					ref="input" 
					type={type}
					style={inputStyle}
					onChange={this.handleChange}
					className={this.getInputClassName()} 
					onKeyDown={this.handleKeyDown}
				/>
            </div>
		);
	}
	
	getTextareaClassName() {
		const { prefixCls, disabled, inputCls } = this.props;
		return classNames(prefixCls, {
			[`${prefixCls}-disabled`]: disabled,
			[inputCls]: inputCls,
		});
	}
	
	renderTextarea(){
		const {prefixCls, className, inline, inputStyle, style, ...others} = this.props;
		const otherProps = omit(others, Object.keys(propTypes));
		
		if ('value' in this.props) {
			otherProps.value = fixControlledValue(this.props.value);
			
			delete otherProps.defaultValue;
		}
		
		const classname = classNames(`${prefixCls}-wrapper`, {
			[`${prefixCls}-wrapper-block`] : !inline,
			[className]: className
		});
		
		const {height} = style;
		
		return (
			<div className={classname} style={style}>
				<textarea
					{...otherProps}
					ref="input"
					style={{
						height,
						...inputStyle	
					}}
					className={classNames(this.getTextareaClassName())}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
				/>
			</div>
		);
	}
	
	render(){
		if (this.props.type === 'textarea') {
			return this.renderTextarea();
		}
		return this.renderInput();
	}
		
}