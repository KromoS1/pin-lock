import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import dayOfYear from 'dayjs/plugin/dayOfYear'
import timezone from 'dayjs/plugin/timezone'
import updateLocal from 'dayjs/plugin/updateLocale'
import utc from 'dayjs/plugin/utc'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { getCalendars } from 'expo-localization'

dayjs.extend(updateLocal)
dayjs.extend(weekOfYear)
dayjs.extend(weekday)
dayjs.extend(dayOfYear)
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault(getCalendars()[0].timeZone || 'Europe/Minsk')

dayjs.locale({
	...ru,
	weekStart: 1,
})

export const DayjsApp = dayjs
