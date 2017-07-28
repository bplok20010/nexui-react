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
	
	doClose= ()=>{
		console.log('doClose')	
		this.setState( {
			visible: false
		} )
	}
	
	close= ()=>{
		this.refs.popup.doClose()
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
    return (
		<div>
			<Button onClick={this.togglChange} ref="button" className='btn'>显示</Button>
			{visible ? (
				<Popup ref="popup" visible={this.state.visible} onClose={this.doClose} className="demo-popup" of=".btn" my="left top" at="left bottom">
					test....<br/>
					test....<br/>
					test....
					<span className="icon-close" onClick={this.close}>X</span>
				</Popup>
			) : null}
		</div>
    );
  }
}

ReactDOM.render(<App/>, demo);