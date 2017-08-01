import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import Popup from '../popup/Popup';

export default class Select extends React.Component{

	static defaultProps = {
		disabled: false,
		readOnly: false,
		block: false,
		tabIndex: 0,
		prefixCls: 'nex-select',
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
		return this.renderSelect();
	}
		
}