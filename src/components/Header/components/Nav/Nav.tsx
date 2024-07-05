import {useState} from 'react';
import {clx} from 'beeftools';

import styles from './Nav.module.css';

export interface NavProps {
  items: string[];
}

function EmptyState() {
  return (
    <div className={styles.NavEmptyState}>
      <span role="img" aria-label="Navigation unavailable">
        ☠️
      </span>
    </div>
  );
}

export function Nav({items = []}: NavProps) {
  const [menuActive, setMenuActive] = useState(false);

  function handleToggleMenu() {
    setMenuActive(!menuActive);
  }

  const menuClx = clx(styles.Menu, {
    [styles.menuActive]: menuActive,
  });

  const itemsMarkup = items.map((item, index) => (
    <li key={`${item}-${index}`} className={styles.Item}>
      <span className={styles.Link}>{item}</span>
    </li>
  ));

  return (
    <nav className={styles.Nav}>
      <button
        type="button"
        className={styles.Action}
        onClick={handleToggleMenu}
      >
        <span role="img" aria-label="Navigation unavailable">
          {menuActive ? '📖' : '📘'}
        </span>
      </button>

      <ul className={menuClx}>{itemsMarkup}</ul>
    </nav>
  );
}

Nav.EmptyState = EmptyState;
