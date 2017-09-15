import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isUndefined, isArray} from '../shared/util';
import Select from '../select/index';

export default class Pagination extends React.Component{
	
	static propTypes = {
		className: PropTypes.string,
		prefixCls: PropTypes.string,
		total: PropTypes.number.isRequired,
		defaultCurrent: PropTypes.number,
		current: PropTypes.number,
		defaultPageSize: PropTypes.number,
		pageSize: PropTypes.number,
		maxPagesShow: PropTypes.number,
		pageSizeOptions: PropTypes.array,
		onPageSizeChange: PropTypes.func,
		onChange: PropTypes.func,
	};

	static defaultProps = {
		prefixCls: 'nex-pagination',
		total: 0,
		showSizeChanger: false,
		pageSizeOptions: [10, 20, 30, 40],
		maxPagesShow: 5,//必须是奇数，界面上最多显示7页
	};
	
	constructor(props, ...args){
		super(props, ...args);
		
		this.state = {
			current: props.current || props.defaultCurrent || 1,
			pageSize: props.pageSize || props.defaultPageSize || 10,
		};
	}
	
	componentWillReceiveProps(props){
		
		if( !isUndefined(props.current) ) {
			this.setState({
				current: props.current	
			});	
		}
		if( !isUndefined(props.pageSize) ) {
			this.setState({
				pageSize: props.pageSize	
			});	
		}
	}
	
	toPage(num){
		if( num === this.state.current ) return;
		const props = this.props;
		const pageCount = this.getTotalPages();
		
		num = Math.max( Math.min(num, pageCount), 1 );
		
		if( !('current' in props) ) {
			this.setState({
				current: num
			});	
		}
		
		if( props.onChange ) props.onChange(num);
	}
	
	prevPage(){
		let current = this.state.current;
		
		this.toPage(--current);
	}
	
	nextPage(){
		let current = this.state.current;
		
		this.toPage(++current);	
	}
	
	/**
	 * 获取总页数
	 */
	getTotalPages(){
		return Math.max(Math.ceil( this.props.total/this.state.pageSize ), 1);	
	}
	/**
	 * 获取当前页码的样式
	 */
	getPageItemCls(pn){
		const {prefixCls} = this.props;
		const {current} = this.state;
		
		return classNames({
			[`${prefixCls}-item`]: true,
			[`${prefixCls}-item-active`]: current == pn,	
		});
	}
	
	handlePageItemClick(pn){
			
	}
	
	renderPagination(){
		this.state.current = this.state.current < 1 ? 1 : this.state.current;
		
		const {pageSize, current} = this.state;
		const pageNumber = current;
		const {total, prefixCls, maxPagesShow} = this.props;
		const pageCount = this.getTotalPages();
		const p = ~~(maxPagesShow / 2);
		const prevPage = pageNumber - 1;
		const nextPage = pageNumber + 1;
		
		const toPage = (pn)=>{
			return ()=> this.toPage(pn);
		}
		
		const loopPage = function(){
			const list = [];
			let end = Math.min(pageNumber + p, pageCount - 1);
			const start = Math.max(end - maxPagesShow + 1, 2);
			
			list.push(<li key="1" className={this.getPageItemCls(1)} onClick={toPage(1)}>1</li>);
			list.push(start > 2 ? <li key="prev" className="">...</li> : null);
			
			const cpn = end - start + 1;
			
			if( cpn < maxPagesShow ) {
				end = Math.min( pageCount - 1, end + maxPagesShow - cpn );	
			}
			
			for( let page = start;page <= end; page++ ) {
				list.push(<li key={page} className={this.getPageItemCls(page)} onClick={toPage(page)}>{page}</li>)	
			}
			
			list.push(end < pageCount - 1 ? <li key="next">...</li> : null);
			list.push(pageCount > 1 ? <li key={pageCount} className={this.getPageItemCls(pageCount)}  onClick={toPage(pageCount)}>{pageCount}</li> : null);
			
			return list;
		}
		
		return (
			<ul className={`${prefixCls}-list`}>
				{loopPage.call(this)}
			</ul>
		);
		
	}

	render(){
		const {prefixCls} = this.props;
		const pageSizeOptions = this.props.pageSizeOptions;
		
		const list = pageSizeOptions.map(v => {
			return {
				text: v,
				value: v	
			}	
		});
		
		return (
			<div className={`${prefixCls}`}>
				<Select options={list} value={this.state.pageSize}/>
				<span className={`${prefixCls}-btn ${prefixCls}-prev`}>prev</span>
				{this.renderPagination()}
				<span className={`${prefixCls}-btn ${prefixCls}-next`}>next</span>
			</div>
		);
	}
		
}