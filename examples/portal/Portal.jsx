import { Portal,Button,Col } from '../../dist/rnexui';
import React from 'react';

let idx = 1;

class Dialog extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			visible: true	
		}	
	}
	
	closeDialog = (e)=>{
		this.setState( {
			visible: !this.state.visible
		} )
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState( {
			visible: nextProps.visible
		} )
	}
	
	render(){
		const {visible} = this.state;
		
		return visible ? (
			<Portal>
				<div className="popup">Body...{idx++}<span className='icon icon-close' onClick={this.closeDialog}>X</span></div>
			</Portal>
		) : null;
	}
}

class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			visible: true	
		}	
	}
	
	togglChange = (e)=>{
		this.setState( {
			visible: true
		} )
	}

  render() {
	 const {visible} = this.state;
    return (
		<div>
			<Button onClick={this.togglChange}>显示</Button>
			{visible ? <Dialog visible={this.state.visible}/> : null}
		</div>
    );
  }
}

ReactDOM.render(<App/>, demo);