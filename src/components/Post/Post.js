import React from 'react';
import { Link } from 'gatsby';

import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import NewsLetter from '../Newsletter/Newsletter';
 
import * as styles from './Post.module.scss';

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className="post">
      <Link className={styles.postHomeButton} to="/">
        All Articles
      </Link>

      <div>
        <Content body={html} title={title} />
      </div>

      <div className={styles.postFooter}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles.postComments}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>

      <NewsLetter />
    </div>
  );
};

export default Post;
