import { Log } from '../types';
import { FetchOptions } from './types';

type GetLogListRequestArgs = {
  scheduleId: number;
  options?: FetchOptions;
};

export async function getLogList(args: GetLogListRequestArgs): Promise<Iterable<Log>> {
  const { scheduleId, options = {} } = args;
  const { signal } = options;

  const apiURL = process.env['API_URL'];
  const fetchUrl = `${apiURL}/schedules/${scheduleId}/logs`;

  const res = await fetch(fetchUrl, { signal });

  return res.json();
}
