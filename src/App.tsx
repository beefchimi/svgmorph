import {Frame, Header, Main, Footer, SvgWave} from './components';

import styles from './App.module.css';

export default function App() {
  return (
    <Frame>
      <Header />

      <Main>
        <div className={styles.SvgWaveWrapper}>
          <SvgWave id="App-Frame-Main-SvgWave" animate />
        </div>
      </Main>

      <Footer>
        <p>&copy; Curtis Dulmage&trade; &mdash; 2020&ndash;2024</p>
      </Footer>
    </Frame>
  );
}
