import {clx} from 'beeftools';

import {SvgReactLogo} from '../../../../assets/svg';
import styles from './Logo.module.css';

export interface LogoProps {
  animate?: boolean;
}

export function Logo({animate = false}: LogoProps) {
  const logoClx = clx(styles.Logo, {
    [styles.animate]: animate,
  });

  return (
    <div className={logoClx}>
      <SvgReactLogo />
    </div>
  );
}
