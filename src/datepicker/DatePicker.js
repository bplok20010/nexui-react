import React from 'react';
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DateUtil from '../util/Date';
import {uuid} from '../shared/util';
import omit from 'omit.js';
import Popup from '../popup/Popup';
import _assign from 'object-assign';
import Calendar from '../calendar';
import ScrollView from '../scrollview';

function noop(){}

// function checkDate(props, name, componentName){
//     if ( props[name] && !DateUtil.isDate(props[name])) {
//         return new Error(`${componentName}: ${name} is invalid Date!`);
//     }
// }

function fixValue(date, format) {
	if( typeof date === 'string') {
		return DateUtil.parse(date, format);
	}

    if( typeof date === 'number') {
        return new Date(date);
    }

    return date;
}

export default class DatePicker extends React.Component{
    static  DateUtil = DateUtil

    static propTypes = {
        className: PropTypes.string,
        prefixCls: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date)
        ]),
        defaultValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date)
        ]),
        dateFormat: PropTypes.string,
    };

    static defaultProps = {
        prefixCls: 'nex-datepicker',
		dateFormat: 'Y-m-d',
        maxDate: null,
        minDate: null,
        dropdownCls: null,
        dropdownStyle: null,
        dropdownDestroyOnHide: true,
        tabIndex: 0,
    };

    constructor(props){
        super(props);

        const value = fixValue('value' in props ? props.value : props.defaultValue, props.dateFormat);

        this.state = {
            value,
            currentShowDate: DateUtil.isDate(value) ? DateUtil.clone(value) : new Date,
            _ext: uuid(6),
            showYearList: false,
            showMonthList: false,
        }

    }

    componentWillReceiveProps(props){

        if( 'value' in props ) {
            const value = fixValue(props.value, props.dateFormat);
        	if(value) {
				this.setState({
					value,
                    currentShowDate: value
				});
            }
        }
    }
    //使用jquery的position做定位，所以这时候jquery是必定存在的
    componentDidMount(){
        const ext = this.state._ext;

        $(window).on(`resize.${ext}`, ()=>{
            if( this.state.showDropdown ) {
                this.hideDropdown();
            }
        });

        $(document.body).on(`mousewheel.${ext} DOMMouseScroll.${ext}`, (e)=>{
            if( this.state.showDropdown && (!$(e.target).closest(this.refs.dropdown).length ) ) {
                if( $(e.target).closest(this.refs.select).length ) return;
                this.hideDropdown();
            }
        });

        $(document).on(`mousedown.${ext}`, (e)=>{
            if( this.state.showDropdown && (!$(e.target).closest(this.refs.dropdown).length ) ) {
                if( $(e.target).closest(this.refs.select).length ) return;
                this.hideDropdown();
            }
        });
    }

    componentWillUnmount(){
        const ext = this.state._ext;
        $(window).off(`.${ext}`);
        $(document.body).off(`.${ext}`);
        $(document).off(`.${ext}`);
    }

    handleDropdownCreate= (el)=>{
        this.refs.dropdown = el ? findDOMNode(el) : null;
    }


    hideDropdown(){
        this.setState({
            showDropdown: false,
            showYearList: false,
            showMonthList: false,
        });
    }

    handleClick= (e) => {
        this.setState({
            showDropdown: !this.state.showDropdown,
            showYearList: false,
            showMonthList: false,
        });
    }

    getPopupStyle(){
        const {showDropdown} = this.state;
        const selectEl = this.refs.select;
        const dropdownStyle = {
            //maxWidth: 0,
            //maxHeight: 0,
        };

        if( showDropdown && selectEl ) {
            //const rect = selectEl.getBoundingClientRect();
            //dropdownStyle.minWidth = selectEl.offsetWidth;
            //dropdownStyle.maxWidth = selectEl.offsetWidth + rect.right - 10;
            //dropdownStyle.maxHeight = Math.max(rect.top, window.innerHeight - rect.top - selectEl.offsetHeight) - 10;
        }

        return _assign(dropdownStyle, this.props.dropdownStyle);
    }

    getDateLabel(){
        const {dateFormat} = this.props;
        const {value} = this.state

        return DateUtil.isDate(value) ? DateUtil.format(value, dateFormat) : '';
    }

    transformDateValue(date){
        const {dateFormat} = this.props;

        return DateUtil.format(date, dateFormat);
    }

    onDateSelect(date){
        const props = this.props;
        const state = this.state;

        if( DateUtil.isEqual(date, state.value) ) {
            this.hideDropdown();
            return;
        }

        if( !('value' in props) ) {
            this.setState({
                value: date,
                currentShowDate: date,
                showYearList: false,
                showMonthList: false,
            });
        }

        if( props.onChange ) props.onChange(date);//this.transformDateValue(date)

        this.hideDropdown();
    }

    renderYearList(){
        const {currentShowDate} = this.state;
        const list = [];
        const year = DateUtil.part(new Date, 'Y');
        const currentYear = DateUtil.part(currentShowDate, 'Y');

        const end = year*1 + 3;
        let start = year*1 - 30;

        const onChange = function (year) {
            currentShowDate.setFullYear(year);
            this.setState({
                currentShowDate,
                showYearList: false,
                showMonthList: false,
            })
        }

        for(; start < end; start++ ) {
            list.push(<div key={start} className={classNames({
                'active': currentYear == start
            })} onClick={onChange.bind(this, start)}>{start}年</div>)
        }

        return list.reverse();
    }

    renderMonthList(){
        const {currentShowDate} = this.state;
        const months = [1,2,3,4,5,6,7,8,9,10,11,12];
        const month = DateUtil.part(new Date, 'm');
        const cMonth = DateUtil.part(currentShowDate, 'm');

        const onChange = function (month) {
            currentShowDate.setMonth(month - 1);
            this.setState({
                currentShowDate,
                showYearList: false,
                showMonthList: false,
            })
        }

        return months.map(num => <div key={num} className={classNames({
            'active': cMonth == num
        })} onClick={onChange.bind(this, num)}>{num}月</div>)
    }

    showYearList(){
       this.setState({
           showYearList: !this.state.showYearList,
           showMonthList: false,
       });
    }

    showMonthList(){
        this.setState({
            showYearList: false,
            showMonthList: !this.state.showMonthList,
        });
    }

    renderPickerHeader(){
        const {prefixCls} = this.props;
        const {currentShowDate, showYearList, showMonthList} = this.state;

        const date = currentShowDate;

        return (
            <div className={`${prefixCls}-picker-header`}>
                <div className="prev-btns">
                    <span className="prev-year-btn fa fa-angle-double-left" onClick={this.onPrevYear.bind(this)}></span>
                    <span className="prev-month-btn fa fa-angle-left" onClick={this.onPrevMonth.bind(this)}></span>
                </div>
                <span className="year-label">
                    <span onClick={this.showYearList.bind(this)}>{DateUtil.part(date, 'Y')}年</span>
                    {
                        showYearList ? <ScrollView overflowX="hidden" className='year-list'>
                            {this.renderYearList()}
                        </ScrollView> : null
                    }

                </span>
                <span className="month-label">
                    <span onClick={this.showMonthList.bind(this)}>{DateUtil.part(date, 'm')}月</span>
                    {
                        showMonthList ? <ScrollView overflowX="hidden" className='year-list'>
                            {this.renderMonthList()}
                        </ScrollView> : null
                    }
                </span>
                <div className="next-btns">
                    <span className="next-month-btn fa fa-angle-right" onClick={this.onNextMonth.bind(this)}></span>
                    <span className="next-year-btn fa fa-angle-double-right" onClick={this.onNextYear.bind(this)}></span>
                </div>
            </div>
        );
    }

    onPrevYear(){
        const {currentShowDate} = this.state;

        this.setState({
            showYearList: false,
            showMonthList: false,
            currentShowDate: DateUtil.add(currentShowDate, 'y', -1)
        })
    }

    onPrevMonth(){
        const {currentShowDate} = this.state;

        this.setState({
            showYearList: false,
            showMonthList: false,
            currentShowDate: DateUtil.add(currentShowDate, 'mo', -1)
        })
    }
    onNextYear(){
        const {currentShowDate} = this.state;

        this.setState({
            showYearList: false,
            showMonthList: false,
            currentShowDate: DateUtil.add(currentShowDate, 'y', 1)
        })
    }

    onNextMonth(){
        const {currentShowDate} = this.state;

        this.setState({
            showYearList: false,
            showMonthList: false,
            currentShowDate: DateUtil.add(currentShowDate, 'mo', 1)
        })
    }

    renderPicker(){
        const {prefixCls, maxDate, minDate, disabledDate} = this.props;
        const {value, currentShowDate} = this.state;

        return (
            <div  ref={this.handleDropdownCreate}  className={`${prefixCls}-dropdown`}>
                {this.renderPickerHeader()}
                <div className={`${prefixCls}-picker-body`}>
                    <Calendar
                        currentDate={value}
                        currentShowDate={currentShowDate}
                        maxDate = {maxDate}
                        minDate = {minDate}
                        disabledDate={disabledDate}
                        onSelect={this.onDateSelect.bind(this)}
                    />
                </div>
            </div>
        );
    }

    inputValue = null

    onInputChange(e){
        const {dateFormat} = this.props;
        this.inputValue = e.target.value;

        const date = DateUtil.parse(e.target.value, dateFormat);

        if( date ) {
            this.onDateSelect(date);
        }

        this.hideDropdown();//forceUpdate
    }

    getInputLabel(){
        return this.inputValue === null ? this.getDateLabel(): this.inputValue;
    }

    onInputBlur(e){
        const {dateFormat} = this.props;

        if( !this.state.showDropdown ) {
            const date = DateUtil.parse(e.target.value, dateFormat);

            if(!date) {
                //this.inputValue = null;
                this.forceUpdate();
            }

            this.inputValue = null;
        }

    }

    renderSelect(){
        const props = this.props;
        const {showDropdown} = this.state;
        const {prefixCls, tabIndex, inline, disabled, style, readOnly, arrowCls, dropdownCls, dropdownDestroyOnHide, ...others} = props;
        const classes = classNames({
            [prefixCls]: true,
            [`${prefixCls}-inline`]: inline,
            [`${prefixCls}-readonly`]: readOnly,
            [`${prefixCls}-disabled`]: disabled,
        });

        return (
			<div
                style={style}
				ref="select"
				className={classes}
				tabIndex={tabIndex}
				onClick={this.handleClick}
			>
                <input className={`${prefixCls}-text`} value={this.getInputLabel()}
                       onChange={this.onInputChange.bind(this)}
                       onBlur={this.onInputBlur.bind(this)} />
				<span className={classNames({
                    [`${prefixCls}-arrow`]: true,
                    [arrowCls]: true
                })}></span>
				<Popup
                    visible={showDropdown}
                    className={dropdownCls}
                    destroyOnHide={dropdownDestroyOnHide}
                    fixed={false}
                    rootCls={`${prefixCls}-dropdown-root`}
                    of={this.refs.select}
                    my="left top"
                    at="left bottom"
                    style={this.getPopupStyle()}
                >
                    {this.renderPicker()}
				</Popup>
			</div>
        );
    }

    render(){
        return this.renderSelect();
    }

}