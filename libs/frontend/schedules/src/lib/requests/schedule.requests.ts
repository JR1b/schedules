import { Schedule } from '../types';
import { FetchOptions } from './types';

type GetScheduleListRequestArgs = {
  options: FetchOptions;
};

/**
 * Get a list of schedules
 * @param args The request arguments
 * @returns A list of schedules
 * @example
 * getScheduleList({ options: { signal } });
 * // returns [{ id: 1, name: 'Schedule 1' }, { id: 2, name: 'Schedule 2' }]
 */
export async function getScheduleList(
  args: GetScheduleListRequestArgs
): Promise<Iterable<Schedule>> {
  const { options } = args;
  const { signal } = options;
  const apiURL = process.env['API_URL'];
  const res = await fetch(`${apiURL}/schedules`, { signal });
  return res.json();
}
