import React from 'react';
import Checkbox from '../checkbox/RCheckbox';

export default class Radio extends React.Component {
	static defaultProps = {
		prefixCls: 'nex-radio',
		type: 'radio',
	};

	render() {
		return <Checkbox {...this.props} ref="checkbox"/>;
	}
}