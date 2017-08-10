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
	
	handleItemClick=(e)=>{
		const {onSelect, onDeselect, onClick, selected, disabled, value, children} = this.props;
		if( disabled ) return;
		
		if( onClick ) {
			onClick(e);	
		}
		
		const item = {
			value,
			text: children	
		};
		
		if( !selected ) {
			onSelect && onSelect(item, this.refs.item)	
		} else {
			onDeselect && onDeselect(item, this.refs.item)	
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

		return <div ref="item" className={classes} onClick={this.handleItemClick}>{children}</div>;
	}
		
}