import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import uniq from 'lodash.uniq'

import { engagements } from './data/talks.json'

class Speaking extends Component {
  render() {
    return (
      <div className="my-talks">
        <Helmet title="Speaking | Tirell Mckinnon" />
        <div>
          <h1> Speaking Engagments </h1>
          <a className="btn home" href="/" title="Back to Home">
            &laquo; Back to Home
          </a>
          <p>
            {' '}
            I enjoy speaking and sharing knowledge with developer communities.
            If you would like to have me speak or present at your event just
            reach out to me at any of my social mediums.
          </p>
          <div className="my-talks-container">
            <div className="my-talks-information">
              <section className="comments">
                {engagements.map(({ talks }) => (
                  <div>
                    {talks.map(({ conference, date, slides, location }) => (
                      <article className="comment">
                        <div className="comment-body">
                          <div className="text">
                            <p>{conference}</p>
                          </div>
                          <p className="attribution">
                            Date: {date} | <a href={slides}>Slides</a> |
                            Location: {location}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </section>​
            </div>
            <div className="my-talks-collage">
              <img
                src="http://res.cloudinary.com/drjn3dk05/image/upload/v1515791119/37838715525_fbdf60fcba_o-COLLAGE_dvxtug.jpg"
                alt="Tirell Mckinnon's Speaker Collage"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Speaking
