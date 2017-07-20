'use strict';
var App = Nex.declare('App', Nex.ReactComponent, {
	render(){
		console.log(this.config.a, this.props.a, this.state.a);
		return <div>
			<h1>Hello{this.state.a++}</h1>
			<div>测试...</div>
		</div>
	}
});

setInterval(function(){
	ReactDOM.render(<div><App a="1"/></div>, demo);
},1000);

