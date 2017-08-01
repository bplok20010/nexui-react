import { Popup,Button,Col } from '../../dist/rnexui';
import React from 'react';
import {findDOMNode} from 'react-dom';

class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			visible: false	
		}	
	}
	
	togglChange = (e)=>{
		this.setState( {
			visible: !this.state.visible
		} )
	}
	
	onClose= ()=>{
		console.log('onClose')	
		this.setState( {
			visible: false
		} )
	}
	
	close= ()=>{
		this.refs.popup.close()
	}
	
	componentDidMount(){
		setTimeout(()=>{
			//this.refs.popup.closePopup();	
		}, 2000);	
	}
	
	getButtonEl(){
		return findDOMNode(this.refs.button)	
	}	
	
  render() {
	 const {visible} = this.state;
	let cls = `btn_${~~(Math.random() * 1000 % 1000)}`;
	console.log(cls);
    return (
		<div>
			<Button onClick={this.togglChange} ref="button" className={cls}>显示</Button>
			{visible ? (
				<Popup ref="popup" mask={true} visible={this.state.visible} onClose={this.onClose} className="demo-popup" of={`.${cls}`} my="left bottom" at="left top">
					test....<br/>
					test....<br/>
					test....<br/>
					<App />
					<span className="icon-close" onClick={this.close}>X</span>
				</Popup>
			) : null}
		</div>
    );
  }
}

ReactDOM.render(<App/>, demo);