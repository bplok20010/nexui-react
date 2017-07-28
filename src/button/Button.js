import React, {PureComponent, PropTypes} from 'react';
import {classNames} from '../shared/util';

export default class Button extends PureComponent{
	
	static propTypes = {
		type: PropTypes.string,
		size: PropTypes.string,
		htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
		className: PropTypes.string,
		block: PropTypes.bool,
		disabled: PropTypes.bool,
		loading: PropTypes.bool,
		outline: PropTypes.bool,
		bordered: PropTypes.bool,
		iconCls: PropTypes.string,
		prefixCls: PropTypes.string,
		onClick: PropTypes.func
	};

	static defaultProps = {
		type: '',
		size: '',
		htmlType: 'button',
		className: '',
		iconCls: '',
		disabled: false,
		block: false,
		prefixCls: 'nex-btn'
	};

	// 处理点击事件
	handleClick(event) {
		if (this.props.disabled || this.props.loading) return;

		if (this.props.onClick) {
			this.props.onClick(event);
		}
	}

	render(){
		const {prefixCls,htmlType, disabled, iconCls, type, size, block, className} = this.props;
		
		let nodeProps = {};
		if( disabled ) {
			nodeProps['disabled'] = true;
		}

		let Icon = iconCls ? (<span className={classNames({
			[`${prefixCls}-icon`]: true,
			[iconCls]: true
		})}></span>) : null;

		return (
			<button type={htmlType} onClick={(e)=>this.handleClick(e)} {...nodeProps} className={classNames({
				[`${prefixCls}`]: true,
				[`${prefixCls}-${type}`]: type,
				[`${prefixCls}-block`]: block,
				[`${prefixCls}-inline`]: !block,
				[`${prefixCls}-sm`]: size === 'small',
				[`${prefixCls}-lg`]: size === 'large',
				[`${prefixCls}-disabled`]: disabled,
				[className]: true
			})}>
                {Icon}
				{this.props.children ? <span className="nex-btn-text">{this.props.children}</span> : null}
            </button>
		)
	}
		
}