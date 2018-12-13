import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from './history';
import { SceneMovieList, SceneMovieDetails } from './scenes';
import { store } from './store';
import { switchRoutes } from './common-app/router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path={switchRoutes.moviesList} component={SceneMovieList} />
        <Route exact={true} path={switchRoutes.movieDetail} component={SceneMovieDetails} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
