import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';
import styles from './Home.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <div>
        <img src="./static/images/venditan-logo.png" alt="Venditan" />
      </div>
      <div>
        <Link to={routes.TASKS}>
          <button type="button">Add new task</button>
        </Link>
      </div>
    </div>
  );
}
