import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Tags.module.scss';

const Tags = ({ tags, tagSlugs }) => (
  <div className={styles.tags}>
    <ul className={styles.tagsList}>
      {tagSlugs &&
        tagSlugs.map((slug, i) => (
          <li className={styles.tagsListItem} key={tags[i]}>
            <Link to={slug} className={styles.tagsListItemLink}>
              {tags[i]}
            </Link>
          </li>
        ))}
    </ul>
  </div>
);

export default Tags;
