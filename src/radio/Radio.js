import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import RRadio from './RRadio';

export default class Radio extends Component {
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string
	};

	static defaultProps = {
		prefixCls: 'nex-radio',
		className: '',
		style: {}
	};
	
	static contextTypes = {
		radioGroup: PropTypes.any,
	};
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return !shallowEqual(this.props, nextProps) ||
			   !shallowEqual(this.state, nextState) ||
			   !shallowEqual(this.context.radioGroup, nextContext.radioGroup);
	}

	render() {
		const {props, context} = this;
		
		const {
			prefixCls,
			className,
			children,
			style,
			onMouseEnter,
      		onMouseLeave,
			...others
		} = props;

		const classString = classNames({
			[`${prefixCls}-wrapper`]: true,
			[className]: !!className
		});
		
		const { radioGroup } = context;
	
		if (radioGroup) {
			others.onChange = radioGroup.onChange;
			others.checked = props.value+'' === radioGroup.value+'';
			others.disabled = props.disabled || radioGroup.disabled;
		}

		return (
			<label 
				className={classString} 
				style={style}
				onMouseEnter={onMouseEnter}
        		onMouseLeave={onMouseLeave}
			>
				<RRadio
					{...others}
					prefixCls={prefixCls}
				/>
				{children !== undefined ? <span className={`${prefixCls}-label`}>{children}</span> : null}
			</label>
		);
	}
}