import React, {PureComponent, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import omit from 'omit.js';
import _assign from 'object-assign';
import Popup from '../popup/Popup';
import ListBox from '../listbox/index';

export default class Select extends React.Component{
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string,
		options: PropTypes.array,
		dropdownStyle: PropTypes.object,
	};

	static defaultProps = {
		disabled: false,
		readOnly: false,
		block: false,
		tabIndex: 0,
		prefixCls: 'nex-select',
		arrowCls: 'fa fa-caret-down',
		valueField: 'value',
		textField: 'text',
		dropdownStyle: null,
	};
	
	constructor(props){
		super(props);	
		
		this.state = {
			value: props.value || props.defaultValue,
			showDropdown: false	
		}
	}
	
	componentWillReceiveProps({value}){
		this.setState({
			value	
		});	
	}
	
	componentDidMount(){
		$(window).resize(()=>{
			if( this.state.showDropdown ) {
				this.hideDropdown();	
			}	
		});
		
		$(document).on('mousedown', (e)=>{
			if( this.state.showDropdown && (!$(e.target).closest(this.refs.dropdown).length ) ) {
				if( $(e.target).closest(this.refs.select).length ) return;
				this.hideDropdown();	
			}
		});
	}
	
	handleDropdownCreate= (el)=>{
		this.refs.listbox = el;
		this.refs.dropdown = el ? findDOMNode(el) : null;
	}
	
	getSelectText(){
		const {options, valueField, textField} = this.props;
		const value = this.state.value;
		for( let i=0;i<options.length;i++ ) {
			let option = options[i];
			if( option[valueField] + '' === value + '') {
				return option[textField];
			}
		}
		return '';
	}
	
	handleListBoxChange= (value) => {
		const props = this.props;
		if( !('value' in props) ) {
			this.setState({
				value: value
			});	
		}
		
		if( props.onChange ) props.onChange(value);
		
		this.hideDropdown();
	}
	
	getOptions(){
		const {prefixCls, options, children, valueField, textField} = this.props;
		const value = this.state.value;
		
		return (
			<ListBox
				ref={this.handleDropdownCreate}
				valueField={valueField}
				textField={textField}
				items={options}
				value={value}
				onChange={this.handleListBoxChange}
			/>
		);
		
		return (
			<div ref={this.handleDropdownCreate} className={`${prefixCls}-dropdown`}>
				<div className={`${prefixCls}-dropdown-body`}>
					<ul>
						{options.map((item) => {
							const classes = classNames({
								[`${prefixCls}-item`]: true,
								[`${prefixCls}-item-selected`]: String(value) === String(item[valueField]),
								[`${prefixCls}-item-disabled`]: item.disabled,
							});
							return <li key={item[valueField]} className={classes} onClick={()=>{ this.handleItemClick(item) }}>{item[textField]}</li>;	
						})}
					</ul>
				</div>
			</div>
		);	
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
		const dropdownStyle = {};
		
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
		const {prefixCls, tabIndex, block, disabled, readOnly, arrowCls, children, options, ...others} = props;
		const classes = classNames({
			[prefixCls]: true,
			[`${prefixCls}-inline`]: !block,
			[`${prefixCls}-readonly`]: readOnly,
			[`${prefixCls}-disabled`]: disabled,
		});
		
		const otherProps = omit(others, [
			'value',
			'valueField',
			'dropdownStyle',
			'textField'
		]);
		
		return (
			<div>
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
					
				</div>
				<Popup visible={showDropdown} fixed={false} rootCls={`${prefixCls}-dropdown-root`} of={this.refs.select} my="left top" at="left bottom" style={this.getPopupStyle()}>
					{this.getOptions()}
				</Popup>
			</div>
		);
	}
	
	render(){
		return this.renderSelect();
	}
		
}