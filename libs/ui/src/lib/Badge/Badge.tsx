import classnames from 'classnames';

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

type Props = {
  children: React.ReactNode;
  variant?: Variant;
};

/**
 * A badge component
 * @param props.children The content of the badge
 * @param props.variant The variant of the badge (default: primary)
 * @returns React.ReactElement
 * @example
 * ```tsx
 * <Badge>1</Badge>
 * ```
 */
export function Badge(props: Props): React.ReactElement {
  const { children, variant = 'primary' } = props;

  return (
    <span
      className={classnames(
        'rounded-md px-1.5 py-0.5',
        {
          'bg-blue-600': variant === 'primary',
          'bg-gray-600': variant === 'secondary',
          'bg-green-600': variant === 'success',
          'bg-yellow-600': variant === 'warning',
          'bg-red-600': variant === 'danger',
        },
        'text-gray-50'
      )}
    >
      {children}
    </span>
  );
}
