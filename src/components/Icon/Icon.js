import React from 'react';
import {icon as iconStyle} from './Icon.module.scss';

const Icon = ({ name, icon }) => (
  <svg className={iconStyle} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;
