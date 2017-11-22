import { ListBox, Input } from '../../dist/rnexui';

const {ListItem, ListItemGroup} = ListBox

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
	
	handleChange2= (value)=>{
		console.log('changed ',value)
	}
	
	filterMsg = ''
	
	search=(value)=>{
		this.filterMsg = value;
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
				  
				<ListBox
					multiple
					labelInValue
					onChange={this.handleChange2}
					defaultValue="V03"
					style={{
						maxWidth: 300,
						maxHeight: 400,	
					}}
				>
					<ListItemGroup label="V">
						<ListItem value="V01">V01<span style={{
							position: 'absolute',
							right:10,
							top:0,
						}}><strong>Hot</strong></span></ListItem>
						<ListItem value="V02">V02</ListItem>
						<ListItem value="V03">V03</ListItem>
						<ListItem value="V04">V04</ListItem>
					</ListItemGroup>
					<ListItemGroup label="X">
						<ListItem value="X01">X01</ListItem>
						<ListItem value="X02">X02</ListItem>
						<ListItem value="X03">X03</ListItem>
						<ListItem value="X04">X04</ListItem>
					</ListItemGroup>
				</ListBox>
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
	
	for( let j=0;j<40;j++ ) {
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