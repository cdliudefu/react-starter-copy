
import React from 'react';
import Layout from '../../components/Layout';
import Register from './Register';

const title = '注册';

function action() {
  return {
    chunks: ['register'],
    title,
    component: (
      <Layout>
        <Register title={title} />
      </Layout>
    ),
  };
}

export default action;
