import React, { useRef, useEffect } from 'react';
import * as pageStyles from './Page.module.scss';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={pageStyles.page}>
      <div className={pageStyles.padgeInner}>
        {title && <h1 className={pageStyles.padgeTitle}>{title}</h1>}
        <div className={pageStyles.padgeBody}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
