import { createContext, useContext, useEffect } from 'react';
import { useAsyncList } from 'react-stately';

import { getLogList } from '../requests';
import { logSchema } from '../schemas';
import { Log, Schedule } from '../types';
import { LogContextState } from './types';

export const LogContext = createContext<LogContextState>({} as LogContextState);

type LogProviderProps = {
  schedule: Schedule;
  children: React.ReactNode;
};

export function LogContextProvider(props: LogProviderProps): React.ReactElement {
  const { schedule, children } = props;

  const logListResponse = useAsyncList<Log>({
    load: async ({ signal }) => ({
      items: await getLogList({ scheduleId: schedule.id, options: { signal } }),
    }),
  });

  const { items: logListData, isLoading: isLoadingLogs } = logListResponse;

  // reload logs when schedule changes
  useEffect(() => {
    if (!schedule.id || logListData.length === 0) {
      return;
    }
    logListResponse.reload();
  }, [schedule.id]);

  return (
    <LogContext.Provider
      value={{
        logList: logListData.filter((log) => logSchema.safeParse(log).success),
        isLoadingLogs,
        onReload: () => null,
      }}
    >
      {children}
    </LogContext.Provider>
  );
}

export function useLogContext(): LogContextState {
  return useContext(LogContext);
}
