import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Row extends React.Component{
	
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.node,
		gutter: PropTypes.number,
		prefixCls: PropTypes.string,
	};

	static defaultProps = {
		gutter: 0
	};


	render(){
		const {prefixCls = 'nex-row',className, gutter, style, children, ...others} = this.props;
		
		const classes = classNames({
			[prefixCls]: true
		}, className);
		
		const rowStyle = gutter > 0 ? {
							marginLeft: gutter / -2,
							marginRight: gutter / -2,
							...style,
						} : style;

		const cols = Children.map(children, (col) => {
			if (!col) {
				return null;
			}
			if (col.props && gutter > 0) {
				return cloneElement(col, {
					style: {
						paddingLeft: gutter / 2,
						paddingRight: gutter / 2,
						...col.props.style,
					},
				});
			}
			return col;
		});
		return <div {...others} className={classes} style={rowStyle}>{cols}</div>;
	}
		
}