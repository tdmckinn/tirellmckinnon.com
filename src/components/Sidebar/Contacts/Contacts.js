import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import Icon from '../../Icon';
import * as styles from './Contacts.module.scss';

const Contacts = ({ contacts }) => (
  <div className={styles.contacts}>
    <ul className={styles.contactsList}>
      {Object.keys(contacts).map(name =>
        !contacts[name] ? null : (
          <li className={styles.contactsListItem} key={name}>
            <a
              className={styles.contactsListItemLink}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name={name} icon={getIcon(name)} />
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);

export default Contacts;
