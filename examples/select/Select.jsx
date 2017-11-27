import { Select } from '../../dist/rnexui';

const { Option, OptGroup } = Select;

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
	
	render(){
		console.log(this.state.value);
		return 	(
			<div>
				<Select
					dropdownCls = 'dropdowntest'
				  style={{width: 150}}
				  defaultValue={2}
				  onChange={this.handleChange}
				  options={data}
				/>
				--------------
				{ this.state.value == 0 ? '??' :
					<Select  onChange={v=>console.log(v)} defaultValue={this.state.value}>
						<Option value="1">测试1</Option>
						<Option value="2">测试2</Option>
						<Option value="3">测试3</Option>
						<Option value="4">测试4</Option>
						<Option value="5">测试5</Option>
						<OptGroup text="分组1">
							<Option value="6">测试测试测试6</Option>
							<Option value="7">测试7</Option>
						</OptGroup>
					</Select>
				}
			</div>
		)
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