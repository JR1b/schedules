import { isValidElement } from 'react';

import classNames from 'classnames';

import { ViewCardBody } from './ViewCardBody';
import { ViewCardHeader } from './ViewCardHeader';

type Props = {
  children: React.ReactNode[];
  className?: string;
};

export function ViewCard(props: Props): React.ReactElement {
  const { children, className = '' } = props;
  const listChildren = Array.isArray(children) ? children : [children];

  const viewCardHeader = listChildren.find((child) => {
    return isValidElement(child) && child.type === ViewCardHeader;
  });

  const viewCardBody = listChildren.find((child) => {
    return isValidElement(child) && child.type === ViewCardBody;
  });

  return (
    <div className={classNames('h-full p-2', className)}>
      {viewCardHeader}
      {viewCardBody}
    </div>
  );
}

ViewCard.Header = ViewCardHeader;
ViewCard.Body = ViewCardBody;
