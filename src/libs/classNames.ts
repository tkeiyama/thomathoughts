import _clsx, { ClassValue } from 'clsx'

export function classNames(...classes: ClassValue[]): string {
  return _clsx(...classes)
}
