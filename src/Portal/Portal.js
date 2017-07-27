import React from 'react';
import PropTypes from 'prop-types';
import {getDom, createContainer, removeContainer} from './util';

export default class Portal extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		selector: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		className: PropTypes.string,
		css: PropTypes.object,
		prefix: PropTypes.string
	};

	static defaultProps = {
		selector: 'body',
		className: '',
		css: {},
		prefix: 'zent'
	};

	componentDidMount() {
		const elm = getDom(this.props.selector);
		this._container = createContainer(elm);
		this.renderPortal();
	}
	
	renderPortal(){
		const children = React.Children.only(this.props.children);
		
		ReactDOM.unstable_renderSubtreeIntoContainer(
			this,
			children,
			this._container,
			this.props.onUpdate
		);
	}

	componentWillUnmount() {
		const container = this._container;
		ReactDOM.unmountComponentAtNode(container);
		removeContainer(container);
		this._container = null;
	}

	componentDidUpdate() {
		this.renderPortal();
	}

	componentWillReceiveProps(nextProps) {
		
	}

	render() {
		return null;
	}
}