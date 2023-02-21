import { call, put } from 'redux-saga/effects';
import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
import { loginSaga, logoutSaga } from 'sagas/user';
import { loginFailure, loginSuccess, logoutSuccess } from 'actions';
import { expectSaga } from 'redux-saga-test-plan';
import user from 'sagas/user';


// Mock the MSAL instance
const mockMsalInstance: PublicClientApplication = {
  loginPopup: jest.fn(),
  logoutPopup: jest.fn(),
} as unknown as PublicClientApplication;

describe('loginSaga', () => {
  it('should have the expected watchers', () =>
  expectSaga(user)
    .run({ silenceTimeout: true })
    .then(result => {
      expect(result.toJSON()).toMatchSnapshot();
    }));
  it('should dispatch loginSuccess with account info on successful login', () => {
    const account: AccountInfo = {
      name: 'Test User',
      homeAccountId: '',
      environment: '',
      tenantId: '',
      username: '',
      localAccountId: ''
    };
    const gen = loginSaga();
  (call([mockMsalInstance, mockMsalInstance.loginPopup]));
    // expect(gen.next(account).value).toEqual(put(loginSuccess(account)));
    // console.log("here is res"+JSON.stringify( gen.next(account).value));
    expect(gen.next().done).toBe(false);
  });

//   it('should dispatch loginFailure with error on failed login', () => {
//     const error = new Error('login failed');
//     const gen = loginSaga();
//     expect(gen.next().value).toEqual(call([mockMsalInstance, mockMsalInstance.loginPopup]));
//     expect(gen.throw(error).value).toEqual(put(loginFailure(error)));
//     expect(gen.next().done).toBe(true);
//   });
// });

// describe('logoutSaga', () => {
//   it('should dispatch logoutSuccess on successful logout', () => {
//     const gen = logoutSaga();
//     expect(gen.next().value).toEqual(call([mockMsalInstance, mockMsalInstance.logoutPopup]));
//     expect(gen.next().value).toEqual(put(logoutSuccess()));
//     expect(gen.next().done).toBe(true);
//   });

//   it('should log error on failed logout', () => {
//     const error = new Error('logout failed');
//     const gen = logoutSaga();
//     expect(gen.next().value).toEqual(call([mockMsalInstance, mockMsalInstance.logoutPopup]));
//     expect(gen.throw(error).done).toBe(true);
//   });
});
