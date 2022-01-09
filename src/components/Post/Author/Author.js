import React from 'react';
import { getContactHref } from '../../../utils';
import * as styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.author}>
      <p>
        {author.bio}
        <a
          className={styles.authorBioTwitter}
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  );
};

export default Author;
