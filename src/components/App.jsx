import React from 'react';
import { Layout } from 'components/Layout/Layout';
import Phonebook from './phoneBook/Phonebook';

export const App = () => {
  return (
    <Layout>
      <Phonebook />
    </Layout>
  );
};
