type Props = {
  children: React.ReactNode;
};

export function PageBody(props: Props): React.ReactElement {
  const { children } = props;
  return <div className="my-2 grow overflow-auto md:mx-2">{children}</div>;
}
