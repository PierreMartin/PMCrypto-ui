import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchBlocksRequest } from './api';
import App from './pages/App';
import Home from './pages/Home';
// import Blocks from './pages/Blocks';
// import Block from './pages/Block';
// import Wallet from './pages/Wallet';
import About from './pages/About';


export default (/*store*/) => {
  /*
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  */

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} fetchData={fetchBlocksRequest} />
      <Route path="about" component={About} />
    </Route>
  );
};
