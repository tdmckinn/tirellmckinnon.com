import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

const Layout = ({ children, title, description}) => {
  const metaImageUrl = 'https://res.cloudinary.com/drjn3dk05/image/upload/v1607717387/tirellmckinnon_letters_e6bca7.jpg?id=1';

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
