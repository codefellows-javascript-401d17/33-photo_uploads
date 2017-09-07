import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import appCreateStore from '../../lib/app-create-store.js';
import LandingContainer from '../landing-container';
import DashboardContainer from '../dashboard-container';

let store = appCreateStore();

class App extends React.Component {
  render() {
    return(
      <div className='cfGram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>cfgram</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/login'>login</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={LandingContainer} />
              <Route exact path='/welcome' component={DashboardContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
