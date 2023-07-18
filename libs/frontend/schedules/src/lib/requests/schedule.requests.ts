import { Schedule } from '../types';
import { FetchOptions } from './types';

type GetScheduleListRequestArgs = {
  options?: FetchOptions;
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
  const { options = {} } = args;
  const { signal } = options;

  const apiURL = process.env['API_URL'];
  const fetchUrl = `${apiURL}/schedules`;

  const res = await fetch(fetchUrl, { signal });

  return res.json();
}

/**
 * update a schedule by id
 */
type UpdateScheduleRequestArgs = {
  schedule: Schedule;
  options?: FetchOptions;
};

/**
 * Update a schedule
 * @param args The request arguments
 * @returns The updated schedule
 * @example
 * updateSchedule({ scheduleId: 1, schedule: { id: 1, name: 'Schedule 1' }, options: { signal } });
 * // returns { id: 1, name: 'Schedule 1' }
 */
export async function updateSchedule(args: UpdateScheduleRequestArgs): Promise<Schedule> {
  const { schedule, options = {} } = args;
  const { signal } = options;

  const apiURL = process.env['API_URL'];
  const fetchUrl = `${apiURL}/schedules/${schedule.id}`;

  const res = await fetch(fetchUrl, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(schedule),
    signal,
  });

  return res.json();
}
