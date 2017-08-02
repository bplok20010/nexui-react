import { Portal,Button,Col } from '../../dist/rnexui';
import React from 'react';
import {findDOMNode} from 'react-dom';

class App extends React.Component {
	
	constructor(props){
		super(props)
		this.state = {
			visible: true	
		}	
	}
	
	headerCreate= (el)=>{
		var self = this;
		$(el).on('click', function(){
			$(self.refs.body).stop(true).slideToggle();
		});
	}
		
	componentDidMount(){
		$(this.refs.body).stop(true).slideToggle();	
		setTimeout(()=>{
			this.setState({
				visible: false
			});	
		},3000)
	}
	
	appear=(node) => {
		$(node).fadeIn()
	} 	
	
	leave=(node, cb) => {
		$(node).fadeOut(cb)
	} 
	
  render() {
	  const visible = this.state.visible;
    return visible ? (
		<Portal animate={{
			appear: this.appear,
			leave: this.leave
		}}>
			<div ref="panel" style={{
				width: 500,
				display:'none'
			}}>
				<div className="header" ref={this.headerCreate} style={{
					height: 40,
					border: '1px solid #ccc',
					lineHeight: '40px'
				}}>
					标题
				</div>
				<div className="body" ref="body" style={{
					display: 'none',
					border: '1px solid #ccc',
				}}>
					<div>test...</div>
					<div>test...</div>
					<div>test...</div>
					<div>test...</div>
					<div>test...</div>
					<div>test...</div>
					<div>test...</div>
				</div>
				
			</div>
		</Portal>
    ) : null;
  }
}

ReactDOM.render(<App/>, demo);