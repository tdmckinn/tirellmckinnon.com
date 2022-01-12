import React, { useRef, useEffect } from 'react';
import * as pageStyles from './Page.module.scss';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={pageStyles.page}>
      <div className={pageStyles.pageInner}>
        {title && <h1 className={pageStyles.pageTitle}>{title}</h1>}
        <div className={pageStyles.pageBody}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
