import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export default class Col extends React.Component{
	
	static propTypes = {
		span: stringOrNumber,
		offset: stringOrNumber,
		className: PropTypes.string,
		children: PropTypes.node,
		prefixCls: PropTypes.string,
	};

	render(){
		const { span, offset, className, prefixCls='nex-col', children, ...others } = this.props;

		const classes = classNames({
			[`${prefixCls}`]: true,
			[`${prefixCls}-${span}`]: span,
			[`${prefixCls}-offset-${offset}`]: offset,
			[className]: className
		});
	
		return <div {...others} className={classes}>{children}</div>;
	}
		
}