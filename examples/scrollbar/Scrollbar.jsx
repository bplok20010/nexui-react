import { Popup,Button,ScrollView } from '../../dist/rnexui';
import React from 'react';
import {findDOMNode} from 'react-dom';

class List extends React.Component {
	list = ['']
	
	idx = 1
	
	static contextTypes = {
		ScrollView: React.PropTypes.object,
	};
	
	componentDidMount(){
		setInterval(()=>{
			let len = this.list.length;
			
			if( len < 100 ) {
				this.list.push(this.list[len - 1] +'.'+ this.idx++)
			} else {
				this.list = ['']
			}
			
			this.setState({}, ()=>{
				this.context.ScrollView.refreshScrollBar();	
				this.context.ScrollView.scrollEnd('y');
			})
		}, 300)	
	}
	
	render(){
		return <div>
		start...
		{this.list.map((v, i)=>{
			return <div>{v}</div>	
		})}
		end...
		</div>	
	}	
}

class App extends React.Component {
	
	
	
  render() {
    return (
		<div>
		<div style={{
			width : 200,
			height: 200	
		}}>
			<ScrollView enablePreventDefaultOnEnd={false} overflowX="hidden" onScroll={(x, y)=>console.log(x, y)} onVScrollStart={()=>console.log('//////////////')} wheelDir='y' style={{border: '1px solid #f2f2f2', padding: 10}}>
				<List />
			</ScrollView>
		</div>
		<div style={{
			width : 200,
			height: 200	
		}}>
			<ScrollView ref={(o) => window.sview = o} wheelDir='y' overflowY="hidden"  onHScrollStart={()=>console.log('//////////////')} onHScrollEnd={()=>console.log('//////////////')} style={{border: '1px solid #f2f2f2', padding: 10}}>
				<div >
				start...
				<div>123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div>123456789</div>
				<div id="sv">123456789</div>
				end...
				</div>
			</ScrollView>
		</div>
		
		<div style={{
			width : 200,
			height: 200	
		}}>
			<ScrollView wheelDir='y' component="textarea" onHScrollStart={()=>console.log('//////////////')} onHScrollEnd={()=>console.log('//////////////')} style={{border: '1px solid #f2f2f2'}}>
				start...
				end...
				start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...start...end...start...
				end...start...
				end...start...
				end...start...
				end...start...
				end...
			</ScrollView>
		</div>
		
		</div>
    );
  }
}

ReactDOM.render(<App/>, demo);