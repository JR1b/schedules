import { Item, ListBox, Section, Text } from '@adobe/react-spectrum';
import { isValidElement } from 'react';

type ScheduleItemProps = {
  children: React.ReactElement | React.ReactElement[];
};

function ScheduleItem(props: ScheduleItemProps): React.ReactElement {
  const { children } = props;

  return <div className="flex flex-1 items-center py-3">{children}</div>;
}

type ScheduleListProps = {
  schedules: any;
};

export function ScheduleList(props: ScheduleListProps): React.ReactElement {
  const { children } = props;
  const listChildren = Array.isArray(children) ? children : [children];

  const validScheduleItems = listChildren.find((child) => {
    return isValidElement(child) && child.type === ScheduleItem;
  });

  const items = validScheduleItems.return(
    <ListBox
      width="size-2400"
      aria-label="Options"
      selectionMode="single"
      items={schedules}
    >
      <Section title="Permission">
        <Item textValue="Read">
          <Text>Read</Text>
          <Text slot="description">Read Only</Text>
        </Item>
        <Item textValue="Write">
          <Text>Write</Text>
          <Text slot="description">Read and Write Only</Text>
        </Item>
        <Item textValue="Admin">
          <Text>Admin</Text>
          <Text slot="description">Full access</Text>
        </Item>
      </Section>
    </ListBox>
  );
}

ScheduleList.Item = ScheduleItem;
