import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import appStoreCreate from '../../lib/app-create-store.js';
import LandingContainer from '../landing-container';
import ProfileContainer from '../profile-container'
import * as util from '../../lib/util.js';
import { tokenSet } from '../../action/auth-actions.js';

let store = appStoreCreate();

class App extends React.Component {
  componentDidMount() {
    let token = util.readCookie('X-Sluggram-Token');
    if (token) {
      this.props.tokenSet(token);
    }
  }

  render() {
    return (
      <div className='cfgram'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <header>
                <h1>cfgram</h1>
                <nav>
                  <ul>
                    <li><Link to='/welcome/signup'>signup</Link></li>
                    <li><Link to='/welcome/login'>login</Link></li>
                    <li><Link to='/profile'>profile</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path='/welcome/:auth' component={LandingContainer} />
              <Route exact path='/profile' component={ProfileContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
})

let mapDispatchToProps = (dispatch) => ({
  tokenSet: (token) => dispatch(tokenSet(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
