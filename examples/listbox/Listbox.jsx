import { ListBox, Input } from '../../dist/rnexui';

class App extends React.Component{
	
	constructor(props){
		super(props);	
		
		this.state = {
			value: 2	
		}
	}
	
	handleChange= (value)=>{
		this.setState({
			value	
		})	
		
		console.log('changed ',value)
	}
	
	filterMsg = ''
	
	search=(e)=>{
		this.filterMsg = e.target.value;
		this.forceUpdate()
	}
	
	render(){
		console.log(this.state.value);
		return 	<div>
			<Input placeholder="搜素..." onChange={this.search} />
			<ListBox
					style={{
						maxWidth: 300,
						maxHeight: 400,	
					}}
					value={this.state.value}
					onChange={this.handleChange}
					items={data}
					filter={(item, i) => item.text.indexOf( this.filterMsg ) >= 0}
				  />
			</div>	  
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
<App mulitselect />
, demo);