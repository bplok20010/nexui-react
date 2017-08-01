import { Select } from '../../dist/rnexui';

class App extends React.Component{
	
	constructor(props){
		super(props);	
		
		this.state = {
			value: 2	
		}
	}
	
	handleChange= (value)=>{
		//this.setState({
		//	value	
		//})	
		
		console.log('changed ',value)
	}
	
	render(){
		console.log(this.state.value);
		return 	<Select
					style={{width: 150}}
					defaultValue={this.state.value}
					onChange={this.handleChange}
					options={data}
				  />
	}	
}

const data = [
     //{value: 1, text: '选项一'},
     //{value: 2, text: '选项二'},
     //{value: 3, text: '选项三'}
];

for( let i=0;i<100;i++ ) {
	data.push({
		value: i,
		text: '选项' + (i+1)
	})	
}

ReactDOM.render(
<App />
, demo);