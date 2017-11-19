import { Popup,Button,Col } from '../../dist/rnexui';
import React from 'react';
import {findDOMNode} from 'react-dom';

class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			idx: 1,
			visible: true,
			destroy: false,
		}	
	}
	
	togglChange = (e)=>{
		this.setState( {
			destroy: false,
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
		/*setInterval(()=>{
			this.setState({
				idx : ++this.state.idx
			});
		},1000);*/
		this.updatePopupPosition();
	}
	
	updatePopupPosition(){
		if( this.state.visible ) {
			this.refs.popup.updatePosition(findDOMNode(this.refs.button))	
		}	
	}
	
	componentDidUpdate(){
		this.updatePopupPosition();	
	}
	
	getButtonEl(){
		return findDOMNode(this.refs.button)	
	}	
	//
  render() {
	 const {visible, idx, destroy} = this.state;
    return (
		<div style={{ padding: '400px 10px'}}>
			<Button onClick={this.togglChange} ref="button">
				显示{idx}
				<Popup ref="popup" mask={false} destroyOnHide={false} visible={this.state.visible} 
					of={null} 
					maskAnimate={{
						appear: (el) => {
							$(el).hide().stop(true, true).fadeIn(500);	
						},
						leave: (el, done) => {
							$(el).stop(true, true).fadeOut(500,done);		
						}	
					}} 
					popupAnimate={{
						appear: (el) => {
							$(el).hide().stop(true, true).fadeIn(500);	
						},
						leave: (el, done) => {
							$(el).stop(true, true).fadeOut(500,done);		
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
			</Button>
			<Button onClick={()=> this.setState( { destroy: true, visible: false } )} >销毁{idx}</Button>
			<Button onClick={this.showPopup} ref="cp">触发是弹窗</Button>
			
			
			<Popup my="center" visible={this.state.visible} fixed at="center" using={(a,b) => console.log(a, b)}>
				popupa....
			</Popup>
			
			<Popup>
				<p>Hello Popup</p>
			</Popup>
		</div>
    );
  }
}

ReactDOM.render(<App/>, demo);