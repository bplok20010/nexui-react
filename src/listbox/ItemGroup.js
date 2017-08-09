import React, {PropTypes} from 'react';

export default class ItemGroup extends React.Component{

	static defaultProps = {
		prefixCls: 'nex-listbox-item-group',
		label: '',
	};
	
	render(){
		const {prefixCls, label, children} = this.props;
		return (
			<div className={prefixCls}>
				<div className={`${prefixCls}-title`}>{label}</div>
				<div className={`${prefixCls}-list`}>
					{children}
				</div>
			</div>
		);
	}
	
}
