import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isUndefined, isArray} from '../shared/util';
import Select from '../select/index';
import Input from '../input/Input';

export default class Pagination extends React.Component{
	
	static propTypes = {
		className: PropTypes.string,
		prefixCls: PropTypes.string,
		small: PropTypes.bool,
		total: PropTypes.number.isRequired,
		defaultCurrent: PropTypes.number,
		current: PropTypes.number,
		defaultPageSize: PropTypes.number,
		pageSize: PropTypes.number,
		maxPagesShow: PropTypes.number,
		pageSizeOptions: PropTypes.array,
		onPageSizeChange: PropTypes.func,
		onChange: PropTypes.func,
		prevBtnCls: PropTypes.string,
		nextBtnCls: PropTypes.string,
		layout: PropTypes.string,
		defalutLayoutRender: PropTypes.func,
		totalRender: PropTypes.func,
		prevBtnRender: PropTypes.func,
		nextBtnRender: PropTypes.func,
		itemRender: PropTypes.func,
		pageSizeOptionRender: PropTypes.func,
		jumperRender: PropTypes.func,
		showPrevMore: PropTypes.bool,
		showNextMore: PropTypes.bool,
	};

	static defaultProps = {
		prefixCls: 'nex-pagination',
		small: false,
		total: 0,
		showSizeChanger: false,
		pageSizeOptions: [10, 20, 30, 40],
		maxPagesShow: 5,//必须是奇数，界面上最多显示7页
		prevBtnCls: 'fa fa-angle-left',
		nextBtnCls: 'fa fa-angle-right',
		//total, sizes, prev, pager, next, jumper, default
		layout: 'total, sizes, prev, pager, next, jumper',
		defalutLayoutRender: null,
		totalRender: function(total, pn, ps){
			return `共 ${total} 条`;
		},
		pageSizeOptionRender: function(v){
			return `${v} 条/页`;
		},
		jumperRender: null,
		prevBtnRender: null,
		nextBtnRender: null,
		itemRender: null,
		showPrevMore: true,
		showNextMore: true,
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
		const pageCount = this.getTotalPages();
		
		return classNames({
			[`${prefixCls}-item`]: true,
			[`${prefixCls}-item-first`]: pn == 1,
			[`${prefixCls}-item-last`]: pn == pageCount,
			[`${prefixCls}-item-active`]: current == pn,	
		});
	}
	
	handlePageSizeChange = (v) => {
		const {onPageSizeChange} = this.props;
		
		if( !('pageSize' in this.props) ) {
			this.setState({
				pageSize: v	
			});	
		}
		
		if( onPageSizeChange ) onPageSizeChange(v);	
	}
	
	renderPagination(){
		this.state.current = this.state.current < 1 ? 1 : this.state.current;
		
		const {pageSize, current} = this.state;
		const pageNumber = current;
		const {total, prefixCls, maxPagesShow, itemRender, showPrevMore, showNextMore} = this.props;
		const pageCount = this.getTotalPages();
		const p = ~~(maxPagesShow / 2);
		const prevPage = pageNumber - 1;
		const nextPage = pageNumber + 1;
		
		const toPage = (pn)=>{
			return ()=> this.toPage(pn);
		}
		
		const _itemRender = (pn) => {
			return itemRender ? itemRender.call(this, pn) : pn;	
		};
		
		const loopPage = function(){
			const list = [];
			let end = Math.min(pageNumber + p, pageCount - 1);
			const start = Math.max(end - maxPagesShow + 1, 2);
			
			list.push(<a key="1" className={this.getPageItemCls(1)} onClick={toPage(1)}>{_itemRender(1)}</a>);
			list.push(showPrevMore && start > 2 ? <span key="prev" className={`${prefixCls}-item ${prefixCls}-item-more`}>...</span> : null);
			
			const cpn = end - start + 1;
			
			if( cpn < maxPagesShow ) {
				end = Math.min( pageCount - 1, end + maxPagesShow - cpn );	
			}
			
			for( let page = start;page <= end; page++ ) {
				list.push(<a key={page} className={this.getPageItemCls(page)} onClick={toPage(page)}>{_itemRender(page)}</a>)	
			}
			
			list.push(showNextMore && end < pageCount - 1 ? <span key="next" className={`${prefixCls}-item ${prefixCls}-item-more`}>...</span> : null);
			list.push(pageCount > 1 ? <a key={pageCount} className={this.getPageItemCls(pageCount)}  onClick={toPage(pageCount)}>{_itemRender(pageCount)}</a> : null);
			
			return list;
		}
		
		return loopPage.call(this);
	}
	
	renderLTotal(){
		const {prefixCls, totalRender, total} = this.props;	
		const {current, pageSize} = this.state;	
		
		return <span key="total" className={`${prefixCls}-total-text`}>{totalRender.call(this, total, current, pageSize)}</span>;
	}
	
	renderLSizes(){
		const {prefixCls, pageSizeOptions, pageSizeOptionRender, handlePageSizeChange, small} = this.props;
		const list = pageSizeOptions.map(v => {
			return {
				text: pageSizeOptionRender(v),
				value: v	
			}	
		});
		
		return (
			<span key="sizes" className={`${prefixCls}-pagesize`}>
				<Select options={list} size={small ? 'small' : 'default'} value={this.state.pageSize} onChange={this.handlePageSizeChange} className={`${prefixCls}-changer`}/>
			</span>
		);	
	}
	renderLPrev(){
		const {prefixCls, prevBtnCls, prevBtnRender} = this.props;
		const {current} = this.state;
		const _prevBtnCls = classNames({
			[`${prefixCls}-btn`]: true,
			[`${prefixCls}-prev`]: true,
			[`${prevBtnCls}`]: prevBtnCls,
			[`${prefixCls}-btn-disabled`]: current == 1
		});
		
		return <a key="prev-btn" className={`${_prevBtnCls}`} onClick={()=> this.prevPage()}>{ prevBtnRender ? prevBtnRender.call(this) : null }</a>;
	}
	renderLPager(){
		return this.renderPagination();	
	}
	renderLNext(){
		const {prefixCls, nextBtnCls, nextBtnRender} = this.props;
		const {current} = this.state;
		const totalPages = this.getTotalPages();
		const _nextBtnCls = classNames({
			[`${prefixCls}-btn`]: true,
			[`${prefixCls}-next`]: true,
			[`${nextBtnCls}`]: nextBtnCls,
			[`${prefixCls}-btn-disabled`]: totalPages == current
		});
		
		return <a key="next-btn" className={`${_nextBtnCls}`} onClick={()=> this.nextPage()}>{ nextBtnRender ? nextBtnRender.call(this) : null }</a>;		
	}
	renderLJumper(){
		const {prefixCls, nextBtnCls, jumperRender, small} = this.props;
		const {current} = this.state;
		
		const _toPage = (e)=>{
			const pn = parseInt(e.target.value);
			if( pn ) {
				this.toPage(pn);		
			}
		}
		
		const jumper = <Input style={{width: 40}} key="jumper" size={small ? 'small' : 'default'} defaultValue={current} onPressEnter={_toPage} className={`${prefixCls}-jumper`} />;
		
		return (
			<span key="jumper" className={`${prefixCls}-quick-jumper`}>
				{ jumperRender ? jumperRender.call(this, jumper) : ['前往',jumper,'页'] }
			</span>
		);
	}
	
	renderLDefault(layout){
		const {defalutLayoutRender, prefixCls} = this.props;		
		
		return defalutLayoutRender ? 
			<span key={`defalut-${layout}`} className={`${prefixCls}-layout-default`}>{defalutLayoutRender.call(this, layout, this.props, this.state)}</span> : 
			null ;
	}

	render(){
		const {prefixCls, className, layout, small} = this.props;
		const classes = classNames({
			[`${prefixCls}`]: true,
			[`${prefixCls}-sm`]: small,
		}, className);
		
		return (
			<div className={classes}>
				{layout.split(',').map((l) => {
					switch(l.trim()) {
						case 'total':
							return this.renderLTotal();
							break;	
						case 'sizes':
							return this.renderLSizes();
							break;
						case 'prev':
							return this.renderLPrev();
							break;
						case 'pager':
							return this.renderLPager();
							break;
						case 'next':
							return this.renderLNext();
							break;
						case 'jumper':
							return this.renderLJumper();
							break;
						default:
							return this.renderLDefault(l.trim());
					}	
				})}	
			</div>
		);
	}
		
}