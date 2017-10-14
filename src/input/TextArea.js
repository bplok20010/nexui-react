import Input from './Input';

export default class Textarea extends Input {
	static defaultProps = {
		...Input.defaultProps,
		type: 'textarea',
	}	
}