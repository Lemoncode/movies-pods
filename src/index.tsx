import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from './history';
import { SceneMovieList, SceneMovieDetails, SceneMovieCards } from './scenes';
import { store } from './store';
import { switchRoutes } from './common-app/router';
import ErrorBoundary from 'react-error-boundary';
import { ErrorBoundaryComponent } from './common-app/components/error-boundary.component';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
          <Route exact={true} path={switchRoutes.moviesList} component={SceneMovieList} />
          <Route exact={true} path={switchRoutes.movieDetail} component={SceneMovieDetails} />
          <Route exact={true} path={switchRoutes.movieCards} component={SceneMovieCards} />
        </ErrorBoundary>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
