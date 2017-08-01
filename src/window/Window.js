import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import omit from 'omit.js';
import Portal from '../popup/Popup';
import _assign from 'object-assign';
//未完...

const noop = () => {}

export default class Window extends React.Component {
	static propTypes = {
		prefixCls: PropTypes.string,
		className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	};

	static defaultProps = {
		prefixCls: 'nex-window',
		modal: false,
	};
	
	getHeader(){
		const {title, headerCls} = this.props;
		const classes = classNames(`${headerCls}-header`, headerCls)
		
		const header = title ? (
			<div ref="header" className={classes}>
				<div className={`${headerCls}-title`}>
					{title}
				</div>
			</div>
		) : null;
		
		return header;
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

	render() {
		return this.getRenderComponent();
	}
}