import React from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import _assign from 'object-assign';
import TreeNode from './TreeNode';
import {isArray, isUndefined, toArray, isEqual} from '../shared/util';

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
		
	}	
	
	getRootNodeList(){
		const {rootId, loadData} = this.props;
		
		if( !loadData ) return null;
		
		let async = 1;
		
		const done = list=>{
			async = false;
		};
		
		const fail = msg=>{
			async = false;
				
		};
		
		loadData(rootId).then(done, fail);
		
		async = 2
		
		if( !async ) {
				
		}
	}
	
	renderTree(){
		
		return (
			<ul>
				{this.getRootNodeList()}
			</ul>
		);		
	}
	
	render(){
		
		return this.renderTree();	
	}
}