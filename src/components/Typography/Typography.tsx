import type {ReactNode} from 'react';
import {clx, vrx} from 'beeftools';

import {TypographyAlign, TypographySpacing} from './types.ts';
import styles from './Typography.module.css';

export interface TypographyProps {
  children: ReactNode;
  align?: TypographyAlign;
  spacing?: TypographySpacing;
}

export function Typography({
  children,
  align = TypographyAlign.Left,
  spacing = TypographySpacing.Base,
}: TypographyProps) {
  const typographyClx = clx(styles.Typography, {
    [vrx('align', align, styles)]: Boolean(align),
    [vrx('spacing', spacing, styles)]: Boolean(spacing),
  });

  return <div className={typographyClx}>{children}</div>;
}
