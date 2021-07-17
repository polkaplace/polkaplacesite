import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Windmill } from '@windmill/react-ui';
import ppTheme from './styles/windmillTheme.js';

// Store
import store from './state';

// React
import Web3ReactProviders from './components/web3reactproviders';
import Web3ReactManager from './components/web3reactmanager';

// Updaters
import ApplicationUpdater from './state/application/updater';
import PolypunksUpdater from './state/polygonpunks/updater';

// Pages
import Index from './pages/Index';
import HowToMint from './pages/HowToMint'
// import GetPolygonPunks from './pages/GetPolyPunks';
// import Attributes from './pages/Attributes';
// import MyPolygonPunks from './pages/MyPolyPunks';
// import Punk from './pages/Punk';
// import Punks from './pages/Punks';
// import Support from './pages/Support';

// Notifications
import Notifications from './components/notifications/Notifications';

// Icons
import discord from './components/layout/assets/discord';
import twitter from './components/layout/assets/twitter';
import telegram from './components/layout/assets/telegram';
import medium from './components/layout/assets/medium';

const history = createBrowserHistory();

let menu = {
  left: [],
  right: [],
  mainMenu: [
    {
      name: 'How to mint',
      link: '/how-to-mint',
    },
    /*
    {
      name: 'My PolygonPunks',
      subname: '',
      link: '/my',
    },
	*/
  ],
  social: [
    {
      name: 'PolkaPlace Twitter',
      icon: twitter,
      href: 'https://twitter.com/Polka_Party',
    },
    {
      name: 'PolkaPlace Telegram',
      icon: telegram,
      href: 'https://t.me/PolkaParty',
    },
    {
      name: 'PolkaPlace Medium',
      icon: medium,
      href: 'https://polkaparty.medium.com/',
    },
  ],
};

export function App() {
  return (
    <Web3ReactProviders>
      <Web3ReactManager>
        <Router history={history}>
          <Provider store={store}>
            <ApplicationUpdater />
            <PolypunksUpdater />

            <Windmill theme={ppTheme}>
              <Route
                exact
                path='/'
                component={(props) => {
                  return <Index menu={menu} {...props} />;
                }}
              />

              <Route
                exact
                path='/how-to-mint'
                component={(props) => {
                  return <HowToMint menu={menu} {...props} />;
                }}
              />

              <Notifications
                notifications={[]}
                position='bottom-right'
                autoDeleteTime={2000}
              />
            </Windmill>
          </Provider>
        </Router>
      </Web3ReactManager>
    </Web3ReactProviders>
  );
}
export default App;
