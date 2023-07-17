import { TitleBar } from '../TitleBar';

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Page(props: Props): React.ReactElement {
  const { title = 'App', children } = props;
  return (
    <div className="flex h-screen flex-col bg-slate-700 text-gray-50">
      <div className="h-16 bg-slate-950">
        <TitleBar title={title} />
      </div>

      <div className="my-2 grow overflow-auto md:mx-2">{children}</div>
    </div>
  );
}
