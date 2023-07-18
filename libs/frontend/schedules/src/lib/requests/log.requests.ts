import { Log, LogFilter } from '../types';
import { FetchOptions } from './types';

type GetLogListRequestArgs = {
  scheduleId: number;
  filter?: LogFilter;
  options?: FetchOptions;
};

/**
 * Get a list of logs for a schedule
 * @param args.scheduleId The ID of the schedule
 * @param args.options Additional options
 * @param args.options.signal A signal to cancel the request
 * @returns A list of logs
 * @example
 * ```
 * const logs = await getLogList({ scheduleId: 1 });
 * ```
 * @see {@link https://github.com/typicode/json-server#filter} for more information on filtering
 */
export async function getLogList(args: GetLogListRequestArgs): Promise<Iterable<Log>> {
  const { scheduleId, options = {}, filter } = args;
  const { signal } = options;

  const apiURL = process.env['API_URL'];

  // generate query string
  const filterStatus = filter?.status || [];
  const query = new URLSearchParams();
  filterStatus.forEach((status) => query.append('status', status));
  const queryString = query.toString();

  const fetchUrl = `${apiURL}/schedules/${scheduleId}/logs?${queryString}`;

  const res = await fetch(fetchUrl, { signal });

  return res.json();
}
