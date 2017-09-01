import { Tree } from '../../dist/rnexui';

const TreeData = {};
let idx = 1;
function uuid(){
	return idx++;	
}

class App extends React.Component{
	
	constructor(props){
		super(props);	
		
		this.state = {
			value: 2	
		}
	}
	
	loadTreeData = (tid)=>{
		
		var defer = $.Deferred();
		
		if( TreeData[tid] ) return TreeData[tid]
		
		setTimeout(()=>{
			let data = [
				{ id: uuid(), text: '节点1' },
				{ id: uuid(), text: '节点2' },
				{ id: uuid(), text: '节点3' },
				{ id: uuid(), text: '节点4', expand: uuid() < 0 },
			];
			
			TreeData[tid] = data
			
			defer.resolve(data)	
			
		}, 1000);
		
		
		
		return defer.promise();
	}
	
	render(){
		return <Tree loadData={this.loadTreeData} />
	}	
}

ReactDOM.render(
<App />
, demo);