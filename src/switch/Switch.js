import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function noop() {}

class Switch extends Component {
	static propTypes = {
		className: PropTypes.string,
		size: PropTypes.oneOf(['small', 'default', 'large']),
		prefixCls: PropTypes.string,
		disabled: PropTypes.bool,
		checkedText: PropTypes.any,
		unCheckedText: PropTypes.any,
		onChange: PropTypes.func,
		onMouseUp: PropTypes.func,
		onClick: PropTypes.func,
		tabIndex: PropTypes.number,
		checked: PropTypes.bool,
		defaultChecked: PropTypes.bool,
		checkedColor: PropTypes.string,
		unCheckedColor: PropTypes.string,
	}
	
	static defaultProps = {
		prefixCls: 'nex-switch',
		checkedText: null,
		unCheckedText: null,
		className: '',
		defaultChecked: false,
		onChange: noop,
		onClick: noop,
	}
	
	constructor(props) {
		super(props);

		let checked = false;
		if ('checked' in props) {
			checked = !!props.checked;
		} else {
			checked = !!props.defaultChecked;
		}
		this.state = { checked };
	}

	componentWillReceiveProps(nextProps) {
		if ('checked' in nextProps) {
			this.setState({
				checked: !!nextProps.checked,
			});
		}
	}

	setChecked(checked) {
		if (this.props.disabled) {
			return;
		}
		if (!('checked' in this.props)) {
			this.setState({
				checked,
			});
		}
		this.props.onChange(checked);
	}

	toggle = () => {
		const { onClick } = this.props;
		const checked = !this.state.checked;
		this.setChecked(checked);
		onClick(checked);
	}

	handleKeyDown = (e) => {
		if (e.keyCode === 37) { // Left
			this.setChecked(false);
		} else if (e.keyCode === 39) { // Right
			this.setChecked(true);
		} else if (e.keyCode === 32 || e.keyCode === 13) { // Space, Enter
			this.toggle();
		}
	}

	// Handle auto focus when click switch in Chrome
	handleMouseUp = (e) => {
		if (this.node) {
			this.node.blur();
		}
		if (this.props.onMouseUp) {
			this.props.onMouseUp(e);
		}
	}

	saveNode = (node) => {
		this.node = node;
	}

	render() {
		const { className, prefixCls, disabled, size,
			checkedText, tabIndex, unCheckedText, checkedColor, unCheckedColor, style = {}, ...restProps } = this.props;
		const checked = this.state.checked;
		const switchTabIndex = disabled ? -1 : (tabIndex || 0);
		const switchClassName = classNames({
			[prefixCls]: true,
			[`${prefixCls}-small`]: size === 'small',
			[`${prefixCls}-checked`]: checked,
			[`${prefixCls}-disabled`]: disabled,
			[className]: !!className,
		});
		
		if( checked && !!checkedColor ) {
			style.borderColor = checkedColor;
			style.backgroundColor = checkedColor;
		}
		
		if( !checked && !!unCheckedColor ) {
			style.borderColor = unCheckedColor;
			style.backgroundColor = unCheckedColor;
		}
		
		return (
			<span
				{...restProps}
				style={style}
				className={switchClassName}
				tabIndex={switchTabIndex}
				ref={this.saveNode}
				onKeyDown={this.handleKeyDown}
				onClick={this.toggle}
				onMouseUp={this.handleMouseUp}
			>
				<span className={`${prefixCls}-inner`}>
					{checked ? checkedText : unCheckedText}
				</span>
			</span>
		);
	}
}

export default Switch;