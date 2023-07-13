import { Grid, View } from '@adobe/react-spectrum';

export function SchedulesPage(): React.ReactElement {
  return (
    <Grid
      areas={['schedules logs']}
      columns={['1fr', '3fr']}
      rows={['auto']}
      height="size-6000"
      gap="size-100"
    >
      <View backgroundColor="gray-200" gridArea="schedules">
        <h1>Schedules</h1>
      </View>
      <View backgroundColor="gray-200" gridArea="logs">
        <h1>Logs</h1>
      </View>
    </Grid>
  );
}
