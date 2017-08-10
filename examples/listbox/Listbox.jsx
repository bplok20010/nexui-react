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
				multiple
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

var uuid = 100;

for( let i=0;i<10;i++ ) {
	const items = [];
	const d = {
		items,
		text: '分组' + (i+1)
	}
	data.push(d)
	
	for( let j=0;j<400;j++ ) {
		let d = {
			value: uuid++,
			text: '选项' + (j+1)
		}
		items.push(d)
	}
}

ReactDOM.render(
<App mulitselect />
, demo);