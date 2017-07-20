import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import RCheckbox from './RCheckbox';

export default class Checkbox extends Component {
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string
	};

	static defaultProps = {
		prefixCls: 'nex-checkbox',
		className: '',
		style: {}
	};
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return !shallowEqual(this.props, nextProps) ||
			   !shallowEqual(this.state, nextState) ||
			   !shallowEqual(this.context.checkboxGroup, nextContext.checkboxGroup);
	}

	render() {
		const {
			prefixCls,
			className,
			children,
			style,
			onMouseEnter,
      		onMouseLeave,
			...others
		} = this.props;

		const classString = classNames({
			[`${prefixCls}-wrapper`]: true,
			[className]: !!className
		});

		return (
			<label 
				className={classString} 
				style={style}
				onMouseEnter={onMouseEnter}
        		onMouseLeave={onMouseLeave}
			>
				<RCheckbox
					{...others}
					prefixCls={prefixCls}
				/>
				{children !== undefined ? <span class={`${prefixCls}-label`}>{children}</span> : null}
			</label>
		);
	}
}