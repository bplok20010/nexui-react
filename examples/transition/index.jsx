import { Transition,
	TransitionGroup,
	CSSTransition,	 } from '../../dist/rnexui';
import React from 'react';
import ReactDOM, { createPortal, findDOMNode } from 'react-dom';

let idx = 1;

function Demo(){
	return <div>{idx++}</div>	
} 

class Fade extends React.Component{
	
	timeout = 500
	
	onEnter=(node)=>{
		$(node).hide().fadeIn(this.timeout)	
	}
	onEntering=(node)=>{
			
	}
	onEntered=(node)=>{
			
	}
	
	onExit=(node)=>{
		$(node).fadeOut(this.timeout)		
	}
	onExiting=(node)=>{
			
	}
	onExited=(node)=>{
			
	}
	
	render(){
		const props = this.props;
		return (
			<Transition 
				onEnter={this.onEnter}
				onEntering={this.onEntering}
				onEntered={this.onEntered}
				onExit={this.onExit}
				onExiting={this.onExiting}
				onExited={this.onExited}
				timeout={this.timeout}
				in={props.in} 
				appear
			>
				<Demo />
			</Transition>
		);	
	}	
}

class App extends React.Component {
	show = true;	
  render() {
		const show = this.show;
		this.show = !show;
		return (
			<div>
				<button onClick={()=> this.forceUpdate()}>切换</button>
				<Fade in={show} />
			</div>
		);
  }
}

ReactDOM.render(<App/>, demo);
