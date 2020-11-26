/**
 * 导航
 */
import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import cx from 'classnames';
import s from './Navigation.css';
import Link from '../Link';

export default function Navigation() {
  useStyles(s);
  return (
    <div className={s.root} role="navigation">
      <Link className={s.link} to="/about">
        关于我们
      </Link>
      <Link className={s.link} to="/contact">
        联系我们
      </Link>
      <span className={s.spacer}> | </span>
      <Link className={s.link} to="/login">
       登录
      </Link>
      <span className={s.spacer}>or</span>
      <Link className={cx(s.link, s.highlight)} to="/register">
        退出
      </Link>
    </div>
  );
}
