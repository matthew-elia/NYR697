import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Navbar.css';

export function Navbar(props, context) {

  return (
    <div className={styles.navbar}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={styles['sign-in-button']} href="#" onClick={props.signInUser}><FormattedMessage id="Sign In" /></a>
            : null
        }
        {
          context.router.isActive('/', true)
          ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
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
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Navbar;
