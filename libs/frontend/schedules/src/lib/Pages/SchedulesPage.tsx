import { Grid, View } from '@adobe/react-spectrum';
import { ScheduleContextProvider } from '../contexts';
import { LogsView, SchedulesView } from './views';

export function SchedulesPage(): React.ReactElement {
  return (
    <Grid
      areas={['schedules logs']}
      columns={['1fr', '3fr']}
      rows={['auto']}
      height="size-6000"
      gap="size-100"
    >
      <ScheduleContextProvider>
        <View backgroundColor="gray-200" gridArea="schedules">
          <SchedulesView />
        </View>
        <View backgroundColor="gray-200" gridArea="logs">
          <LogsView />
        </View>
      </ScheduleContextProvider>
    </Grid>
  );
}
