import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';
import Router from 'router';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Router />
  </BrowserRouter>
);

export default App;
