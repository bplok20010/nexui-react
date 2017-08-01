import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export default class ListItem extends React.Component{

	static defaultProps = {
		prefixCls: 'nex-listbox-item',
		value: '',
		label: '',
		selected: false,
		disabled: false,
	};
	
	handleItemClick=()=>{
		const {onSelect} = this.props;
		if( onSelect ) {
			onSelect()	
		}	
	}
	
	render(){
		const {value, label, disabled, selected} = this.props;
		const classes = classNames({
			[`${prefixCls}`]: true,
			[`${prefixCls}-selected`]: selected,
			[`${prefixCls}-disabled`]: disabled,
		});

		return <div className={classes} onClick={this.handleItemClick}>{label}</div>;
	}
		
}