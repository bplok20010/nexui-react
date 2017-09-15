import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';


class TreeNode extends React.Component{
	
	constructor(...args){
		super(...args);	
		
		this.state = {
			expand: false,
			animate: false,
		};
	}
	
	handleClick = (e) => {
		const expand = !this.state.expand;
		
		const child = findDOMNode(this.refs.child);	
		
		$(child).stop(true, true);
		
		if( expand ) {
			this.setState({
				expand: expand,
				animate: true,
			});	
		} else if( this.refs.child ) {
			$(child).slideUp(500, ()=>{
				this.setState({
					expand	
				})	
			});
		}
	}
	
	componentDidUpdate(){
		const { expand, animate } = this.state;
		const child = findDOMNode(this.refs.child);
		
		$(child).slideDown(500, () => {
			this.state.animate = false;	
		})
		
	}
	
	componentDidMount(){
		console.log( findDOMNode(this.refs.my), '789' )	
	}
	
	render(){
		const { expand, animate } = this.state;
		
		const style = {
			display: animate ? 'none' : ''	
		}
		
		return (
			<div>
				<div onClick={this.handleClick} ref="my">
					测试...
				</div>
				{expand ? <TreeNodeChild ref="child" style={style} /> : null}
			</div>
		);
	}	
}

class TreeNodeChild extends React.Component{
	
	handleClick = (e) => {
			
	}
	
	render(){
		return (
			<div {...this.props}>
				<div>111111111111111111111</div>
				<div>111111111111111111111</div>
				<div>111111111111111111111</div>
				<div>111111111111111111111</div>
			</div>
		);
	}	
}

class App extends React.Component {
	
	componentDidMount(){
		console.log(findDOMNode(this))	
	}
	
	render() {
		return <TreeNode />;
	}
}

ReactDOM.render(<App/>, demo);