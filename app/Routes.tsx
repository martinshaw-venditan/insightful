/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TasksPage from './containers/TasksPage';
import TaskSprintsPage from './containers/TaskSprintsPage';
import UtilitiesPage from './containers/UtilitiesPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.TASKS} component={TasksPage} />
        <Route path={routes.TASK_SPRINTS} component={TaskSprintsPage} />
        <Route path={routes.UTILITIES} component={UtilitiesPage} />

        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
