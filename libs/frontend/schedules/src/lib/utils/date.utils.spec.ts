import { formatDate } from './date.utils';

describe('formatDate()', () => {
  it('should format a date', () => {
    const date = new Date('2020-01-01');
    expect(formatDate(date)).toEqual('Jan 1, 2020');
  });

  it('should format a string', () => {
    expect(formatDate('2020-01-01')).toEqual('Jan 1, 2020');
  });

  it('should return an empty string if no date is invalid', () => {
    expect(formatDate('invalid date')).toEqual('');
  });
});
