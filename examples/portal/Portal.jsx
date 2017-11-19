import { Portal,Button,Col } from '../../dist/rnexui';
import React from 'react';
import ReactDOM, { createPortal, findDOMNode } from 'react-dom';

let idx = 1;

class RefT1 extends React.Component {
	
	componentDidMount(){
		this.props.cb();
		console.log('-2')
	}
	
	render(){
		return <div ref={()=> console.log('-5')}>RefT2</div>
	}	
}

class RefT2 extends React.Component {
	
	componentDidMount(){
		console.log('-1')
	}
	
	render(){
		return <div ref={() => console.log('-3')}><RefT1 cb={()=> console.log('-4')} /></div>
	}	
}


class NullComponent extends React.Component {
	
	componentDidMount(){
		console.log('x2')
	}
	
	render(){
		return <div ref={(e) => console.log('x1')}>TestComponent</div>
	}	
}

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
			visible: true,
			idx: 1	
		}	
	}
	
	togglChange = (e)=>{
		let idx = ++this.state.idx
		this.setState( {
			visible: true,
			idx
		} )
	}

	portalTest(){
		let idx = this.state.idx % 2;

		if( createPortal ) {
			return createPortal(<div>createPortal</div>, document.getElementById(`d${idx}`));
		}	
		
		return null;
	}
	
	componentDidMount(){
		
		const Test = function(){
			console.log('abc');
			return <span>abcd</span>
		}
		
		ReactDOM.render( <Test />, cy );
		
		console.log('done');
	}
	
	portalContainer(){
		let idx = this.state.idx % 2;
		
		return <Portal 
				container={document.getElementById(`d${idx}`)}
				animate={{
					appear: function(node){
						console.log(node)
						$(node).css('opacity', 0).animate({
							opacity: 1	
						}, 1000)	
					},
					leave: function(node, cb){
						$(node).css('opacity', 1).animate({
							opacity: 0
						}, 1000, cb)		
					}	
				}}
			>
				<div>portalContainer</div>
			</Portal>;	
	}	

  render() {
	 const {visible} = this.state;
    return (
		<div>
			<NullComponent />
			<Button onClick={this.togglChange}>显示</Button>
			{visible ? <Dialog visible={this.state.visible}/> : null}
			{this.portalContainer()}
			<div id="cy"></div>
			<RefT2 />
		</div>
    );
  }
}
console.log(1)	
ReactDOM.render(<App/>, demo, function(){
	console.log(2)	
});
console.log(3)	