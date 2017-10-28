import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DateUtil from '../util/Date';
import {getMonthDateRange, isEqualDate, isEqualMonth} from './utils';

function noop(){}

// function checkDate(props, name, componentName){
//     if ( props[name] && !DateUtil.isDate(props[name])) {
//         return new Error(`${componentName}: ${name} is invalid Date!`);
//     }
// }

export default class Calendar extends React.Component{

	static  DateUtil = DateUtil
	
	static propTypes = {
		className: PropTypes.string,
		prefixCls: PropTypes.string,
        onSelect: PropTypes.func,
        dayNamesMin: PropTypes.array,
        firstDay: PropTypes.number,
        showOtherMonths: PropTypes.bool,
        currentDate: PropTypes.instanceOf(Date),
		defaultDate: PropTypes.instanceOf(Date),
        dateRender: PropTypes.func,
		dateClassNameRender: PropTypes.func,
        disabledDate: PropTypes.func,
        maxDate: PropTypes.instanceOf(Date),
        minDate: PropTypes.instanceOf(Date),
	};

	static defaultProps = {
		prefixCls: 'nex-calendar',
        dayNamesMin: ['日','一','二','三','四','五','六'],
		firstDay: 0,
        showOtherMonths: true,
        defaultDate: null,
		dateRender: null,
        dateClassNameRender: null,
        disabledDate: null,
		maxDate: null,
		minDate: null,
		onSelect: noop,
	};

	constructor(props){
		super(props);

        const currentDate = 'currentDate' in props ? props.currentDate : props.defaultDate;

		this.state = {
            currentDate
		}

	}

	now(){
		return new Date;
	}

    componentWillReceiveProps(nextProps) {
        if ('currentDate' in nextProps) {
            this.setState({
                currentDate: nextProps.currentDate,
            });
        }
    }

	classNames(...cls){
		return classNames(...cls);
	}

    renderHeader(){
        const {prefixCls, firstDay, dayNamesMin} = this.props;

		const ths = [];

        const len2 = 7 + firstDay;
        for( let i = firstDay; i < len2; i++ ) {
            let day = i%7;
            ths.push(
				<th key={i} className={ this.classNames(`${prefixCls}-cell`, `${prefixCls}-cell-h`) }>
					{dayNamesMin[day]}
				</th>
			);
        }

		return (
			<tr>
				{ths}
			</tr>
		);
	}

    /**
	 * 判断当前日期是否不可选
     */
    isDisabledDate(date){
        const {minDate, maxDate, disabledDate} = this.props;
		const cTime = date.getTime();

        if( minDate && cTime < minDate.getTime() ) {
        	return true;
		}

        if( maxDate && cTime > maxDate.getTime() ) {
            return true;
        }

        if(disabledDate) {
        	return disabledDate(date, this);
		}

    	return false;
	}

	onDateClick(date, e){
    	const props = this.props;
        const {onSelect, currentDate} = props;

        if(this.isDisabledDate(date)) return;

        if( !(currentDate in props) ) {
        	this.setState({
                currentDate: date
			});
		}

        onSelect(date);
	}

	renderDate(date, key){
        const {prefixCls, dateRender, dateClassNameRender} = this.props;
        const {currentDate} = this.state;
        const now = this.now();
        const currentShowDate = this.currentShowDate;

        const dateLabel = dateRender ? dateRender(date, this) : date.getDate();

        const classes = this.classNames({
			[`${prefixCls}-cell`]: true,
            [`${prefixCls}-cell-b`]: true,
            [`${prefixCls}-cell-other-month`]: !isEqualMonth(currentShowDate, date),
            [`${prefixCls}-cell-today`]: isEqualDate(now, date),
            [`${prefixCls}-cell-selected`]: currentDate && isEqualDate(currentDate, date),
            [`${prefixCls}-cell-disabled`]: this.isDisabledDate(date),
		}, dateClassNameRender ? dateClassNameRender(date, this) : null);

        return (
			<td
				key={key}
				className={classes}
				onClick={this.onDateClick.bind(this, date)}
			>
                {dateLabel}
			</td>
		);
	}

	currentShowDate = null;

	renderBody(){
        const {showOtherMonths, firstDay} = this.props;
        const {currentDate} = this.state;

        this.currentShowDate = currentDate || this.now();

        const dateRange = getMonthDateRange( this.currentShowDate, {
            showOtherMonths,
            firstDay
		} );

        const diff = DateUtil.difference( dateRange[0], dateRange[1], 'd' );

        var startDate = dateRange[0];
        var endDate = dateRange[1];

        var trs = [];
        let tds = [];

        for( let i = 0; i <= diff; i++ ) {

            tds.push(
            	this.renderDate(DateUtil.add(startDate, 'd', i), i)
			);

            if( tds.length === 7 ) {
                trs.push(
					<tr key={i}>
						{tds.map( td => td )}
					</tr>
				);
				tds.length = 0;
            }
        }

        return trs;
	}

	renderWrapper(){
		const {prefixCls, className, style} = this.props;

		return (
			<div className={this.classNames(prefixCls, className)} style={style}>
				<table className={`${prefixCls}-table`}>
					<thead>
						{this.renderHeader()}
					</thead>
					<tbody>
                    	{this.renderBody()}
					</tbody>
				</table>
			</div>
		);
	}

	render(){
		return this.renderWrapper();
	}
		
}