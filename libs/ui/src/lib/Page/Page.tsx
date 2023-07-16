import { TitleBar } from '../TitleBar';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Page(props: Props): React.ReactElement {
  const { title = 'App', children } = props;
  return (
    <div className="flex h-screen flex-col gap-2 bg-slate-700 text-gray-50">
      <div className="bg-slate-900">
        <TitleBar title={title} />
      </div>

      <div className="h-full">{children}</div>
    </div>
  );
}
