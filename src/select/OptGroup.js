import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export default class OptGroup extends React.Component{

	static defaultProps = {
		prefixCls: 'nex-select-item-group',
		arrowCls: 'fa fa-caret-down',
		valueField: 'value',
		textField: 'text'
	};
	
	
	
	renderSelect(){
		const props = this.props;
		const {prefixCls, tabIndex, block, disabled, readOnly, arrowCls, children, options, ...others} = props;
		const classes = classNames({
			[prefixCls]: true,
			[`${prefixCls}-inline`]: !block,
			[`${prefixCls}-readonly`]: readOnly,
			[`${prefixCls}-disabled`]: disabled,
		});
		
		if( 'value' in props ) {
			
		}
		
		const otherProps = omit(others, [
			'value',
			'defaultValue'
		]);
		
		return (
			<div className={classes} tabIndex={tabIndex} {...otherProps}>
				<div className={`${prefixCls}-text`}></div>
				<span className={classNames({
					[`${prefixCls}-arrow`]: true,
					[arrowCls]: true	
				})}></span>
			</div>
		);
	}
	
	render(){
		const {prefixCls, children} = this.props;
		return (
			<div className={prefixCls}>
				<div className={`${prefixCls}-title`}>{children}</div>
				<div className={`${prefixCls}-list`}>
					
				</div>
			</div>
		);
	}
		
}