import DateUtil from '../util/Date';
import _assign from 'object-assign';

/**
 * 获取指定日期所在月份的显示范围
 * 日历显示最少会有28~42天，7天一行，二月有可能只有28天
 * @param {date} date 日期
 * @param {object?} options 相关配置参数
 * @param {boolean} [options.showOtherMonths=true] 默认会显示42(7x6)天的日期格式，否则就有可能是28(7x4)天 35(7x5)天
 * @param {number} [options.firstDay=0] 默认一周中的第一天 0-6 星期天-星期六
 * @return {array<start, end>}
 */
export function getMonthDateRange(date, options){
    const defaults = {
        showOtherMonths : true,
        firstDay        : 0,
    };

    const { showOtherMonths, firstDay } = _assign({}, defaults, options);

    let start = DateUtil.getFirstDateOfMonth( date ),
        end   = DateUtil.getLastDateOfMonth( date );

    let startDay = start.getDay();
    let startOffset = startDay >= firstDay ? startDay - firstDay : 7 - ( firstDay - startDay );
    start = DateUtil.add( start,'d', -startOffset );


    //方法一
    //end日期可通过 (start + 当月天数 + startOffset) 最后取 end + (end - start)的天数 % 7
    //方法二 找规律
    let endDay = end.getDay();
    let endOffset = firstDay <= endDay ? 7 - (endDay - firstDay + 1) : firstDay - endDay - 1;
    end = DateUtil.add( end,'d', endOffset );

    //日期开始和结尾必定有上个月和下个月的日期信息
    if( showOtherMonths ) {
        //开始日期为月初则+7天
        if( start.getDate() === 1 ) {
            start = DateUtil.add( start,'d', -7 );
        }
        //
        end = DateUtil.add( start,'d', 41 );
    }

    return [start, end];
}

export function isEqualDate(d1, d2) {
    return DateUtil.format( d1,'Ymd' ) === DateUtil.format( d2,'Ymd' );
}

export function isEqualMonth(d1, d2) {
    return DateUtil.format( d1,'Ym' ) === DateUtil.format( d2,'Ym' );
}

export function isEqualYear(d1, d2) {
    return DateUtil.format( d1,'Y' ) === DateUtil.format( d2,'Y' );
}
