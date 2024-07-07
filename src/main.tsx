import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './styles/reset.css';
import './styles/root.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('ReactRoot')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
