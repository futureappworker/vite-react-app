import 'dayjs';

declare module 'dayjs' {
  interface Dayjs {
    /**
     * @description: 系统开始时间(2020-10-01 00:00:00)到現在的時間
     */
    SYSTEM_BEFORE: [Dayjs, Dayjs];
    /**
     * @description: 今天
     */
    RANGE_TODAY: [Dayjs, Dayjs];
    /**
     * @description: 昨天
     */
    RANGE_YESTERDAY: [Dayjs, Dayjs];
    /**
     * @description: 本周
     */
    RANGE_THIS_WEEK: [Dayjs, Dayjs];
    /**
     * @description: 上周
     */
    RANGE_LAST_WEEK: [Dayjs, Dayjs];
    /**
     * @description: 本月
     */
    RANGE_THIS_MONTH: [Dayjs, Dayjs];
    /**
     * @description: 上月
     */
    RANGE_LAST_MONTH: [Dayjs, Dayjs];
    /**
     * @description: 今年
     */
    RANGE_THIS_YEAR: [Dayjs, Dayjs];
    /**
     * @description: 去年
     */
    RANGE_LAST_YEAR: [Dayjs, Dayjs];
  }
}
