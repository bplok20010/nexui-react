import React from 'react';
import {classNames} from '../shared/util';
import omit from 'omit.js';

const InputGroup = function(props){
	const { prefixCls = 'nex-input-group', className = '' } = props;
	const cls = classNames(prefixCls, {
		[`${prefixCls}-lg`]: props.size === 'large',
		[`${prefixCls}-sm`]: props.size === 'small'
	}, className);
	return (
		<div className={cls} style={props.style}>
       		{props.children}
		</div>
	);	
};

export default InputGroup;