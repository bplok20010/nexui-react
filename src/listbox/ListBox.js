import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import _assign from 'object-assign';
import ScrollView from '../scrollview/ScrollView';
import ListItem from './ListItem';
import ListItemGroup from './ListItemGroup';
import {isArray, isUndefined, toArray, isEqual} from '../shared/util';

function copy(data){
	return isArray(data) ? [].concat(data) : data;
}

export default class ListBox extends React.Component{
	
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string,
		valueField: PropTypes.string,
		textField: PropTypes.string,
		itemsField: PropTypes.string,
		items: PropTypes.array,
		filter: PropTypes.func,
		multiple: PropTypes.bool,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};

	static defaultProps = {
		prefixCls: 'nex-listbox',
		valueField: 'value',
		textField: 'text',
		itemsField: 'items',
		items: [],
	};
	
	constructor(props){
		super(props);
		
		const selectedValue = [];
		let value;
		
		if(!isUndefined(props.value)) {
			value = isArray(props.value) ? props.value : [props.value];
		} else if(!isUndefined(props.defaultValue)) {
			value = isArray(props.defaultValue) ? props.defaultValue : [props.defaultValue];
		}
		
		if( value ) {
			selectedValue.push(...value);
		}
		
		this.state = {
			selectedValue
		};	
	}
	
	componentWillReceiveProps({value}){
		this.setState({
			selectedValue: isUndefined(value) ? [] : isArray(value) ? value : [value]
		})
	}
	
	onItemClick=(e) => {
		this.refs.listbox.scrollIntoView(e.target);	
	}
	
	onItemSelect=(item, el) => {
		const { multiple, onChange } = this.props;
		const { selectedValue } = this.state;
		const valueField = 'value';
		
		if( !multiple ) {
			selectedValue.length = 0;	
		}
		
		selectedValue.push(item[valueField]);	
		
		if( !('value' in this.props) ) {
			this.setState({
				selectedValue	
			})	
		}
	
		if( onChange ) {
			onChange(multiple ? copy(selectedValue) : selectedValue[0]);	
		}
	}
	
	onItemDeselect=(item, el) => {
		const { multiple, onChange } = this.props;
		const { selectedValue } = this.state;
		const valueField = 'value';
		
		if( !multiple )	return;
		
		let newSelectedValue = selectedValue.filter((d)=> !isEqual(item[valueField], d));
		
		if( !('value' in this.props) ) {
			this.setState({
				value: newSelectedValue
			})	
		}
		
		if( onChange ) {
			onChange(copy(newSelectedValue));	
		}
		
	}
	
	renderListItems(items, markMap){
		const {textField, valueField, itemsField, prefixCls, filter} = this.props;
		
		return items.map(item=>{
			const isGroup = item[itemsField];
			const itemPrefixCls = `${prefixCls}-item`;
			
			return (filter ? filter(item) : true) ? (!isGroup ? (
				<ListItem 
					key={item[valueField]}
					value={item[valueField]}
					prefixCls={itemPrefixCls}
					selected={markMap[item[valueField]]}
					disabled={item.disabled}
					onClick={this.onItemClick}
					onSelect={this.onItemSelect}
					onDeselect={this.onItemDeselect}
				>
					{item[textField]}
				</ListItem>		
			) : (
				<ListItemGroup prefixCls={`${itemPrefixCls}-group`} key={item[textField]} label={item[textField]}>
					{this.renderListItems(item[itemsField] || [], markMap)}
				</ListItemGroup>
			)) : null;
		});
	}
	
	renderListChild(children, markMap){
			
	}
	
	getListItems(){
		const {textField, valueField, prefixCls, multiple, items, children} = this.props;
		const {selectedValue} = this.state;
		
		const markMap = {};
		
		selectedValue.forEach( v => markMap[v] = true);	
		
		return items ? this.renderListItems(items, markMap) : renderListChild(children, markMap);
	}
	
	render(){
		const {filter, className, value, prefixCls, items, width, height, style={}} = this.props;
		
		if( width ) {
			style.width = width;
		}
		if( height ) {
			style.height = height;
		}
		
		return (
			<ScrollView ref="listbox" scrollViewBodyCls={`${prefixCls}-body`} className={classNames(`${prefixCls}`, className)} style={style}>
				{this.getListItems()}
			</ScrollView>
		);
	}
		
}