import { Pagination } from '../../dist/rnexui';

class App extends React.Component{
	
	constructor(...a){
		super(...a)
		this.state = {
			current: 1	
		}	
	}
	
	onPageChange= (current)=> {
		console.log(current);
		
		this.setState({
			current	
		});
	}
	
	render(){
		const {current} = this.state;
		return 	(
			<div>
				<Pagination total={175} current={current} maxPagesShow={5} defaultPageSize={20} onChange={this.onPageChange} />
				<Pagination total={175} layout="total, prev,next" totalRender={(total, pn, ps)=> `当前第${pn}页`} />
				<Pagination total={175} small={true} layout="total, prev,next, ta" defalutLayoutRender={()=> 'test...'} totalRender={(total, pn, ps)=> `当前第${pn}页`} />
				<Pagination total={175} layout="pager" />
				<br />
				<Pagination total={175} small={true} layout="prev,pager,next" current={current} maxPagesShow={5} defaultPageSize={20} onChange={this.onPageChange} />
			</div>	
		)
	}	
}

ReactDOM.render(
<App />
, demo);