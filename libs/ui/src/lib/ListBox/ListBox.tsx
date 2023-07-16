/**
 * references:
 * https://react-spectrum.adobe.com/react-aria/useListBox.html#example
 */
import React from 'react';
import type { AriaListBoxProps } from 'react-aria';
import { mergeProps, useFocusRing, useListBox, useOption } from 'react-aria';
import { ListState, Node, useListState } from 'react-stately';

export function ListBox<T extends object>(
  props: AriaListBoxProps<T>
): React.ReactElement {
  // Create state based on the incoming props
  const state = useListState(props);
  console.log('🚀 ~ file: ListBox.tsx:15 ~ state:', state);

  // Get props for the listbox element
  const ref = React.useRef(null);
  const { listBoxProps, labelProps } = useListBox(props, state, ref);

  return (
    <>
      <div {...labelProps}>{props.label}</div>
      <ul
        {...listBoxProps}
        ref={ref}
        style={{
          padding: 0,
          margin: '5px 0',
          listStyle: 'none',
          border: '1px solid gray',
          maxWidth: 250,
          maxHeight: 300,
          overflow: 'auto',
        }}
      >
        {[...state.collection].map((item) => (
          <ListItem key={item.key} item={item} state={state} />
        ))}
      </ul>
    </>
  );
}

type ListItemProps<T> = {
  item: Node<T>;
  state: ListState<T>;
};

function ListItem<T>(props: ListItemProps<T>): React.ReactElement {
  const { item, state } = props;
  // Get props for the option element
  const ref = React.useRef(null);
  const { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      style={{
        background: isSelected ? 'blueviolet' : 'transparent',
        color: isDisabled ? 'gray' : isSelected ? 'white' : 'black',
        padding: '2px 5px',
        outline: isFocusVisible ? '2px solid orange' : 'none',
      }}
    >
      {item.rendered}
    </li>
  );
}

ListBox.Item = ListItem;
