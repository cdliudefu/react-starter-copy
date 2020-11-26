/**
 * 布局
 */
import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';

// 必须在JS中导入外部全局样式。
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  useStyles(s, normalizeCss);
  return (
    <>
      <Header />
      <div className={s.layout}>{children}</div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
