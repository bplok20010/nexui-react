import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import _assign from 'object-assign';
import ScrollView from '../scrollview/ScrollView';
import ListItem from './ListItem';
import {isArray} from '../shared/util';

function copy(data){
	return isArray(data) ? [].concat(data) : data;
}

export default class ListBox extends React.Component{
	
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string,
		items: PropTypes.array,
		filter: PropTypes.func,
		multiple: PropTypes.bool,
	};

	static defaultProps = {
		prefixCls: 'nex-listbox',
		valueField: 'value',
		textField: 'text',
		items: []
	};
	
	constructor(props){
		super(props);
		
		this.state = {
			value: props.value || props.defaultValue	
		};	
	}
	
	onSelect(item){
		const props = this.props;
		const state = this.state;
		const multiple = props.multiple;
		
		let v = copy(state.value);
		
		if( multiple ) {
			if( !isArray(v) ) {
				v = [v]	
			}
			v.push(item[props.valueField])
		} else {
			//if( isArray(v) ) {
			//	v = v[0]
			//}	
			v = item[props.valueField]
		}
		
		if( !('value' in props) ) {
			this.setState({
				value: v	
			})	
		}
	
		if( props.onChange ) {
			props.onChange(v)	
		}
	}
	
	onDeselect(item){
		const {textField, valueField, multiple, onChange} = this.props;
		const state = this.state;
		if( !multiple )	return;
		let v = copy(state.value);
		if( !isArray(v) ) {
			v = [v]	
		}
		
		let idx = v.indexOf(item[valueField]);
		
		if( idx >= 0 )
			v.splice(idx , 1);
		
		if( !('value' in this.props) ) {
			this.setState({
				value: v	
			})	
		}
		
		if( onChange ) {
			onChange(v)	
		}
		
	}
	
	componentWillReceiveProps({value}){
		this.setState({
			value	
		})
	}
	
	getListItem(item){
		const {textField, valueField, prefixCls, multiple} = this.props;
		const {value} = this.state;
		
		const markMap = {};
		
		if( isArray(value) ) {
			value.forEach( v => markMap[v] = true);	
		} else {
			markMap[value] = true;	
		}
		
		return (
			<ListItem 
				key={item[valueField]}
				value={item[valueField]}
				prefixCls={`${prefixCls}-item`}
				selected={markMap[item[valueField]]}
				disabled={item.disabled}
				onSelect={()=>this.onSelect(item)}
				onDeselect={()=>this.onDeselect(item)}
			>
				{item[textField]}
			</ListItem>
		);
	}
	
	render(){
		const {filter, className, value, prefixCls, items, width, height, style={}} = this.props;
		
		return (
			<div ref="listbox" className={classNames(`${prefixCls}`, className)} style={style}>
				<ScrollView scrollViewBodyCls={`${prefixCls}-body`}>
					{items.map((item, i) => {
						return (filter ? filter(item, i) : true) ? this.getListItem(item) : null;	
					})}
				</ScrollView>
			</div>
		);
	}
		
}