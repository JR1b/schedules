import { Grid, View } from '@adobe/react-spectrum';
import { Outlet } from 'react-router-dom';

export function AppLayout(): React.ReactElement {
  return (
    <Grid
      areas={{
        base: ['header', 'content', 'footer'],
      }}
      gap="size-100"
    >
      <View gridArea="header" height="size-1000" backgroundColor="gray-200" />
      <View gridArea="content">
        <div className="h-full">
          <Outlet />
        </div>
      </View>
      <View gridArea="footer" height="size-1000" backgroundColor="gray-200" />
    </Grid>
  );
}
