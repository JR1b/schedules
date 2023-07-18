import {
  CheckboxGroupProps as CheckboxGroupPropsRAC,
  CheckboxProps as CheckboxPropsRAC,
  Checkbox as CheckboxRAC,
  CheckboxGroup as CheckboxGroupRAC,
  Text,
} from 'react-aria-components';

import './CheckboxGroup.css';

type CheckboxGroupProps = Omit<CheckboxGroupPropsRAC, 'children'> & {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string;
};

export function CheckboxGroup(props: CheckboxGroupProps): React.ReactElement {
  const { label, description, errorMessage, children, ...checkboxGroupProps } = props;
  return (
    <CheckboxGroupRAC {...checkboxGroupProps}>
      {label}
      {children}
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </CheckboxGroupRAC>
  );
}

interface CheckboxProps extends Omit<CheckboxPropsRAC, 'children'> {
  children?: React.ReactNode;
}

function Checkbox(props: CheckboxProps): React.ReactElement {
  const { children, ...checkboxProps } = props;
  return (
    <CheckboxRAC {...checkboxProps}>
      <div className="flex items-center gap-2">
        <div className="checkbox" aria-hidden="true">
          <svg viewBox="0 0 18 18">
            <polyline points="1 9 7 14 15 4" />
          </svg>
        </div>
        {children}
      </div>
    </CheckboxRAC>
  );
}

CheckboxGroup.Item = Checkbox;
