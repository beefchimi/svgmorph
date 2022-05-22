import type {ReactNode} from 'react';

import {beefchimiImgUrl} from '../../assets/media';
import {Typography, TypographyAlign, TypographySpacing} from '../Typography';

import styles from './Main.module.css';

export interface MainProps {
  children?: ReactNode;
}

export function Main({children}: MainProps) {
  const childrenMarkup = children ? (
    <div className={styles.Children}>{children}</div>
  ) : null;

  return (
    <main className={styles.Main}>
      <Typography
        align={TypographyAlign.Center}
        spacing={TypographySpacing.Loose}
      >
        <div className={styles.Beefchimi}>
          <img
            src={beefchimiImgUrl}
            className={styles.Thumbnail}
            alt="Take my to your leader"
          />
        </div>

        <h1 className={styles.Title}>Prototype for SVG path animations</h1>
      </Typography>

      {childrenMarkup}
    </main>
  );
}
