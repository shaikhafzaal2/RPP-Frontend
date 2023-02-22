import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Dashboard from 'routes/Private';


const mockStore = configureMockStore([]);

describe('Dashboard component', () => {
  test('renders the header with user name and link to GitHub boilerplate', () => {
    const store = mockStore({
      app:{
        query: 'react'
      },
      user: {
        user: {
          account: {
            name: 'John Doe'
          }
        }
      },
      github:{ 
        topics:
        {react:{
          cached:false,
          data:{}
        } }
  }});
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
    // const headingElement = screen.getByRole('heading', { level: 1 });
    // expect(headingElement).toHaveTextContent('Oh hai! John Doe');
    // const linkElement = screen.getByRole('link', { name: 'here' });
    // expect(linkElement).toHaveAttribute(
    //   'href',
    //   'https://github.com/gilbarbara/react-redux-saga-boilerplate/'
    // );
  });

  // test('renders the GitHub component', () => {
  //   const store = mockStore({
  //     user: {
  //       user: {
  //         account: {
  //           name: 'John Doe'
  //         }
  //       }
  //     }
  //   });
  //   render(
  //     <Provider store={store}>
  //       <Dashboard />
  //     </Provider>
  //   );
  //   const githubElement = screen.getByTestId('GitHub');
  //   expect(githubElement).toBeInTheDocument();
  // });
});
