
import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.css';

export default function Contact({ title }) {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>联系我们</p>
        <p>地址：成都市</p>
      </div>
    </div>
  );
}

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};
