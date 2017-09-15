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
			<Pagination total={175} current={current} maxPagesShow={5} onChange={this.onPageChange} />
		)
	}	
}

ReactDOM.render(
<App />
, demo);