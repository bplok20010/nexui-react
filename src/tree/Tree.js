import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import _assign from 'object-assign';
import TreeNode from './TreeNode';
import {isArray, isUndefined, toArray, isEqual, isFunction} from '../shared/util';

export default class Tree extends React.Component{
	
	static propTypes = {
		data: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),	
		loadData: PropTypes.func,	
	};
	
	static defaultProps = {
		prefixCls: 'nex-tree',
		className: '',
		iconField: 'icon',
		iconClsField: 'iconCls',
		rootId: '0',
		idField: 'id',
		textField: 'text',
		parentField: 'pid',
		childrenField: 'children',
		expandField: 'expand',
		leafField: 'isLeaf',
		defaultExpandAll: false,
		loadingText: '加载中...',
		loadData: null,
	};
	
	constructor(props){
		super(...arguments);
		
		this.state={
		};
			
	}
	
	renderLoadingNode(){
		return (
			<li>加载中...</li>
		);
	}	
	
	getNodeList(tid, level = 0){
		const self = this;
		const {loadData} = this.props;
		
		if( !loadData ) return null;
		
		let curData = this.renderLoadingNode(), async = false;
		
		function createNodeList(list, level = 0) {
			
			var icons = Array(level).fill(1);
			
			level++;
			
			return list.map(node=> <li key={node.id} onClick={(e)=>{ if( e.isDefaultPrevented() ) {return;} node.expand= !node.expand; self.setState({}); e.preventDefault(); }}>
				<div className="nex-tree-text">{icons.map((v, k)=><span key={k} className="nex-tree-sp"></span>)}<span className="nex-tree-inner">{node.text}</span></div>
				{node.expand ? <ul>{self.getNodeList(node.id, level)}</ul> : null}
				</li>);
		}
		
		const done = list=>{
			if( async ) {
				this.setState({});	
			} else {
				curData = createNodeList(list, level)
			}
			
		};
		
		const fail = msg=>{
			if( async ) {
					
			}
				
		};
		
		const promise = loadData(tid);
		
		if( promise.then && isFunction(promise.then) ){
			promise.then(done, fail);
		} else {
			curData	= createNodeList(promise, level)
		}
		
		async = true;
		
		return curData;
	}
	
	renderTree(){
		const {rootId} = this.props;
		
		return (
			<ul>
				{this.getNodeList(rootId)}
			</ul>
		);		
	}
	
	render(){
		
		return this.renderTree();	
	}
}