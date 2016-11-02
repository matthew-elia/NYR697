import React, { Component, PropTypes } from 'react';
// Import Style
import styles from './LoginFormWidget.css';

export class LoginFormWidget extends Component {
  
  // addPost = () => {
  //   const nameRef = this.refs.name;
  //   const titleRef = this.refs.title;
  //   const contentRef = this.refs.content;
  //   if (nameRef.value && titleRef.value && contentRef.value) {
  //     this.props.addPost(nameRef.value, titleRef.value, contentRef.value);
  //     nameRef.value = titleRef.value = contentRef.value = '';
  //   }
  // };

  render() {
    const cls = `${styles.form} ${(this.props.showAddPost ? styles.appear : '')}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Login</h2>
          <input placeholder="email" className={styles['form-field']} ref="name" type="email"/>
          <input placeholder="password" className={styles['form-field']} ref="title" type="password"/>
          <a className={styles['log-in-button']} href="#" onClick={this.logInUser}><FormattedMessage id="submit" /></a>
        </div>
      </div>
    );
  }
}

LoginFormWidget.propTypes = {
  logInUser: PropTypes.func.isRequired,
  showAddPost: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(LoginFormWidget);
