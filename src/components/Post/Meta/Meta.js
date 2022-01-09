import React from 'react';
import {metaDate} from './Meta.module.scss';

const Meta = ({ date }) => (
  <div className="meta">
    <p className={metaDate}>
      Published{' '}
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </p>
  </div>
);

export default Meta;
