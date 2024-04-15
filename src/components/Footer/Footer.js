import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      All character assets taken from{' '}
      <a className={styles.footerlink}
        href="https://www.openpeeps.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Peepsf
      </a>
      , by Pablo Stanley
    </footer>
  );
};

export default Footer;
