import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/pages/home';
import Header from './components/header';
import Footer from './components/footer';
import TrelloProvider from './state/context/trello-context';
import { COLORS } from './constants';
import BoardPage from './components/pages/board-page';

const SAppContainer = styled.div`
  position: relative;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  background: ${COLORS.background};
`;
const SBodyContainer = styled.div`
  position: relative;
  margin-top: 4rem;
  padding-top: 1rem;
`;

const App = () => {
  return (
    <TrelloProvider>
      <SAppContainer>
        <BrowserRouter>
          <Header />
          <SBodyContainer>
            <Switch>
              <Route path="/:id" component={BoardPage} />
              <Route exact path="/" component={Home} />
            </Switch>
          </SBodyContainer>
        </BrowserRouter>
        <Footer />
      </SAppContainer>
    </TrelloProvider>
  );
};

export default App;
