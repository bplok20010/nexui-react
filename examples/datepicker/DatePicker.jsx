import { DatePicker } from '../../dist/rnexui';

class App extends React.Component{
	
	constructor(props){
		super(props);	
		
	}
	
	handleChange= (value)=>{
		this.date = value;
		console.log(value, '--');
		this.forceUpdate()
	}

	date = ''
	
	render(){
		return 	(
			<div>
			<DatePicker dateFormat="Y-m-d H:i:s" />
            <DatePicker dateFormat="Y-m-d H:i:s" value={this.date} onChange={ this.handleChange } />
			</div>
		)
	}	
}

ReactDOM.render(
<App />
, demo);