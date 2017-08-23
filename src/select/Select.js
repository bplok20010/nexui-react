import React, {PureComponent, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import omit from 'omit.js';
import _assign from 'object-assign';
import {uuid, isUndefined, isArray} from '../shared/util';
import Popup from '../popup/Popup';
import ListBox from '../listbox/index';


const {ListItem, ListItemGroup} = ListBox;

export default class Select extends React.Component{
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string,
		options: PropTypes.array,
		dropdownCls: PropTypes.string,
		dropdownDestroyOnClose: PropTypes.bool,
		dropdownStyle: PropTypes.object,
		textInValue: PropTypes.bool,
	};

	static defaultProps = {
		disabled: false,
		readOnly: false,
		block: false,
		options: [],
		tabIndex: 0,
		prefixCls: 'nex-select',
		arrowCls: 'fa fa-caret-down',
		valueField: 'value',
		textField: 'text',
		optionsField: 'options',
		dropdownCls: null,
		dropdownStyle: null,
		dropdownDestroyOnClose: true,
		textInValue: false,
	};
	
	constructor(props){
		super(props);	
		
		this.state = {
			value: props.value || props.defaultValue,
			showDropdown: false,
			optionsMap: {},
			_ext: uuid(6),
		}
		
		this.updateOptionsMap(props);
	}
	
	componentWillReceiveProps(props){
		this.updateOptionsMap(props);
		
		if( !isUndefined(props.value) ) {
			this.setState({
				value: props.value	
			});	
		}
	}
	//使用jquery的position做定位，所以这时候jquery是必定存在的
	componentDidMount(){
		const ext = this.state._ext;
		
		$(window).on(`resize.${ext}`, ()=>{
			if( this.state.showDropdown ) {
				this.hideDropdown();	
			}	
		});
		
		$(document.body).on(`mousewheel.${ext} DOMMouseScroll.${ext}`, (e)=>{
			if( this.state.showDropdown && (!$(e.target).closest(this.refs.dropdown).length ) ) {
				if( $(e.target).closest(this.refs.select).length ) return;
				this.hideDropdown();	
			}
		});
		
		$(document).on(`mousedown.${ext}`, (e)=>{
			if( this.state.showDropdown && (!$(e.target).closest(this.refs.dropdown).length ) ) {
				if( $(e.target).closest(this.refs.select).length ) return;
				this.hideDropdown();	
			}
		});
	}
	
	componentWillUnmount(){
		const ext = this.state._ext;
		$(window).off(`.${ext}`);	
		$(document.body).off(`.${ext}`);
		$(document).off(`.${ext}`);
	}
	
	updateOptionsMap(props){
		const {options, children, valueField, textField, optionsField} = props;	
		const maps = {};
		
		function parseOptions(list){
			list.forEach(option => {
				if( option[optionsField] ) {
					parseOptions(option[optionsField]);
				} else {
					maps[option[valueField]] = option;
				}
			});	
		}
		
		function parseChildren(childs){
			React.Children.map(childs, child=>{
				const props = child.props;
			
				if( child.type.isOptOption ) {
					parseChildren(props.children);
				} else {
					maps[props[valueField]] = _assign(omit(props, ['children']), { [textField]: props.children });
				}
			});	
		}
		
		if( options && options.length ) {
			parseOptions(options);	
		} else {
			parseChildren(children);		
		}
		
		this.state.optionsMap = maps;
	}
	
	handleDropdownCreate= (el)=>{
		this.refs.listbox = el;
		this.refs.dropdown = el ? findDOMNode(el) : null;
	}
	
	getSelectText(){
		const {options, valueField, textField} = this.props;
		const value = this.state.value;
		
		const ret = this.state.optionsMap[value];
		
		return ret ? ret[textField] : value;
	}
	
	transformChangeValue(value){
		const { textInValue } = this.props;
		const { optionsMap } = this.state;
		
		if( textInValue ) {
			return isArray(value) ? 
					value.map(v => optionsMap[v]) :
					optionsMap[value];
		}
		
		return value;
	}
	
	handleListBoxChange= (value) => {
		const props = this.props;
		if( !('value' in props) ) {
			this.setState({
				value: value
			});	
		}
		
		if( props.onChange ) props.onChange(this.transformChangeValue(value));
		
		this.hideDropdown();
	}
	
	getSelectOptions(){
		const {valueField, textField, optionsField, options, children} = this.props;
		const value = this.state.value;
			
		return (
			<ListBox
				ref={this.handleDropdownCreate}
				valueField={valueField}
				textField={textField}
				itemsField={optionsField}
				value={value}
				items={options}
				children={this.renderSelectChild(children)}
				onChange={this.handleListBoxChange}
			/>
		);		
	}
	
	renderSelectChild(children){
		const {textField, valueField} = this.props;
		
		return React.Children.map(children, child=>{
			const props = child.props;
			
			if( child.type.isOptOption ) {
				return <ListItemGroup label={props[textField]}>{this.renderSelectChild(props.children)}</ListItemGroup>;
			}
			
			return <ListItem {...props} />;
		});	
	}
	
	hideDropdown(){
		this.setState({
			showDropdown: false	
		});	
	}
	
	handleClick= (e) => {
		this.setState({
			showDropdown: !this.state.showDropdown
		});	
	}
	
	getPopupStyle(){
		const {showDropdown} = this.state;
		const selectEl = this.refs.select;
		const dropdownStyle = {
			maxWidth: 0,
			maxHeight: 0,	
		};
		
		if( showDropdown && selectEl ) {
			const rect = selectEl.getBoundingClientRect();
			dropdownStyle.minWidth = selectEl.offsetWidth;	
			dropdownStyle.maxWidth = selectEl.offsetWidth + rect.right - 10;
			dropdownStyle.maxHeight = Math.max(rect.top, window.innerHeight - rect.top - selectEl.offsetHeight) - 10;
		}	
		
		return _assign(dropdownStyle, this.props.dropdownStyle);
	}
	
	renderSelect(){
		const props = this.props;
		const {showDropdown} = this.state;
		const {prefixCls, tabIndex, block, disabled, readOnly, arrowCls, children, options, dropdownCls, dropdownDestroyOnClose, ...others} = props;
		const classes = classNames({
			[prefixCls]: true,
			[`${prefixCls}-inline`]: !block,
			[`${prefixCls}-readonly`]: readOnly,
			[`${prefixCls}-disabled`]: disabled,
		});
		
		const otherProps = omit(others, [
			'value',
			'valueField',
			'dropdownCls',
			'dropdownStyle',
			'dropdownDestroyOnClose',
			'textField',
			'optionsField',
			'textInValue',
		]);
		
		return (
			<div 
				{...otherProps}
				ref="select" 
				className={classes} 
				tabIndex={tabIndex} 
				onClick={this.handleClick}
			>
				<div className={`${prefixCls}-text`}>{this.getSelectText()}</div>
				<span className={classNames({
					[`${prefixCls}-arrow`]: true,
					[arrowCls]: true	
				})}></span>
				<Popup visible={showDropdown} className={dropdownCls} destroyOnClose={dropdownDestroyOnClose} fixed={false} rootCls={`${prefixCls}-dropdown-root`} of={this.refs.select} my="left top" at="left bottom" style={this.getPopupStyle()}>
					{this.getSelectOptions()}
				</Popup>
			</div>
		);
	}
	
	render(){
		return this.renderSelect();
	}
		
}