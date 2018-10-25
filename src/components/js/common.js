

import moment from 'moment';

let todayTime = new Date();


export let todayTimeFliter = moment(todayTime).format("hh:mm a");


export let thisMonth = moment(todayTime).format("M");


export let thisYear = moment(todayTime).format("YYYY");