import { TitleBar } from '../TitleBar';

type Props = {
  title: string;
};

export function PageTitleBar(props: Props): React.ReactElement {
  const { title } = props;
  return (
    <div className="h-16 bg-slate-950">
      <TitleBar title={title} />
    </div>
  );
}
