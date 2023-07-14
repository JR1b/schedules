import { format, resolve } from 'json-schema-faker';
import { random } from 'lodash';
import { schema } from './schema';
import { Schedule, Log } from '../types';

type MockData = {
  schedules: Schedule[];
  logs: Log[];
};

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const generateMockData = async () => {
  format('name', () => `Random Schedule Name (${random(1, 1000)})`);
  format('isodate', () => randomDate(new Date(2021, 0, 1), new Date()).toISOString());

  const generatedData = (await resolve(schema)) as unknown as MockData;
  const scheduleIds = generatedData.schedules.map((schedule) => schedule.id);

  return {
    schedules: generatedData.schedules,
    logs: generatedData.logs.map((log, index) => ({
      ...log,
      scheduleId: scheduleIds[index % scheduleIds.length],
    })),
  };
};
