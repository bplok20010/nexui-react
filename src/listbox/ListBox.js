import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
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
		scrollViewBodyStyle: PropTypes.object,
		prefixCls: PropTypes.string,
		valueField: PropTypes.string,
		textField: PropTypes.string,
		itemsField: PropTypes.string,
		items: PropTypes.array,
		filter: PropTypes.func,
		multiple: PropTypes.bool,
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		labelInValue: PropTypes.bool,
		onItemClick: PropTypes.func,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		prefixCls: 'nex-listbox',
		valueField: 'value',
		textField: 'text',
		itemsField: 'items',
		labelInValue: false,
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
			selectedValue,
			itemsMap: {}
		};	
	}
	
	componentWillReceiveProps({value}){
		if( !isUndefined(value) ) {
			this.setState({
				selectedValue: isArray(value) ? value : [value]
			});
		}
	}
	
	componentDidMount(){
		const el = findDOMNode(this);
		const scrollview = this.refs.listbox;
		
		const selectedItem = el.querySelector('.nex-listbox-item-selected');
		if( selectedItem ) {
			scrollview.scrollIntoView(selectedItem);
		}
	}
	
	onItemClick=(item, e) => {
		const { onItemClick } = this.props;
		this.refs.listbox.scrollIntoView(e.target);	
		
		if( onItemClick ) onItemClick(item);
	}
	
	transformChangeValue(value){
		const { labelInValue } = this.props;
		const { itemsMap } = this.state;
		
		if( labelInValue ) {
			return isArray(value) ? 
					value.map(v => itemsMap[v]) :
					itemsMap[value];
		}
		
		return value;
	}
	
	onItemSelect=(item, el) => {
		const { multiple, onChange } = this.props;
		const { selectedValue, itemsMap } = this.state;
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
			onChange(this.transformChangeValue(multiple ? copy(selectedValue) : selectedValue[0]));	
		}
	}
	
	onItemDeselect=(item, el) => {
		const { multiple, onChange, labelInValue } = this.props;
		const { selectedValue } = this.state;
		const valueField = 'value';
		
		if( !multiple )	return;
		
		let newSelectedValue = selectedValue.filter((d)=> !isEqual(item[valueField], d));

		if( !('value' in this.props) ) {
			this.setState({
				selectedValue: newSelectedValue
			})	
		}
	
		if( onChange ) {
			onChange(this.transformChangeValue(copy(newSelectedValue)));	
		}
		
	}
	
	renderListItems(items, markMap){
		const {textField, valueField, itemsField, prefixCls, filter} = this.props;
		const {itemsMap} = this.state;
		
		return items.map(item=>{
			if(typeof item === 'string') {
				item = {
					[textField]: item,
					[valueField]: item,
				}	
			}
			
			const isGroup = item[itemsField];
			const itemPrefixCls = `${prefixCls}-item`;
			
			if( !isGroup ) {
				itemsMap[item[valueField]] = item;	
			}
			
			return (filter && !isGroup ? filter(item) : true) ? (!isGroup ? (
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
		const {textField, valueField, itemsField, prefixCls, filter} = this.props;
		const {itemsMap} = this.state;
		
		const itemPrefixCls = `${prefixCls}-item`;
		
		return React.Children.map(children, child=>{
			const props = child.props;
			
			if( child.type.isListItemGroup ) {
				return React.cloneElement(child, {}, this.renderListChild(props.children, markMap));
			}
	
			itemsMap[props[valueField]] = _assign({}, omit(props, ['children', 'selected', 'prefixCls']), { [textField]: props.children });
			
			return React.cloneElement(child, {
				selected: markMap[props[valueField]],
				prefixCls: itemPrefixCls,
				onClick: this.onItemClick,
				onSelect: this.onItemSelect,
				onDeselect: this.onItemDeselect,
			});
		});
	}
	
	getListItems(){
		const {textField, valueField, prefixCls, multiple, items, children} = this.props;
		const {selectedValue} = this.state;
		
		this.state.itemsMap = {};
		
		const markMap = {};
		
		selectedValue.forEach( v => markMap[v] = true);	
		
		return items.length ? this.renderListItems(items, markMap) : this.renderListChild(children, markMap);
	}
	
	render(){
		const {filter, className, value, prefixCls, items, width, height, style={}, scrollViewBodyStyle={}} = this.props;
		
		if( width ) {
			style.width = width;
		}
		if( height ) {
			style.height = height;
		}
		
		return (
			<ScrollView ref="listbox" tabIndex={-1} scrollViewBodyCls={`${prefixCls}-body`} scrollViewBodyStyle={scrollViewBodyStyle} className={classNames(`${prefixCls}`, className)} style={style}>
				{this.getListItems()}
			</ScrollView>
		);
	}
		
}