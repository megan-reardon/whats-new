import React from 'react';
import NewsContainer from './NewsContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsContainer', () => {
  it('renders text that we expect', () => {
    const { getByText } = render(
      <NewsContainer
        headline={"Puppies Save the Day"}
    />);

    const headlineEl = getByText("Puppies Save the Day");
    expect(headlineEl).toBeInTheDocument();

  })
})
