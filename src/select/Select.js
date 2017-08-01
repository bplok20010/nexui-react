import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';
import Popup from '../popup/Popup';

export default class Select extends React.Component{
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string,
		options: PropTypes.array,
	};

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
	
	constructor(props){
		super(props);	
		
		this.state = {
			value: props.value || props.defaultValue,
			showDropdown: false	
		}
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
		})
	}
	
	componentWillReceiveProps({value}){
		this.setState({
			value	
		});	
	}
	
	handleDropdownCreate= (el)=>{
		this.refs.dropdown = el;
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
	
	handleItemClick(item){
		const props = this.props;
		if( !('value' in props) ) {
			this.setState({
				value: item[props.valueField]	
			});	
		}
		
		if( props.onChange ) props.onChange(item[props.valueField]);
		
		this.hideDropdown();
	}
	
	getOptions(){
		const {prefixCls, options, children, valueField, textField} = this.props;
		const value = this.state.value;
		
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
		}, ()=>{
			const {dropdown, select} = this.refs;
			$(dropdown).css('minWidth', $(select).outerWidth())
			$(dropdown).css('maxHeight', $(window).height() * .7)
		});	
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
			'textField'
		]);
		
		return (
			<div>
				<div ref="select" className={classes} tabIndex={tabIndex} onClick={this.handleClick} {...otherProps}>
					<div className={`${prefixCls}-text`}>{this.getSelectText()}</div>
					<span className={classNames({
						[`${prefixCls}-arrow`]: true,
						[arrowCls]: true	
					})}></span>
					
				</div>
				<Popup visible={showDropdown} fixed={false} of={this.refs.select} my="left top" at="left bottom">
					{this.getOptions()}
				</Popup>
			</div>
		);
	}
	
	render(){
		return this.renderSelect();
	}
		
}