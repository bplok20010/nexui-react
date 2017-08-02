import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Portal from '../popup/Popup';
import _assign from 'object-assign';
//未完...

const noop = () => {}

let zIndex = 9999;

export default class Window extends React.Component {
	static propTypes = {
		prefixCls: PropTypes.string,
		className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	};

	static defaultProps = {
		prefixCls: 'nex-window',
		renderTo: document.body,
		modal: false,
	};
	
	constructor(props){
		super(props);
			
	}
	
	getRenderComponent(){
		const {prefixCls, className} = this.props;
		
		const classes = classNames({
			[prefixCls]: true	
		}, className);
		
		const header = this.getHeader();
		//未完...
		return (
			<Popup className={classes}>
				{header}
			</Popup>
		);	
		
	}
	
	componentWillUnmount() {
		this.removePortal();
	}

	componentDidUpdate() {
		this.renderWindow();
	}
	
	componentDidMount() {
		const { selector, onCreate } = this.props
		const elm = getDom(selector);
		this._container = createContainer(elm);
		this.renderWindow();
	}

	render() {
		return null;
	}
}