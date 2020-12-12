'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');

const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement('style', {
        key: 'katex-inline-stylesheet',
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() },
      }),
    ])
  }

  setPostBodyComponents([
    <script
      data-goatcounter="https://goatcounter-751h.onrender.com/count"
      async
      src="https://goatcounter-751h.onrender.com/count.js"
    />,
  ]);
};

module.exports = onRenderBody;
