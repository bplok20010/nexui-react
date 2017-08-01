import React, {PureComponent, PropTypes} from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export default class Dropdown extends React.Component{
	
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		prefixCls: PropTypes.string,
		items: PropTypes.array,
		filter: PropTypes.func,
	};

	static defaultProps = {
		prefixCls: 'nex-listbox',
		valueField: 'value',
		textField: 'text'
	};
	
	render(){
		const {filter, className} = this.props;
		
		return (
			<div ref="listbox" className={`${prefixCls}`}>
				<div className={`${prefixCls}-body`}>
					{items.map((item, i) => {
						const classes = classNames({
							[`${prefixCls}-item`]: true,
							[`${prefixCls}-item-selected`]: String(value) === String(item[valueField]),
							[`${prefixCls}-item-disabled`]: item.disabled,
						});
						
						//filter
						let r = filter ? filter(item, i) : true
						
						return {r ? <div key={item[valueField]} className={classes} onClick={()=>{ this.handleItemClick(item) }}>{item[textField]}</div> : null};	
					})}
				</div>
			</div>
		);
	}
		
}