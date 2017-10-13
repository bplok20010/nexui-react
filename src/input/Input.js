import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import TextArea from './TextArea';

function fixControlledValue(value) {
	if (typeof value === 'undefined' || value === null) {
		return '';
	}
	return value;
}

const propTypes = {
		size: PropTypes.oneOf(['small', 'default', 'large']),
		addonBefore: PropTypes.any,
		addonBeforeCls: PropTypes.string,
		addonBeforeStyle: PropTypes.object,
		addonAfter: PropTypes.any,
		addonAfterCls: PropTypes.string,
		addonAfterStyle: PropTypes.object,
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
		const { prefixCls, size, disabled } = this.props;
		return classNames(prefixCls, {
			[`${prefixCls}-sm`]: size === 'small',
			[`${prefixCls}-lg`]: size === 'large',
			[`${prefixCls}-disabled`]: disabled
		});
	}
	renderInput(){
		const props = this.props;
		const { className, inputStyle, type, addonBeforeCls, addonAfterCls, addonBeforeStyle, addonAfterStyle, style={}, ...others } = props;
		const otherProps = omit(others, Object.keys(propTypes));
		
		if( props.type === 'hidden' ) {
			style.display = 'none';		
		}
		
		if ('value' in props) {
			otherProps.value = fixControlledValue(props.value);
			
			delete otherProps.defaultValue;
		}
		
		const classname = classNames(`${props.prefixCls}-wrapper`, {
			[`${props.prefixCls}-wrapper-inline`] : props.inline,
			[className]: className,
		});
		
		const addonBefore = props.addonBefore ? (
			<span className={classNames({
				[`${props.prefixCls}-addon ${props.prefixCls}-addon-before`]: true,
				[addonBeforeCls]: addonBeforeCls	
			})} style={addonBeforeStyle}>{props.addonBefore}</span>
		) : null;
		
		const addonAfter = props.addonAfter ? (
			<span className={classNames({
				[`${props.prefixCls}-addon ${props.prefixCls}-addon-after`]: true,
				[addonAfterCls]: addonAfterCls	
			})} style={addonAfterStyle}>{props.addonAfter}</span>
		) : null;
		
		return (
			<div className={classname} style={style}>
            	{addonBefore}
				<span className={`${props.prefixCls}-inner`}>
					<input 
						{...otherProps} 
						ref="input" 
						type={type}
						style={inputStyle}
						onChange={this.handleChange}
						className={classNames(this.getInputClassName())} 
						onKeyDown={this.handleKeyDown}
					/>
				</span>
				{addonAfter}
            </div>
		);
	}
	
	renderTextarea(){
		return <textarea />;
	}
	
	render(){
		if (this.props.type === 'textarea') {
			return this.renderTextarea();
		}
		return this.renderInput();
	}
		
}