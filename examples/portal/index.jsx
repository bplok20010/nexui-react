import { Portal,Button,Col } from '../../dist/rnexui';
import React from 'react';
import ReactDOM, { createPortal, findDOMNode } from 'react-dom';

let idx = 1;

class Dialog extends React.Component {
	
	render(){
		const {visible, container} = this.props;
		
		return visible ? (
			<Portal container={container}>
				<div className="popup">Body...{idx++}</div>
				<div className="popup">Body...{idx++}</div>
			</Portal>
		) : null;
	}
}

let visible = true;

class App extends React.Component {
	
	handleClick = ()=>{
		visible = !visible;
		this.forceUpdate();	
	}
	
  render() {
    return (
		<div>
			<button onClick={this.handleClick}>toggle</button>
			<Dialog visible={visible} container={d0} />
			<Dialog visible={visible} />
		</div>
    );
  }
}

ReactDOM.render(<App/>, demo);
