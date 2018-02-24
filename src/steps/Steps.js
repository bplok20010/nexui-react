import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import BreadcrumbSteps from './BreadcrumbSteps';

export default class Steps extends PureComponent{
	static propTypes = {
		type: PropTypes.oneOf(['breadcrumb', 'number']),
		className: PropTypes.string,
		current: PropTypes.number,
		prefixCls: PropTypes.string,
		stepWidth: PropTypes.string
	};

	static defaultProps = {
		type: 'number',
		current: 0,
		className: '',
		prefixCls: 'nex-steps',
	};

	render(){
		const {
			prefixCls,
			className,
			current,
			children,
			stepWidth,
			type	
		} = this.props;	
		//目前只支持BreadcrumbSteps
		const StepsComponent = BreadcrumbSteps;
		
		return (
			<BreadcrumbSteps 
				prefixCls={prefixCls}
				className={className}
				current={current}
				stepWidth={stepWidth}
			>{children}</BreadcrumbSteps>
		);
	}
		
}