import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import LayoutPage from './routes/LayoutTestPage';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LayoutPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
