import React from 'react';
import * as styles from './Newsletter.module.scss';

export default function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterBg}>
        <h2 className={styles.newsletterHeader}>
         Subscribe to the newsletter
        </h2>
        <p className={styles.signup}>Subscribe to get my latest content by email.</p>
        <form className={styles.form}>
          <label htmlFor="email-address" className={styles.emailLabel}>
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={styles.emailInput}
            placeholder="Enter your email"
          />
          <div className={styles.btnContainer}>
            <button type="submit" className={styles.btn}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
