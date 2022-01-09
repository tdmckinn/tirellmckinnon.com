import React from 'react';
import { withPrefix, Link } from 'gatsby';
import * as styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
  <div className="author">
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles.authorPhoto}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    {isIndex === true ? (
      <h1 className={styles.authorTitle}>
        <Link className={styles.authorTitleLink} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles.authorTitle}>
        <Link className={styles.authorTitleLink} to="/">
          {author.name}
        </Link>
      </h2>
    )}
    <p className={styles.authorSubtitle}>{author.bio}</p>
  </div>
);

export default Author;
