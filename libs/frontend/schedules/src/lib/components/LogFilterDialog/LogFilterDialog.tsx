import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Label,
  Modal,
} from 'react-aria-components';
import { FiFilter } from 'react-icons/fi';

import { CheckboxGroup } from '@schedules/ui';

import { LogStatusEnum } from '../../schemas';
import { LogFilter } from '../../types';
import { LogStatus } from '../LogStatus';
import './LogFilterDialog.css';

type Props = {
  filter: LogFilter;
  onSubmit: (filter: LogFilter) => void;
};

/**
 * This component is used to render the log filter dialog.
 * @example
 * <LogFilterDialog />
 * @see https://react-spectrum.adobe.com/react-aria/Dialog.html#example
 */
export function LogFilterDialog(props: Props): React.ReactElement {
  const { filter, onSubmit } = props;

  const [status, setStatus] = useState<string[]>(filter?.status ?? []);

  const onApply = (callback?: () => void): void => {
    //validate status matches LogStatusEnum
    const newStatus = status.filter((stat): stat is LogStatusEnum =>
      Object.values(LogStatusEnum).includes(stat as LogStatusEnum)
    );

    onSubmit({ status: newStatus });
    callback?.();
  };

  return (
    <DialogTrigger>
      <Button className="rounded-md border p-1">
        <FiFilter className="h-5 w-5" />
      </Button>
      <Modal className="w-full rounded-md border border-gray-50 bg-slate-950 px-3 py-2 md:max-w-md">
        <Dialog>
          {({ close }) => (
            <form>
              <Heading className="text-lg font-medium">Log Filter</Heading>
              <div className="my-2 rounded-md border p-2">
                <CheckboxGroup defaultValue={status} onChange={setStatus}>
                  <Label>Status</Label>
                  {Object.values(LogStatusEnum).map((status) => (
                    <CheckboxGroup.Item key={status} value={status}>
                      <LogStatus status={status} />
                    </CheckboxGroup.Item>
                  ))}
                </CheckboxGroup>
              </div>
              <div className="flex flex-col gap-2 py-2 md:flex-row">
                <Button
                  className="h-10 w-full rounded-md border bg-blue-600 hover:bg-blue-700"
                  onPress={() => onApply(close)}
                >
                  Apply
                </Button>
                <Button
                  className="h-10 w-full rounded-md border bg-slate-700 hover:bg-slate-800"
                  onPress={close}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
