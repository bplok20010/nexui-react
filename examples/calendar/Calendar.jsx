import { Calendar } from '../../dist/rnexui';

class App extends React.Component{
	
	constructor(props){
		super(props);	
		
	}
	
	handleChange= (value)=>{
	}
	
	render(){
		return 	(
			<Calendar firstDay={0} minDate={new Date(2017,9, 25)} showOtherMonths={true} style={{width: 200}} />
		)
	}	
}

ReactDOM.render(
<App />
, demo);