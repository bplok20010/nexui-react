import { Popup,Button,Col } from '../../dist/rnexui';
import React from 'react';
import {findDOMNode} from 'react-dom';

class Test extends React.Component{
	
	render(){
		return  <div>label:{this.props.text}</div>		
	}
}

class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			idx: 1,
			visible: false,
			destroy: false,
		}	
	}
	
	togglChange = (e)=>{
		this.setState( {
			destroy: false,
			idx: this.state.idx+ 1 ,
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
		this.setState( {
			visible: false
		} )
	}
	
	popup = null
	
	showPopup= ()=>{
		if( this.popup ) {
			this.popup.toggle();
			return;	
		}
		this.popup = Popup.create({
			parentComponent: this,
			destroyOnHide: false,
			of: findDOMNode(this.refs.cp),
			my: 'left top',
			at: 'left bottom',
			content : () => <div style={{ padding: 10, border:'1px solid green', background: '#FFF' }}>test....{this.state.idx}</div>
		});
		
		//setTimeout(this.popup.close, 1000)
	}
	
	componentDidMount(){	
		setInterval(()=>{
			this.setState({
				idx : ++this.state.idx
			});
		},100);
		//this.updatePopupPosition();
	}
	
	updatePopupPosition(){
		if( this.state.visible ) {
			this.refs.popup.updatePosition(findDOMNode(this.refs.button))	
		}	
	}
	
	componentDidUpdate(){
		//this.updatePopupPosition();	
	}
	
	getButtonEl(){
		return findDOMNode(this.refs.button)	
	}	
	//
  render() {
	 const {visible, idx, destroy} = this.state;
	 
	 const tProps = {};
	 
	 if( idx % 2 ) 
	 	tProps.text = idx;
	 
    return (
		<div style={{ padding: '400px 10px'}}>
			<Button onClick={this.togglChange} ref="button">
				显示{idx}
			</Button>
			<br />
			{'当前显示状态: ' + (visible ? 'show' : 'hide')}
			<br />
			<Popup ref="popup" mask={false} destroyOnHide={false} visible={this.state.visible} 
				of={()=> findDOMNode(this.refs.button)} 
				popupMaskAnimate={{
					appear: (el) => {
						$(el).hide().stop(true, true).fadeIn(4000);	
					},
					leave: (el, done) => {
						console.log(1123)
						$(el).stop(true, true).fadeOut(4000,done);		
					}	
				}} 
				popupAnimate={{
					appear: (el) => {
						$(el).hide().stop(true, true).fadeIn(4000);	
					},
					leave: (el, done) => {
						$(el).stop(true, true).fadeOut(4000,done);		
					}	
				}} 
				className="demo-popup" 
				my="left bottom" 
				at="left top"
			>
				test....{this.state.idx}<br/>
				test....<br/>
				test....<br/>
				<span className="icon-close" onClick={this.close}>X</span>
			</Popup>
			<Button onClick={()=> this.setState( { destroy: true, visible: false } )} >销毁{idx}</Button>
			<Button ref="cp">22222</Button>
			<Popup ref="popup2" mask={false} destroyOnHide={true} visible={this.state.visible} 
				of={()=> findDOMNode(this.refs.cp)} 
				className="demo-popup" 
				at="right bottom"
				my="left center" 
			>
				test....{this.state.idx}<br/>
				test....<br/>
				test....<br/>
				<span className="icon-close" onClick={this.close}>X</span>
			</Popup>
			<Test {...tProps} />
		</div>	
    );
  }
}

ReactDOM.render(<App/>, demo);