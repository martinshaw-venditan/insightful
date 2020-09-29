import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';
import styles from './Navigation.css';

export default function Navigation(): JSX.Element {
  return (
    <nav className={styles.main}>
      <Link to={routes.TASKS}>
        <button type="button">Tasks</button>
      </Link>
      <Link to={routes.TASK_SPRINTS}>
        <button type="button">Task Sprints</button>
      </Link>
      <Link to={routes.UTILITIES}>
        <button type="button">Utilities</button>
      </Link>
    </nav>
  );
}
