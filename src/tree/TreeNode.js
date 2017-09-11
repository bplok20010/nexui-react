import React from 'react';

export default class TreeNode extends React.Component{
	
	static propTypes = {
		node: PropTypes.object,	
		loadData: PropTypes.func,	
	};
	
	static defaultProps = {
		prefixCls: 'nex-tree',
		node: null,
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
		
		this.state = {
			node: props.node || {},
		};
		
	}
	
	componentWillReceiveProps(nextProps) {
		
		this.state.node = nextProps.node || {};
	}
	
	handleClick = (e)=>{
		//node.expand= !node.expand; self.setState({}); e.preventDefault();	
	}
	
	getIndent(){
			
	}
	
	render(){
		const {prefixCls} = this.props;
		const {node} = this.state;
		
		return (
			<li className={`${prefixCls}-item`}>
				<div className={`${prefixCls}-wraper`}></div>
				
			</li>
		);	
	}	
}