import {Frame, Header, Main, Footer} from './components';

export function App() {
  return (
    <Frame>
      <Header />

      <Main>
        <p>App goes here.</p>
      </Main>

      <Footer>
        <p>&copy; Curtis Dulmage&trade; &mdash; 2020&ndash;2022</p>
      </Footer>
    </Frame>
  );
}
