import { FiLoader } from 'react-icons/fi';

import classNames from 'classnames';

type Props = {
  label?: string;
  isLoading?: boolean;
};

/**
 * Renders a spinner with an optional label
 * @param props.label - Optional label to display next to the spinner
 * @param props.isLoading - Whether or not the spinner should be displayed
 * @example
 * ```tsx
 * <Spinner isLoading={true} label="Loading" />
 * ```
 */
export function Spinner(props: Props): React.ReactElement {
  const { isLoading = false, label = '' } = props;
  return (
    <div className={classNames('flex items-center gap-2', { hidden: !isLoading })}>
      <span>{label}</span>
      <FiLoader className="animate-spin" />
    </div>
  );
}
