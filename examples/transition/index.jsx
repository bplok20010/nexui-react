import { 
	Transition,
	TransitionGroup,
	CSSTransition,	 
} from '../../dist/rnexui';
import React from 'react';
import ReactDOM, { createPortal, findDOMNode } from 'react-dom';

const Fade2 = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
	unmountOnExit
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class FadeInAndOut extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 1500)
  }
  render() {
    return (
      <Fade2 in={this.state.show}>
        <div className='greeting'>Hello world<Demo /></div>
      </Fade2>
    )
  }
}

let idx = 1;

function Demo(){
	console.log('Demo')
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
		if(this.props.onExited)	
			this.props.onExited(node)	
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
				appear={props.appear} 
			>
				<Demo />
			</Transition>
		);	
	}	
}

const list = ['a_4', 't_2'];

class T extends React.Component{
	render(){
		return 'T';
	}	
}

class App extends React.Component {
	show = true;	
	
	addItem = ()=>{
		const key = Math.random().toString(16).substr(3,8);
		list.push(key);
		this.forceUpdate();	
	}
	
	delItem =()=>{
		const rad = Math.random() * 10000;
		const len = list.length;
		
		list.splice(rad % len,1)
		
		this.forceUpdate();	
	}
	
	componentDidMount(){
		//setInterval(()=> (this.forceUpdate()), 1000);
		
	}
	
  	render() {
		const show = this.show;
		return (
			<div>
				<button onClick={()=> (this.show = !this.show,this.forceUpdate())}>切换</button>
				<Fade in={show} appear/>
				<h2>TransitionGroup</h2>
				<div>
					<button onClick={this.addItem}>新增</button>
					<button onClick={this.delItem}>随机删除</button>
					<TransitionGroup component={React.Fragment}>
						{
							list.map(key=> <Fade key={key}/>)	
						}
					</TransitionGroup>
					<T/>
				</div>
				<FadeInAndOut />
			</div>
		);
  	}
}

ReactDOM.render(<App/>, demo);
