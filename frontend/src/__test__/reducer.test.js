import {tokenSet, signupRequest} from '../action/auth-actions.js';
import authReducer from '../reducer/auth.js';
import superagent from 'superagent';
import thunk from '../lib/redux-thunk.js';
import appCreateStore from '../lib/app-create-store';
import dotenv from 'dotenv';

describe('Reducers', () => {
  test('tokenSet reducer', () => {
    const action = tokenSet('cooltoken');
    const resultToken = authReducer( [] , action);
    expect(resultToken).toEqual('cooltoken');
  })
  test('invalid tokenSet reducer', () => {
    const invalidToken = authReducer([], {type: 'TOKEN_SET', payload: null});
    expect(invalidToken).toEqual(null);
  })
  test('valid signup request', () => {
    const store = appCreateStore();
    const user = { username: 'asdf', email:'asdf@gmail.com', password: 'fdsaa'}
    const action = signupRequest(user);
    const response = action(store.dispatch, store.getState);
    console.log(response);

  })
})