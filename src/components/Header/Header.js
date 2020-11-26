/**
 * 头部
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

export default function Header() {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation />
        <Link className={s.brand} to="/">
          <img
            src={logoUrl}
            srcSet={`${logoUrl2x} 2x`}
            width="38"
            height="38"
            alt="React"
          />
          <span className={s.brandTxt}>Andy.Liu</span>
        </Link>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>React</h1>
          <p className={s.bannerDesc}>一个可以运行的脚手架</p>
        </div>
      </div>
    </div>
  );
}
