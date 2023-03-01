import { loginRequest, logoutRequest } from 'actions/user';

describe('actions/user', () => {
  it('login', () => {
    expect(loginRequest()).toMatchSnapshot();
  });

  it('logOut', () => {
    expect(logoutRequest()).toMatchSnapshot();
  });
});
