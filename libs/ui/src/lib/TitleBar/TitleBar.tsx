import { FiMenu } from 'react-icons/fi';

type Props = {
  title: string;
};

/**
 * Renders a title bar with a title and menu icon
 * @param props.title - The title to display in the title bar
 * @example
 * ```tsx
 * <TitleBar title="App" />
 * ```
 */
export function TitleBar(props: Props): React.ReactElement {
  const { title } = props;
  return (
    <div className="flex h-full w-full items-center justify-between p-4 text-4xl font-bold">
      <h1>{title}</h1>
      <div aria-label="placeholder app menu">
        <FiMenu />
      </div>
    </div>
  );
}
