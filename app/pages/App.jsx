import React from 'react';
import LayoutPage from '../components/layouts/LayoutPage/LayoutPage';
import LayoutMain from '../components/layouts/LayoutMain/LayoutMain';
import { title, meta, link } from '../components/assets/assets';

const App = props => (
  <LayoutPage title={title} meta={meta} link={link}>
    <LayoutMain {...props} />
  </LayoutPage>
);

export default App;
