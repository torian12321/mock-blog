import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CommentsProvider } from 'apiContext';
import Layout from 'ui/layout';
import { ViewHome } from 'views/home';
import { ViewArticle } from 'views/article';
import 'assets/styles/index.scss';

const App = () => (
  <Router>
    <CommentsProvider>
      <Layout>

        <Switch>
          <Route exact path="/">
            <ViewHome />
          </Route>
          <Route path="/article/:postId">
            <ViewArticle />
          </Route>
          <Route path="*">
            <ViewHome />
          </Route>
        </Switch>

      </Layout>
    </CommentsProvider>
  </Router>
);

export default App;
