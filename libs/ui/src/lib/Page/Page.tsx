import { isValidElement } from 'react';

import { PageBody } from './PageBody';
import { PageTitleBar } from './PageTitleBar';

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

/**
 * Page component
 *  - Renders a page with a title bar and body
 *
 * @param props.children - The child elements to render
 * @example
 * ```tsx
 * <Page title="My Page">
 *  <div>My Page</div>
 * </Page>
 * ```
 */
export function Page(props: Props): React.ReactElement {
  const { children } = props;

  const listChildren = Array.isArray(children) ? children : [children];

  const pageTitleBar = listChildren.find(
    (child) => isValidElement(child) && child.type === PageTitleBar
  );

  const pageBody = listChildren.find(
    (child) => isValidElement(child) && child.type === PageBody
  );

  return (
    <div className="flex h-screen flex-col bg-slate-700 text-gray-50">
      {pageTitleBar}
      <div className="my-2 grow overflow-auto md:mx-2">{pageBody}</div>
    </div>
  );
}

Page.TitleBar = PageTitleBar;
Page.Body = PageBody;
