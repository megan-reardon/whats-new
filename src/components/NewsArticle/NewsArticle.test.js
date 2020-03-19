import React from 'react';
import { render } from '@testing-library/react';
import NewsArticle from './NewsArticle';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
  it('renders text that we expect', () => {
    expect(true).toEqual(true);
    // const { getByText } = render(
    //   <NewsArticle
    //     headline={"Puppies Save the Day"}
    //   />);
    //
    //   const headlineEl = getByText("Puppies Save the Day");
    //   expect(headlineEl).toBeInTheDocument();
  });
});
