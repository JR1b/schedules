import { Item, ListBox, Section, Text } from '@adobe/react-spectrum';
import { Schedule } from '../../types';

type ScheduleListProps = {
  schedules: Schedule[];
};

export function ScheduleList(props: ScheduleListProps): React.ReactElement {
  const { schedules } = props;
  console.log(schedules);
  return (
    <ListBox width="size-2400" selectionMode="single" aria-label="Schedules">
      <Section title="Schedules">
        {schedules.map((schedule) => (
          <Item key={schedule.id}>
            <Text>{schedule.name}</Text>
            <Text slot="description">{schedule.description}</Text>
          </Item>
        ))}
      </Section>
    </ListBox>
  );
}
