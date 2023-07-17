// TODO: move this to a shared library
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'UTC',
  dateStyle: 'medium',
});

/**
 * Format a date to a string
 *  - If the date is invalid, return an empty string
 * - If the date is valid, return a formatted string
 * @param date The date to format as a string or Date object
 * @returns A formatted date string
 * @example
 * formatDate('2020-01-01T00:00:00.000Z'); // 'Jan 1, 2020'
 * formatDate('invalid date'); // ''
 * formatDate(new Date('invalid date')); // ''
 */
export function formatDate(date: Date | string): string {
  // convert string to date
  if (typeof date === 'string') {
    date = new Date(date);
  }

  // test for a valid date
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return formatter.format(date);
}
