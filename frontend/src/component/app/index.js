import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appStoreCreate from '../../lib/app-create-store.js';
import LandingContainer from '../landing-container';

let store = appStoreCreate();

class App extends React.Component {
  render() {
    return (
      <div className='cfgram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>Welcome</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/login'>login</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcom/:auth' component={LandingContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
