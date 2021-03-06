import React, {PureComponent} from 'react';
//import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import omit from 'omit.js';

export default class ListItem extends React.Component{
	
	static propTypes = {
		prefixCls: PropTypes.string,
		value: PropTypes.any,
		onSelect: PropTypes.func,
		onDeselect: PropTypes.func,
		onClick: PropTypes.func,
		selected: PropTypes.bool,
		disabled: PropTypes.bool,
	}

	static defaultProps = {
		prefixCls: 'nex-listbox-item',
		value: '',
		selected: false,
		disabled: false,
	}
	
	static isListItem = true;
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return !shallowEqual(this.props, nextProps) ||
			   !shallowEqual(this.state, nextState);
	}
	
	handleItemClick=(e)=>{
		const {onSelect, onDeselect, onClick, selected, disabled, value, children} = this.props;
		if( disabled ) return;
		
		const item = {
			value,
			label: children	
		};
		
		if( onClick ) {
			onClick(item, e);	
		}
		
		if( !selected ) {
			onSelect && onSelect(item, this.refs.item)	
		} else {
			onDeselect && onDeselect(item, this.refs.item)	
		}
	}
	
	saveItem = (item) => {
		this.node = item;	
	}
	
	render(){
		const {prefixCls, disabled, selected, active, children} = this.props;
		const classes = classNames({
			[`${prefixCls}`]: true,
			[`${prefixCls}-selected`]: selected,
			[`${prefixCls}-disabled`]: disabled,
		});
		
		const others = omit( this.props, Object.keys(ListItem.propTypes));
		
		return <div 
					{...others}
					ref={this.saveItem}
					className={classes} 
					onClick={this.handleItemClick}
				>
					{children}
				</div>;
	}
		
}