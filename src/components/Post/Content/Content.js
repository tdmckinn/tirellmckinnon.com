import React from 'react';
import * as styles from './Content.module.scss';

const Content = ({ body, title }) => (
  <div className={styles.content}>
    <h1 className={styles.contentTitle}>{title}</h1>
    <div
      className={styles.contentBody}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </div>
);

export default Content;
