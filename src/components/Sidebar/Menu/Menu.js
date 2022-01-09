import React from 'react';
import { Link } from 'gatsby';
import * as menuStyles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={menuStyles.menu}>
    <ul className={menuStyles.menuList}>
      {menu.map(item => (
        <li className={menuStyles.menuListItem} key={item.path}>
          <Link
            to={item.path}
            className={menuStyles.menuListItemLink}
            activeClassName={menuStyles.menuListItemLinkActive}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
