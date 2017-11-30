import React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

const InputGroup = function(props){
	const { prefixCls = 'nex-input-group', className = '' } = props;
	const cls = classNames({
		[`${prefixCls}`]: true,
		[`${prefixCls}-lg`]: props.size === 'large',
		[`${prefixCls}-sm`]: props.size === 'small',
		[className]: className
	});
	return (
		<div className={cls} style={props.style}>
       		{props.children}
		</div>
	);	
};

export default InputGroup;