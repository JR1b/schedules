import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function ViewCardHeader(props: Props): React.ReactElement {
  const { children, className = '' } = props;
  return (
    <div className={classNames('flex items-center gap-2 p-2 font-medium', className)}>
      {children}
    </div>
  );
}
