import React from 'react';
import * as styles from './Newsletter.module.scss';

export default function NewsLetter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterBg}>
        <h2 className={styles.newsletterHeader}>Subscribe to my newsletter</h2>
        <p className={styles.signup}>
          Subscribe to get my latest content by email.
        </p>
        <form
          className={styles.form}
          name="newsletter"
          action="/pages/subscribe-success"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="newsletter" />
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
