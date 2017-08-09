import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import shallowEqual from 'shallowequal';

export default class ListItem extends React.Component{

	static defaultProps = {
		prefixCls: 'nex-listbox-item',
		value: '',
		selected: false,
		disabled: false,
	};
	
	handleItemClick=()=>{
		const {onSelect, onDeselect, selected, disabled} = this.props;
		if( disabled ) return;
		if( !selected ) {
			onSelect && onSelect()	
		} else {
			onDeselect && onDeselect()	
		}
	}
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return !shallowEqual(this.props, nextProps) ||
			   !shallowEqual(this.state, nextState);
	}
	
	render(){
		const {value, prefixCls, disabled, selected, children} = this.props;
		const classes = classNames({
			[`${prefixCls}`]: true,
			[`${prefixCls}-selected`]: selected,
			[`${prefixCls}-disabled`]: disabled,
		});

		return <div className={classes} onClick={this.handleItemClick}>{children}</div>;
	}
		
}