import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import articles from '../public/bundle-api.json';
import App from './App';

describe('App', () => {
  let container: HTMLElement;

  beforeEach(async () => {
    container = document.createElement('div');
  });

  it('should render articles', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => articles,
    } as Response);
    await act(async () => render(<App />, container));

    expect(container.innerHTML).toMatchSnapshot();
  });

  it('should render an error', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Something went wrong.'));
    await act(async () => render(<App />, container));

    expect(container.querySelector('.alert')?.textContent).toBe('Something went wrong.');
  });
});
