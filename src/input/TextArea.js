import Input from './Input';

export default class Textarea extends Input {
	//static propTypes = Input.propTypes
	
	static defaultProps = {
		...Input.defaultProps,
		type: 'textarea',
	}	
}