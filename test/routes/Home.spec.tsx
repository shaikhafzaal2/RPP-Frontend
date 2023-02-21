import React from 'react';
import Login from 'routes/Login';



import { fireEvent, render, screen } from 'test-utils';

const mockDispatch = jest.fn();

describe('Home', () => {
  it('should render properly', () => {
    render(<Login />);
    expect(screen.getByTestId('Home')).toMatchSnapshot();
  });

  // it('should handle clicks', () => {
  //   render(<Home />, { mockDispatch });
  //   fireEvent.click(screen.getByTestId('Login'));

  //   expect(mockDispatch).toHaveBeenCalledWith({
  //     type: 'USER_LOGIN_REQUEST',
  //   });
  // });
});
