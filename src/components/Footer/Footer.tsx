import type {ReactNode} from 'react';
import {clx} from 'beeftools';

import IconInstagram from '../../assets/icons/instagram.svg?react';
import IconTikTok from '../../assets/icons/tiktok.svg?react';
import IconTwitch from '../../assets/icons/twitch.svg?react';

import styles from './Footer.module.css';

export interface FooterProps {
  children: ReactNode;
  socialLinks?: boolean;
}

export function Footer({children, socialLinks = false}: FooterProps) {
  const footerClx = clx(styles.Footer, {
    [styles.socialLinks]: socialLinks,
  });

  const socialMarkup = socialLinks ? (
    <ul className={styles.SocialList}>
      <li className={styles.SocialItem}>
        <div
          className={clx('icon-wrapper', styles.SocialIcon, styles.instagram)}
        >
          <IconInstagram />
        </div>
      </li>

      <li className={styles.SocialItem}>
        <div className={clx('icon-wrapper', styles.SocialIcon, styles.tiktok)}>
          <IconTikTok />
        </div>
      </li>

      <li className={styles.SocialItem}>
        <div className={clx('icon-wrapper', styles.SocialIcon, styles.twitch)}>
          <IconTwitch />
        </div>
      </li>
    </ul>
  ) : null;

  return (
    <footer className={footerClx}>
      <div className={styles.Children}>{children}</div>
      {socialMarkup}
    </footer>
  );
}
