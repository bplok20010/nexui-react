/**
 * Transition 改进
 */
import {Component} from 'react';
import Transition from 'react-transition-group/Transition';
import Identity from './Identity';

export default class NTransition extends Component {
	render(){
		const props = this.props;
		const rest = {};
		
		if (typeof children !== 'function') {
			rest.children = state => {
				const shouldUpdate = (props.in && state === 'exited') || (!props.in && state === 'entered');
				return <Identity shouldUpdate={shouldUpdate}>{props.children}</Identity>
			}
		}
		
		return <Transition {...props} {...rest} />
	}	
}