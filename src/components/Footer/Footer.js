/**
 * 底部导航
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './Footer.css';
import Link from '../Link';

export default function Footer() {
  useStyles(s);

  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>© Andy</span>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/">
          首页
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/admin">
          管理
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/privacy">
          隐私
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/not-found">
          未找到
        </Link>
      </div>
    </div>
  );
}
