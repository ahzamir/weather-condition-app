import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../../redux/configureStore';

import Countries from '../../../pages/HomePage/Countries';

describe('Testing Countries component', () => {
  render(
    <Provider store={store}>
      <Countries />
    </Provider>,
  );
  test('Testing the dom for success rendering elements on Countries component', () => {
    expect(screen.queryByTestId('countriesContent')).toBeInTheDocument();
  });

  test('Testing the dom for non existing elemente on the page after rendering', () => {
    expect(screen.queryByTestId('nothing')).not.toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Countries page="just for test">Countries</Countries>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
