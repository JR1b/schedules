import jsf from 'json-schema-faker';
import { random } from 'lodash';
import randomDate from 'random-datetime';
import { schema } from './schema.js';

export const generateMockData = async () => {
  jsf.format('name', () => `Random Schedule Name (${random(1, 1000)})`);
  jsf.format('isodate', () => randomDate({ year: 2021 }).toISOString());

  const generatedData = await jsf.resolve(schema);
  const scheduleIds = generatedData.schedules.map((schedule) => schedule.id);

  return {
    schedules: generatedData.schedules,
    logs: generatedData.logs.map((log, index) => ({
      ...log,
      scheduleId: scheduleIds[index % scheduleIds.length],
    })),
  };
};
