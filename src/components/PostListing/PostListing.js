import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {
        postList.map((post, index) =>
          <article className="post" key={index}> 
            <h1>
              <Link to={post.path} key={post.title}>{post.title}</Link>
            </h1>
            <div className="post-info"><span>Posted on </span> <span className="post-meta">
                <time>{post.date}</time>
              </span>
            </div>
            <p>
              {post.excerpt}
            </p>
          </article>
        )}
      </div>
    );
  }
}

export default PostListing;
