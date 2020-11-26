import React from 'react';
import Layout from '../../components/Layout';
import NotFound from './NotFound';

const title = '页面未找到';

function action() {
  return {
    chunks: ['not-found'],
    title,
    component: (
      <Layout>
        <NotFound title={title} />
      </Layout>
    ),
    status: 404,
  };
}

export default action;
