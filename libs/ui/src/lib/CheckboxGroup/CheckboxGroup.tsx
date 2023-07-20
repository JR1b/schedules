import {
  CheckboxGroupProps as CheckboxGroupPropsRAC,
  CheckboxProps as CheckboxPropsRAC,
  Checkbox as CheckboxRAC,
  CheckboxGroup as CheckboxGroupRAC,
  Text,
} from 'react-aria-components';

import './CheckboxGroup.css';

type CheckboxGroupProps = Pick<CheckboxGroupPropsRAC, 'onChange' | 'defaultValue'> & {
  /**
   * The content of the checkbox group
   */
  children?: React.ReactNode;
  /**
   * The label of the checkbox group
   */
  label?: string;
  /**
   * The description of the checkbox group
   */
  description?: string;
};

/**
 * A checkbox group component
 * @param props.children The content of the checkbox group
 * @param props.label The label of the checkbox group
 * @param props.description The description of the checkbox group
 * @example
 * ```tsx
 * <CheckboxGroup
 *  label="Checkbox Group"
 * description="This is a checkbox group"
 * errorMessage="This is an error message"
 * >
 * <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
 * <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
 * <CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
 * </CheckboxGroup>
 * ```
 * @see https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html
 */
export function CheckboxGroup(props: CheckboxGroupProps): React.ReactElement {
  const { label, description, children, ...checkboxGroupProps } = props;
  return (
    <CheckboxGroupRAC {...checkboxGroupProps}>
      {label}
      {description && <Text slot="description">{description}</Text>}
      {children}
    </CheckboxGroupRAC>
  );
}

type CheckboxProps = Omit<CheckboxPropsRAC, 'children'> & {
  children?: React.ReactNode;
};
/**
 * A checkbox component
 * @param props.children The content of the checkbox
 * @example
 * ```tsx
 * <Checkbox>Option 1</Checkbox>
 * ```
 * @see https://react-spectrum.adobe.com/react-aria/Checkbox.html
 */
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
