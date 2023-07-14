import { Grid, View } from '@adobe/react-spectrum';
import { FiMenu } from 'react-icons/fi';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Page(props: Props): React.ReactElement {
  const { title = 'App', children } = props;
  return (
    <Grid
      areas={{
        base: ['header', 'content'],
      }}
      gap="size-100"
    >
      <View gridArea="header" height="size-800" backgroundColor="gray-200">
        <div className="flex h-full w-full items-center justify-between p-4 text-4xl font-bold">
          <h1>{title}</h1>
          <div aria-label="placeholder app menu">
            <FiMenu />
          </div>
        </div>
      </View>
      <View gridArea="content" height="size-6000">
        <div className="h-full">{children}</div>
      </View>
    </Grid>
  );
}
