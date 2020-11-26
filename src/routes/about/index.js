
import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import about from './about.md';

function action() {
  return {
    chunks: ['about'],
    title: '关于我们',
    component: (
      <Layout>
        <Page {...about} />
      </Layout>
    ),
  };
}

export default action;
