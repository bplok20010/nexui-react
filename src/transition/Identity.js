import {Component} from 'react';

export default class Identity extends Component{
	shouldComponentUpdate({shouldUpdate}) {
		return !!shouldUpdate;
	}
	render(){
		return this.props.children;
	}
}