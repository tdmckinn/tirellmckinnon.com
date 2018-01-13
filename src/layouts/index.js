import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import './index.scss'

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/'
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '')
    let title = ''
    if (currentPath === '') {
      title = 'Home'
    } else if (currentPath === 'tags/') {
      title = 'Tags'
    } else if (currentPath === 'speaking/') {
      title = 'Speaking Engagements'
    } else if (currentPath === 'categories/') {
      title = 'Categories'
    } else if (currentPath === 'about/') {
      title = 'About'
    } else if (currentPath.includes('posts')) {
      title = 'Article'
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `Tagged in ${capitalize(tag)}`
    } else if (currentPath.includes('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `${capitalize(category)}`
    }
    return title
  }
  render() {
    const { children, location } = this.props
    return (
      <div id="app">
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {location.pathname === '/' ? <Header /> : null}
        <div className="view">{children()}</div>
        <Footer config={config} />
      </div>
    )
  }
}
