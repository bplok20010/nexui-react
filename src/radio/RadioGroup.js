import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import Radio from './Radio';

export default class RadioGroup extends React.Component {
	static defaultProps = {
		options: [],
		prefixCls: 'nex-radio-group',
	};

	static propTypes = {
		defaultValue: PropTypes.any,
		value: PropTypes.any,
		options: PropTypes.array.isRequired,
		onChange: PropTypes.func,
	};
	
	static childContextTypes = {
		radioGroup: PropTypes.any,
	};

	constructor(props) {
		super(props);
		this.state = {
			value: props.value || props.defaultValue || null,
		};
	}
	
	getChildContext() {
		return {
			radioGroup: {
				onChange: this.toggleOption,
				value: this.state.value,
				disabled: this.props.disabled,
			},
		};
	}

	componentWillReceiveProps(nextProps) {
		if ('value' in nextProps) {
			this.setState({
				value: nextProps.value || null,
			});
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return !shallowEqual(this.props, nextProps) ||
			!shallowEqual(this.state, nextState);
	}
	getOptions() {
		const { options } = this.props;
		return options.map(option => {
			if (typeof option === 'string') {
				return {
					label: option,
					value: option,
				};
			}
			return option;
		});
	}
	toggleOption = (e) => {
		const lastValue = this.state.value;
		const { value } = e.target;
		
		if (!('value' in this.props)) {
			this.setState({ value });
		}
		const onChange = this.props.onChange;
		if (onChange && ''+value !== ''+lastValue) {
			onChange(value);
		}
	}
	render() {
		const { props, state } = this;
		const { prefixCls, className, options,style={} } = props;
		let children = props.children;
		if (options && options.length > 0) {
			children = this.getOptions().map(option => (
				<Radio
					key={option.value}
					disabled={'disabled' in option ? option.disabled : props.disabled}
					value={option.value}
					checked={state.value + '' === option.value + ''}
					onChange={this.toggleOption}
					className={`${prefixCls}-item`}
				>
					{option.label}
				</Radio>
			));
		}

		const classString = classNames(prefixCls, className);
		return (
			<div className={classString} style={style}>
				{children}
			</div>
		);
	}
}