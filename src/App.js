import React from 'react';
import { ChallengesProvider } from './contexts/ChallengesContext';
import { CountdownProvider } from './contexts/CountdownContext';
import UserProvider from './contexts/UserContext';

import Routes from './routes';

function App() {
  return (
    <ChallengesProvider>
      <UserProvider>
        <CountdownProvider>
          <Routes />
        </CountdownProvider>
      </UserProvider>
    </ChallengesProvider>
  );
}

export default App;
