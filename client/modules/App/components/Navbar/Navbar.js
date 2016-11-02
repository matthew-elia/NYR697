import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Navbar.css';

export function Navbar(props, context) {

  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" >69/7</Link>
        </h1>
        {
          context.router.isActive('/', true)
          ? <Link to="/login" ><a className={styles['log-in-button']} onClick={props.toggleLogIn}>Log In</a></Link>
          : null
        }
        {
          context.router.isActive('/admin', true)
          ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}>Add Post</a>
          : null
        }
      </div>
    </div>
  );
}

Navbar.contextTypes = {
  router: React.PropTypes.object,
};

Navbar.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Navbar;
