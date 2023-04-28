import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const _template='YYYY-MM-DD HH:mm:ss'

/*
  时间格式化
*/
export const format = (
    date?: Date,
    template: string = _template
  ): string => {
    return dayjs(date).format(template)
  }
  

  /**
   * 
   * utc转换
   */
export function utcToDateTimeFormat(utcDate: string, format: string =_template) {
    return dayjs.utc(utcDate).utcOffset(8).format(format)
}
/**
 * Date to utc
 */

 export function DateToUtc(Date: Date) {
    return dayjs(Date).utc().format()
  }