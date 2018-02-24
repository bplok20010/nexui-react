import React, { PureComponent } from 'react';
import cx from 'classnames';

export default class BreadcrumbSteps extends PureComponent {

	render() {
		const props = this.props;
		const {
			className,
			prefixCls,
			children,
			current,
			sequence,
			stepStyle
		} = props;
		const stepWidth = `${100 / React.Children.count(children)}%`;
		const stepsCls = cx({
			[`${prefixCls}`]: true,
			[`${prefixCls}-breadcrumb`]: true,
			[`${className}`]: className
		});

		return (
			<div className={stepsCls}>
				{React.Children.map(children, (item, index) => {
					const stepClassName = cx({
						[`${prefixCls}-item`]: true,
						'is-finish': index <= current - 1,
						'is-current': index === current
					});
					let itemTitle = item.props.title;

					return (
						<div
							className={stepClassName}
							style={{ 
								...stepStyle,
								width: stepWidth 
							}}
						>
							<div className={`${prefixCls}-step`}>
								{sequence ? `${index + 1}. ${itemTitle}` : itemTitle}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
