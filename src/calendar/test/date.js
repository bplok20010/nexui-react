var assert = require('assert');
import {getMonthDateRange} from '../utils';
import DateUtil from '../../util/Date';

function format(date){
    return DateUtil.format(date, 'Y-m-d')
}

//201710
const d = new Date(2017, 9, 28);
var range = getMonthDateRange(d, {
    showOtherMonths: false,
    firstDay: 0,
});
assert( format(range[0]) === '2017-10-01' && format(range[1]) === '2017-11-04', 'error: firstDay 0' );

var range = getMonthDateRange(d, {
    showOtherMonths: false,
    firstDay: 1,
});
assert( format(range[0]) === '2017-09-25' && format(range[1]) === '2017-11-05', 'error: firstDay 1' );

var range = getMonthDateRange(d, {
    showOtherMonths: false,
    firstDay: 2,
});
assert( format(range[0]) === '2017-09-26' && format(range[1]) === '2017-11-06', 'error: firstDay 2' );

var range = getMonthDateRange(d, {
    showOtherMonths: false,
    firstDay: 3,
});
assert( format(range[0]) === '2017-09-27' && format(range[1]) === '2017-10-31', 'error: firstDay 3' );

var range = getMonthDateRange(d, {
    showOtherMonths: false,
    firstDay: 4,
});
assert( format(range[0]) === '2017-09-28' && format(range[1]) === '2017-11-01', 'error: firstDay 4' );

var range = getMonthDateRange(d, {
    showOtherMonths: false,
    firstDay: 5,
});
assert( format(range[0]) === '2017-09-29' && format(range[1]) === '2017-11-02', 'error: firstDay 5' );

var range = getMonthDateRange(d, {
    showOtherMonths: false,
    firstDay: 6,
});
assert( format(range[0]) === '2017-09-30' && format(range[1]) === '2017-11-03', 'error: firstDay 6' );

////////////////showOtherMonths=true//////////////////////////
var range = getMonthDateRange(d, {
    showOtherMonths: true,
    firstDay: 0,
});
assert( format(range[0]) === '2017-09-24' && format(range[1]) === '2017-11-04', 'error: showOtherMonths=true firstDay 0' );

var range = getMonthDateRange(d, {
    showOtherMonths: true,
    firstDay: 1,
});
assert( format(range[0]) === '2017-09-25' && format(range[1]) === '2017-11-05', 'error: showOtherMonths=true firstDay 1' );

var range = getMonthDateRange(d, {
    showOtherMonths: true,
    firstDay: 2,
});
assert( format(range[0]) === '2017-09-26' && format(range[1]) === '2017-11-06', 'error: showOtherMonths=true firstDay 2' );

var range = getMonthDateRange(d, {
    showOtherMonths: true,
    firstDay: 3,
});
assert( format(range[0]) === '2017-09-27' && format(range[1]) === '2017-11-07', 'error: showOtherMonths=true firstDay 3' );

var range = getMonthDateRange(d, {
    showOtherMonths: true,
    firstDay: 4,
});
assert( format(range[0]) === '2017-09-28' && format(range[1]) === '2017-11-08', 'error: showOtherMonths=true firstDay 4' );

var range = getMonthDateRange(d, {
    showOtherMonths: true,
    firstDay: 5,
});
assert( format(range[0]) === '2017-09-29' && format(range[1]) === '2017-11-09', 'error: showOtherMonths=true firstDay 5' );

var range = getMonthDateRange(d, {
    showOtherMonths: true,
    firstDay: 6,
});
assert( format(range[0]) === '2017-09-30' && format(range[1]) === '2017-11-10', 'error: showOtherMonths=true firstDay 6' );