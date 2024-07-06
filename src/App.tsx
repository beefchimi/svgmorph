import {useState} from 'react';

import {Frame, Header, Main, Footer, SvgWave} from './components';

import styles from './App.module.css';

// const NAV_ITEMS = ['One', 'Two', 'Three'];

export default function App() {
  const [animate, setAnimate] = useState(false);

  function toggleAnimation() {
    setAnimate((current) => !current);
  }

  return (
    <Frame>
      <Header navItems={undefined} />

      <Main>
        <div className={styles.SvgWaveWrapper}>
          <SvgWave id="App-Frame-Main-SvgWave" animate={animate} />
        </div>

        <button type="button" onClick={toggleAnimation}>
          Toggle Animation
        </button>
      </Main>

      <Footer>
        <p>&copy; Curtis Dulmage&trade; &mdash; 2020&ndash;2024</p>
      </Footer>
    </Frame>
  );
}
