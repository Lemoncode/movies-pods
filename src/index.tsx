import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from './history';
import { SceneMovieList, SceneMovieDetails } from './scenes';
import { EditMovieContainer } from "./scenes/movies/edit";
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact={true} path="/" component={SceneMovieList} />
        <Route exact={true} path="/movie-details/:id" component={SceneMovieDetails} />
        <Route exact={true} path="/movies/edit/:id" component={EditMovieContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
