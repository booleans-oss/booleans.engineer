import { format } from 'date-fns'

/**
 * Format given date to a string
 * @param date The date string
 * @returns formatted date
 */
export function formatDate(date) {
  return format(new Date(date), 'LLL d, yyyy')
}
