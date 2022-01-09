
import React from 'react';
import {copyright as copyrightStyles} from './Copyright.module.scss';


const Copyright = ({ copyright }) => (
  <div className={copyrightStyles}>
    {copyright}
  </div>
);

export default Copyright;
