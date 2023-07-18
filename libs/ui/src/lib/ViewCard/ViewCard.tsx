import { isValidElement } from 'react';

import classNames from 'classnames';

import { ViewCardBody } from './ViewCardBody';
import { ViewCardHeader } from './ViewCardHeader';

type Props = {
  children: React.ReactNode[];
  className?: string;
};

/**
 * Renders a card with a header and body
 * @param props.children - The content to render in the card
 * @param props.className - Optional className to apply to the card
 * @example
 * ```tsx
 * <ViewCard>
 *  <ViewCard.Header>
 *   <h1>Header</h1>
 * </ViewCard.Header>
 * <ViewCard.Body>
 *  <p>Body</p>
 * </ViewCard.Body>
 * </ViewCard>
 * ```
 */
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
