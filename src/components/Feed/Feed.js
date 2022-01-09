import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Feed.module.scss';

const Feed = ({ edges }) => (
  <div className="feed">
    {edges.map((edge) => (
      <div className={styles.feedItem} key={edge.node.fields.slug}>
        <div className="feed__meta">
          <time
            className={styles.feedItemMetaTime}
            dateTime={new Date(edge.node.frontmatter.date).toLocaleDateString(
              'en-US',
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}
          >
            {new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </time>
          <span className={styles.feedItemMetaDivider} />
          <span>
            <Link
              to={edge.node.fields.categorySlug}
              className={styles.feedItemMetaCategoryLink}
            >
              {edge.node.frontmatter.category}
            </Link>
          </span>
        </div>
        <h2 className={styles.feedItemTitle}>
          <Link className={styles.feedItemTitleLink} to={edge.node.fields.slug}>
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <p className={styles.feedItemDescription}>
          {edge.node.frontmatter.description}
        </p>
        <Link
          className={styles.feedItemReadmore}
          to={edge.node.fields.slug}
        >
          Read
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
