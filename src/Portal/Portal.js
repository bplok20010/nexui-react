import React from 'react';
import PropTypes from 'prop-types';
import {getDom, createContainer, removeContainer} from './util';

export default class Portal extends React.Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		selector: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
	};

	static defaultProps = {
		selector: 'body',
	};

	componentDidMount() {
		const { selector, onCreate } = this.props
		const elm = getDom(selector);
		this._container = createContainer(elm);
		this.renderPortal();
	}
	
	renderPortal(){
		const children = React.Children.only(this.props.children);
		
		this._instance = ReactDOM.unstable_renderSubtreeIntoContainer(
			this,
			children,
			this._container,
			this.props.onUpdate
		);
	}
	
	removePortal(){
		const container = this._container;
		ReactDOM.unmountComponentAtNode(container);
		removeContainer(container);
		this._container = null;	
		this._instance = null;	
	}

	componentWillUnmount() {
		this.removePortal();
	}

	componentDidUpdate() {
		this.renderPortal();
	}

	render() {
		return null;
	}
}