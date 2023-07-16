import { Flex, View } from '@adobe/react-spectrum';
import { Item } from 'react-aria-components';
import { ItemProps } from 'react-stately';

import classnames from 'classnames';

import { Schedule } from '../../types';

type Props = {
  schedule: Schedule;
} & Omit<ItemProps<Schedule>, 'children'>;

export function ScheduleCard(props: Props): React.ReactElement {
  const { schedule, ...itemProps } = props;
  return (
    <Item {...itemProps}>
      {({ isHovered }) => (
        <div className={classnames('gray-300', { 'gray-400': isHovered })}>
          <div>
            <h3>{schedule.name}</h3>
          </div>
          <div>
            <p>{schedule.description}</p>
          </div>
        </div>
      )}
    </Item>
  );
}
