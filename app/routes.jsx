import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import Home from './pages/Home';
import Blocks from './pages/Blocks';
import Block from './pages/Block';
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
      <IndexRoute component={Home} />
			<Route path="/blocks" component={Blocks} />
      <Route path="/block/:id" component={Block} />
      <Route path="/about" component={About} />
    </Route>
  );
};
