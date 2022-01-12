import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import Toggle from 'react-toggle';
import { ThemeContext, ThemeContextProvider } from '../../context/ThemeContext';

import { layout, toggle } from './Layout.module.scss';

const Layout = ({ children, title, description }) => {
  const state = useContext(ThemeContext);

  const metaImageUrl =
    'https://res.cloudinary.com/drjn3dk05/image/upload/v1607717387/tirellmckinnon_letters_e6bca7.jpg?id=1';

  return (
    <div className={layout}>
      <div className={toggle}>
        <Toggle
          defaultChecked={state.isDarkMode}
          icons=
          {{ checked: '🌙', unchecked: '🔆' }}
          onChange={() => state.setDarkMode(!state.isDarkMode)}
        />
      </div>
      <Helmet>
        <html lang="en" className={state.mode} />
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

const AppLayout = ({ ...props }) => {
  return (
    <ThemeContextProvider>
      <Layout {...props} />
    </ThemeContextProvider>
  );
};
export default AppLayout;
