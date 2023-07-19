import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ViewCardBody(props: Props): React.ReactElement {
  const { children, className = '' } = props;
  return (
    <div className={classNames('h-[85vh] overflow-auto px-2', className)}>{children}</div>
  );
}
