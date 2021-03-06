import {disableSelection, on, contains, getOffset, isVisible, getStyle} from '../shared/dom';
import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import ScrollViewBody from './ScrollViewBody';

export default class ScrollView extends React.Component {
	static propTypes = {
		prefixCls: PropTypes.string,
		className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		scrollViewBodyCls: PropTypes.string,
		scrollViewBodyStyle: PropTypes.object,
		overflow: PropTypes.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
		overflowX: PropTypes.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
		overflowY: PropTypes.oneOfType(['hidden', 'auto', 'scroll', 'visible']),
		wheelDir: PropTypes.oneOfType(['x', 'y']),
		thumbCls: PropTypes.string,
		trackCls: PropTypes.string,
		scrollBarSize: PropTypes.number,
		thumbSize: PropTypes.number,
		thumbMinSize: PropTypes.number,
		thumbMaxSize: PropTypes.number,
		showTrack: PropTypes.bool,
		scrollBarOffsetTopOrLeft: PropTypes.number,
		scrollBarOffsetRightOrBottom: PropTypes.number,
		wheelStep: PropTypes.number,
		enablePreventDefaultOnEnd: PropTypes.bool,
		onScroll: PropTypes.func,
		onHScrollEnd: PropTypes.func,
		onVScrollEnd: PropTypes.func,
		onHScrollStart: PropTypes.func,
		onVScrollStart: PropTypes.func,
	};

	static defaultProps = {
		prefixCls: 'nex-scroll',
		className: '',
		scrollViewBodyCls: '',
		overflow: 'auto',
		overflowX: 'auto',
		overflowY: 'auto',
		scrollBarSize: 7,
		scrollBarOffsetTopOrLeft: 2,
		scrollBarOffsetRightOrBottom: 0,
		wheelDir: 'y',
		thumbCls: '',
		trackCls: '',
		thumbSize: null,
		thumbMinSize: 6,
		thumbMaxSize: 999999,
		showTrack: true,
		wheelStep: 100,
		enablePreventDefaultOnEnd: true,
		onScroll: null,
		onHScrollEnd: null,
		onVScrollEnd: null,
		onHScrollStart: null,
		onVScrollStart: null,
	};
	
	static childContextTypes = {
		ScrollView: PropTypes.object,
	};
	
	constructor(props){
		super(props);
		
		this._refs = {};
		
		this.state = {
			shouldComponentUpdate: true,
			hasScrollX: false,
			hasScrollY: false,
			thumbXSize: null,
			thumbYSize: null,
			isUpdating: false,
			scrollXRatio: null,
			scrollYRatio: null,
			scrollTop: 0,
			scrollLeft: 0,
			origScrollViewPaddingRight: null,
			origScrollViewPaddingBottom: null,
			lastScrollViewPaddingRight: null,
			lastScrollViewPaddingBottom: null,
		};
	}
	
	getChildContext() {
		return {
			ScrollView: this,
		};
	}
	
	componentDidMount(){
		
		this.updateScrollBarLayoutAndPosition();
	}
	
	componentWillReceiveProps(){
		const state = this.state;
		state.origScrollViewPaddingRight = null;
		state.lastScrollViewPaddingRight = null;
		state.origScrollViewPaddingBottom = null;
		state.lastScrollViewPaddingBottom = null;
		
		this.setState({
			shouldComponentUpdate: true,	
		});	
	}
	
	componentDidUpdate(){
		if( !this.state.isUpdating )
			this.updateScrollBarLayoutAndPosition();			
	}
	
	saveRef(name, node){
		this._refs[name] = node;	
	}
	
	getRef(name) {
		return this._refs[name];	
	}
	
	handleWheel=(()=>{
		const defNoop = function(e){
			e.preventDefault();		
		};
		const noop = function(){};
		//滚动到底部时下一次滚动不需要禁用默认行为
		//dir 1 向下 -1 向上
		let nextEnd = defNoop;
		let lastDir = 1;	
		return (e) => {
			const deltaY = e.deltaY;
			const {wheelStep, wheelDir, enablePreventDefaultOnEnd} = this.props;
			const curDir = deltaY > 0 ? 1 : -1;
			const state = this.state;
			
			if( lastDir != curDir ) {
				lastDir = curDir;
				nextEnd = defNoop;	
			}
			
			if( !state.hasScrollY && wheelDir === 'y' ) {
				return;	
			} else if( !state.hasScrollX && wheelDir === 'x' ) {
				return;		
			}
			
			this.scrollTo( 
				wheelDir, 
				deltaY > 0 ? 
				(this.getScrollPos(wheelDir) + wheelStep) : 
				(this.getScrollPos(wheelDir) - wheelStep) 
			);
			
			if( enablePreventDefaultOnEnd/* && wheelDir !== 'x' */) {
				var isEnd = deltaY > 0 ? this.isScrollEnd(wheelDir) : this.getScrollPos(wheelDir) <= 0;
				if( !isEnd ) {
					e.preventDefault();
					nextEnd = defNoop;
				} else {
					nextEnd(e);
					nextEnd = noop;	
				}
			} else {
				e.preventDefault();
			}
		}
	})()
	
	handleScroll= (e) => {
		const {onScroll, onHScrollEnd, onHScrollStart, onVScrollEnd, onVScrollStart } = this.props;
		const state = this.state;
		const target = e.target;
		
		const lastScrollTop = state.scrollTop,
			  lastScrollLeft = state.scrollLeft;
		
		state.scrollTop = target.scrollTop;
		state.scrollLeft = target.scrollLeft;
		
		this.updateScrollBarPosition();
		
		if( onScroll ) {
			onScroll.call(this, state.scrollLeft, state.scrollTop, e);	
		}
		
		if( lastScrollTop !== state.scrollTop ) {
			if( onVScrollEnd && this.isScrollEnd('y') ) {
				onVScrollEnd.call(this, e);	
			}
			if( onVScrollStart && state.scrollTop === 0 ) {
				onVScrollStart.call(this, e);		
			}
		}
		
		if( lastScrollLeft !== state.scrollLeft ) {
			if( onHScrollEnd && this.isScrollEnd('x') ) {
				onHScrollEnd.call(this, e);	
			}
			if( onHScrollStart && state.scrollLeft === 0 ) {
				onHScrollStart.call(this, e);		
			}
		}
		
	}
	
	handleTrackMouseDown(e, dir = 'y'){
		if(e.button !== 0) {
			return;	
		}
		const target = e.target;
		const {scrollXRatio, scrollYRatio} = this.state;
		const {verticalBarThumbEl, horizontalBarThumbEl} = this._refs;
		const rect = target.getBoundingClientRect();
		const isVertical = dir === 'y';
		const proto = isVertical ? 'scrollTop' : 'scrollLeft';
		const trackPos = rect[isVertical ? 'top' : 'left'] + 
					 ((document.documentElement && document.documentElement[proto]) ? 
					 document.documentElement[proto] : document.body[proto]);
		const thumbEl = isVertical ? verticalBarThumbEl : horizontalBarThumbEl;		
			
		const clickPagePos = e[isVertical ? 'pageY' : 'pageX'];  
		const clickPos = clickPagePos - trackPos;	
					 
		const thumbPos = parseInt(getStyle(thumbEl, isVertical ? 'top' : 'left'), 10);
		const thumbSize = thumbEl[isVertical ? 'offsetHeight' : 'offsetWidth'];
		
		const ratio = isVertical ? scrollYRatio : scrollXRatio;
		
		if( clickPos < thumbPos ) {
			this.scrollTo(dir, (clickPagePos- trackPos ) * ratio);
		} else {
			this.scrollTo(dir, (thumbPos + clickPagePos - (thumbPos + thumbSize + trackPos)) * ratio);
		}
	}
	
	handleThumbMouseDown(e, dir = 'y'){
		const doc = document;
		const state = this.state;
		const startY = e.pageY;
		const startX = e.pageX;
		const start = this.getScrollPos(dir);
		const ratio = state[dir === 'y' ? 'scrollYRatio' : 'scrollXRatio'];
		
		let moveOff, upOff, cursor;
		
		cursor = doc.body.style.cursor;
		
		doc.body.style.cursor = 'default';
		
		const enableSelection = disableSelection(doc.body);
		
		upOff = on(doc, 'mouseup', (e)=>{
			enableSelection()
			upOff();
			moveOff();	
			doc.body.style.cursor = cursor;
		});
		
		moveOff = on(doc, 'mousemove', (e)=>{
			var moveDist = dir === 'y' ? (e.pageY - startY) : (e.pageX - startX);
			var sPos = start + moveDist * ratio;
			this.scrollTo(dir, sPos);
		});
	}
	
	scrollTo(dir = 'y', pos){
		const scrollview = this.getScrollViewBody();
		const proto = dir === 'y' ? 'scrollTop' : 'scrollLeft';
		
		if( this.state[proto] === pos ) {
			return;	
		}
		
		scrollview[proto] = pos;	
	}
	
	scrollX(sLeft){
		this.scrollTo('x', sLeft)	
	}
	
	scrollY(sTop){
		this.scrollTo('y', sTop)		
	}
	
	scrollEnd(dir = 'y'){
		const scrollview = this.getScrollViewBody();
		const proto = dir === 'y' ? 'Height' : 'Width';
		
		const c = scrollview[`client${proto}`];
		const s = scrollview[`scroll${proto}`];
		
		if( s <= c ){
			return;	
		}
		
		this.scrollTo( dir, s - c );
	}
	
	scrollIntoView(el){
		const scrollview = this.getScrollViewBody();
		if( !contains(scrollview, el) || !isVisible(el) ) return;
		
		const pOffset = getOffset(scrollview);
		const tOffset = getOffset(el);
		
		const pTop = pOffset.top,
			  pLeft = pOffset.left,
			  pBottom = pOffset.top + scrollview.offsetHeight,
			  pRight = pOffset.left + scrollview.offsetWidth,
			  tTop = tOffset.top,
			  tLeft = tOffset.left,
			  tBottom = tOffset.top + el.offsetHeight,
			  tRight = tOffset.left + el.offsetWidth;
			  
		const sTop = scrollview.scrollTop,
			  sLeft = scrollview.scrollLeft;
	
		if( pTop > tTop ) {
			scrollview.scrollTop = sTop - (pTop - tTop);
		} else if( pBottom < (tTop + el.offsetHeight) ) {
			scrollview.scrollTop = sTop + tTop - pBottom + Math.min(el.offsetHeight, scrollview.clientHeight);
		}
		
		if( pLeft > tLeft ) {
			scrollview.scrollLeft = sLeft - (pLeft - tLeft);
		} else if( pRight < (tLeft + el.offsetWidth) ) {
			scrollview.scrollLeft = sLeft + tLeft - pRight + Math.min(el.offsetWidth, scrollview.clientWidth);
		}
	}
	
	setThumbPos(){
		this.setThumbYPos();
		this.setThumbXPos();	
	}
	
	setThumbYPos(){
		const {hasScrollY, scrollYRatio, scrollTop, thumbYSize} = this.state;
		if( !hasScrollY ) return;
		
		const {verticalBarWrapEl} = this._refs;
		const minTop = 0;
		const maxTop = verticalBarWrapEl.clientHeight - thumbYSize;
		
		this._refs.verticalBarThumbEl.style.top = Math.min(Math.max(scrollTop / scrollYRatio, minTop), maxTop) + 'px';
	}
	
	setThumbXPos(){
		const {hasScrollX, scrollXRatio, scrollLeft, thumbXSize} = this.state;
		if( !hasScrollX ) return;
		
		const {horizontalBarWrapEl} = this._refs;
		const minLeft = 0;
		const maxLeft = horizontalBarWrapEl.clientWidth - thumbXSize;

		this._refs.horizontalBarThumbEl.style.left = Math.min(Math.max(scrollLeft / scrollXRatio, minLeft), maxLeft) + 'px';	
	}
	
	getScrollViewBody(){
		return findDOMNode(this._refs.scrollviewBody);	
	}
	
	getThumbSize(dir = 'y'){
		const {thumbSize, thumbMinSize, thumbMaxSize} = this.props;
		const {verticalBarWrapEl, horizontalBarWrapEl} = this._refs;
		const scrollview = this.getScrollViewBody();
		const isVertical = dir === 'y';
		const client = isVertical ? scrollview.clientHeight : scrollview.clientWidth,
				scroll = isVertical ? scrollview.scrollHeight : scrollview.scrollWidth,
				trackSize = isVertical ? verticalBarWrapEl.clientHeight : horizontalBarWrapEl.clientWidth;
				
		return thumbSize && thumbSize > 0 ? thumbSize  : 
				Math.min(Math.max(thumbMinSize, client/scroll * trackSize), thumbMaxSize);
	}
	
	//判断是否创建滚动条
	hasVerticalScrollBar(){
		const {overflow, overflowY} = this.props;
		const scrollview = this.getScrollViewBody();
		
		if( !overflowY && (overflow === 'hidden' || overflow === 'visible') ) {
			return false;
		} else if( overflow === 'scroll' ) {
			return true;	
		}
		
		if( overflowY === 'hidden' || overflowY === 'visible' ) {
			return false;
		} else if( overflow === 'scroll' ) {
			return true;	
		}
		
		return scrollview.scrollHeight - scrollview.clientHeight > 1;
	}
	//判断是否创建滚动条
	hasHorizontalScrollBar(){
		const {overflow, overflowX} = this.props;
		const scrollview = this.getScrollViewBody();
		
		if( !overflowX && (overflow === 'hidden' || overflow === 'visible') ) {
			return false;
		} else if( overflow === 'scroll' ) {
			return true;	
		}
		
		if( overflowX === 'hidden' || overflowX === 'visible' ) {
			return false;
		} else if( overflow === 'scroll' ) {
			return true;	
		}
		
		return scrollview.scrollWidth - scrollview.clientWidth > 1;	
	}
	
	isScrollEnd(dir='y'){
		const scrollview = this.getScrollViewBody();
		
		return dir === 'y' ? 
				scrollview.scrollTop >= (scrollview.scrollHeight - scrollview.clientHeight) :
				scrollview.scrollLeft >= (scrollview.scrollWidth - scrollview.clientWidth);
	}
	
	getScrollPos(dir = 'y'){
		const scrollview = this.getScrollViewBody();
		
		return scrollview[dir === 'y' ? 'scrollTop' : 'scrollLeft'];
	}
	
	hasScroll(dir = 'y'){
		return dir === 'y' ? 
			this.hasVerticalScrollBar() : 
			this.hasHorizontalScrollBar();
	}
	
	refreshScrollBar(){
		this.updateScrollBarLayoutAndPosition();	
	}
	
	updateScrollBarLayoutAndPosition(){
		const hasScrollX = this.hasScroll('x'),
			  hasScrollY = this.hasScroll('y');
			  
		this.state.isUpdating = true;
		
		this.setState({
			shouldComponentUpdate: false,
			hasScrollX,
			hasScrollY
		}, ()=>{
			
			this.updateScrollBarLayout();
			this.updateScrollBarPosition();
			
			this.state.isUpdating = false;	
		});
	}
	
	updateScrollBarLayout(){
		const {scrollBarSize, scrollBarOffsetTopOrLeft, scrollBarOffsetRightOrBottom} = this.props;
		const {verticalBarEl, horizontalBarEl, verticalBarWrapEl, horizontalBarWrapEl, verticalBarThumbEl, horizontalBarThumbEl} = this._refs;
		const container = this._refs.scrollview;
		const scrollview = this.getScrollViewBody();
		const state = this.state;
		const {hasScrollX, hasScrollY} = state;
		
		if( hasScrollX || hasScrollY ) {
			if( hasScrollY ) {
				verticalBarEl.style.top = scrollBarOffsetTopOrLeft + 'px';	
				verticalBarEl.style.right = scrollBarOffsetRightOrBottom + 'px';
				verticalBarEl.style.bottom = scrollBarOffsetTopOrLeft + ( hasScrollX ? (scrollBarSize + scrollBarOffsetRightOrBottom) : 0 ) + 'px';
			}  
			
			if( hasScrollX ) {
				horizontalBarEl.style.left = scrollBarOffsetTopOrLeft + 'px';	
				horizontalBarEl.style.bottom = scrollBarOffsetRightOrBottom + 'px';
				horizontalBarEl.style.right = scrollBarOffsetTopOrLeft + ( hasScrollY ? (scrollBarSize + scrollBarOffsetRightOrBottom) : 0 ) + 'px';
			} 
		}
		
		if( hasScrollY ) {
			let thumbSize = this.getThumbSize('y');	
			state.thumbYSize = thumbSize;
			verticalBarThumbEl.style.height = thumbSize + 'px';
			state.scrollYRatio = (scrollview.scrollHeight - scrollview.clientHeight) / (verticalBarWrapEl.clientHeight - thumbSize);
		}
		
		if( hasScrollX ) {
			let thumbSize = this.getThumbSize('x');	
			state.thumbXSize = thumbSize;
			horizontalBarThumbEl.style.width = thumbSize + 'px';	
			state.scrollXRatio = (scrollview.scrollWidth - scrollview.clientWidth) / (horizontalBarWrapEl.clientWidth - thumbSize);
		}
	}
	
	updateScrollBarPosition(){
		this.setThumbPos();
	}
	
	getScrollBar(dir = 'y'){
		const {prefixCls, showTrack, thumbCls, scrollBarSize, trackCls} = this.props;
		const isVertical = dir === 'y';
		const dirCls = `${prefixCls}-bar-${isVertical ? 'vertical' : 'horizontal'}`;
		
		const scrollbarRef = isVertical ? 'verticalBarEl' : 'horizontalBarEl',
				scrollbarWrapRef = isVertical ? 'verticalBarWrapEl' : 'horizontalBarWrapEl',
				scrollbarTrackRef = isVertical ? 'verticalBarTrackEl' : 'horizontalBarTrackEl',
				scrollbarThumbRef = isVertical ? 'verticalBarThumbEl' : 'horizontalBarThumbEl';
		
		const barStyle={
			[isVertical ? 'width' : 'height']: scrollBarSize + 'px'
		};
		
		return (
			<div ref={this.saveRef.bind(this, scrollbarRef)} style={barStyle} className={classNames(`${prefixCls}-bar`, dirCls)}>
				<div ref={this.saveRef.bind(this, scrollbarWrapRef)} className={`${prefixCls}-bar-wrap`}>
					{
						showTrack ?　
						<div 
							ref={this.saveRef.bind(this, scrollbarTrackRef)}
							className={classNames({
								[`${prefixCls}-bar-track`]: true,
								[trackCls]: trackCls
							})}
							onMouseDown={(e)=>this.handleTrackMouseDown(e, dir)}
						></div> : 
						null
					}
					<div 
						ref={this.saveRef.bind(this, scrollbarThumbRef)}
						className={classNames({
							[`${prefixCls}-bar-thumb`]: true,
							[thumbCls]: thumbCls
						})}
						onMouseDown={(e)=>this.handleThumbMouseDown(e, dir)}
					></div>
				</div>
			</div>
		);	
	}

	render() {
		const {prefixCls, className, scrollViewBodyCls, style = {}, component = 'div', scrollViewBodyStyle = {}, children, ...others} = this.props;
		const {shouldComponentUpdate, hasScrollX, hasScrollY} = this.state;
		
		const classes = classNames({
			[`${prefixCls}-view`]: true,
			[`${className}`]: className,
		});
		
		const bodyClasses = classNames({
			[`${prefixCls}-view-body`]: true,
			[`${scrollViewBodyCls}`]: scrollViewBodyCls,
		});
		
		const otherProps = omit(others, Object.keys(ScrollView.defaultProps));
		
		return (
			<div {...otherProps} ref={this.saveRef.bind(this, "scrollview")} className={classes} style={style} onWheel={this.handleWheel}>
				<ScrollViewBody ref={this.saveRef.bind(this, "scrollviewBody")} className={bodyClasses} style={scrollViewBodyStyle} component={component} onScroll={this.handleScroll} shouldComponentUpdate={shouldComponentUpdate}>
					{children}
				</ScrollViewBody>
				{hasScrollX ? this.getScrollBar('x') : null}
				{hasScrollY ? this.getScrollBar('y') : null}
			</div>
		)
	}
}