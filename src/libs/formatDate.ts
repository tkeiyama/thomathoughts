import { format } from 'date-fns'

export type FormatDateResult = string

export function formatDate(date: Date): FormatDateResult {
  return format(date, 'LLLL d, yyyy')
}
