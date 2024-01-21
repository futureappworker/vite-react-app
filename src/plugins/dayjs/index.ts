import dayjs from 'dayjs';

dayjs.prototype.SYSTEM_BEFORE = [dayjs('2020-10-01 00:00:00'), dayjs()];
dayjs.prototype.RANGE_TODAY = [dayjs().startOf('day'), dayjs()];
dayjs.prototype.RANGE_YESTERDAY = [dayjs().subtract(1, 'day').startOf('day'), dayjs().subtract(1, 'day').endOf('day')];
dayjs.prototype.RANGE_THIS_WEEK = [dayjs().startOf('week'), dayjs().endOf('week')];
dayjs.prototype.RANGE_LAST_WEEK = [
  dayjs().subtract(1, 'week').startOf('week'),
  dayjs().subtract(1, 'week').endOf('week'),
];
dayjs.prototype.RANGE_THIS_MONTH = [dayjs().startOf('month'), dayjs().endOf('month')];
dayjs.prototype.RANGE_LAST_MONTH = [
  dayjs().subtract(1, 'month').startOf('month'),
  dayjs().subtract(1, 'month').endOf('month'),
];
dayjs.prototype.RANGE_THIS_YEAR = [dayjs().startOf('year'), dayjs().endOf('year')];
dayjs.prototype.RANGE_LAST_YEAR = [
  dayjs().subtract(1, 'year').startOf('year'),
  dayjs().subtract(1, 'year').endOf('year'),
];
