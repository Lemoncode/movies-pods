import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from './history';
import { SceneMovieList, SceneMovieDetails, SceneMovieCards } from './scenes';
import { store } from './store';
import { switchRoutes } from './common-app/router';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
<<<<<<< HEAD
      <Route exact={true} path="/" component={SceneMovieList} /> 
      <Route exact={true} path="/movie-details/:id" component={SceneMovieDetails} />
      <Route exact={true} path="/movie-cards" component={SceneMovieCards}/>
=======
        <Route exact={true} path={switchRoutes.moviesList} component={SceneMovieList} />
        <Route exact={true} path={switchRoutes.movieDetail} component={SceneMovieDetails} />
>>>>>>> 6b9b9d8f06ce5c1af61a82785b054db72a68abd0
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
