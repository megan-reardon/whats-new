import React from 'react';
import NewsArticle from './NewsArticle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NewsArticle', () => {
  it('renders text that we expect', () => {
    const { getByText, getByAltText } = render(
      <NewsArticle
        headline={"Puppies Save the Day"}
        description={"Puppies are the best!"}
        url={"https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html"}
      />);

      const headlineEl = getByText("Puppies Save the Day");
      const descriptionEl = getByText("Puppies are the best!");
      const urlEl = getByText("Link to article");
      const imageText = getByAltText("Puppies Save the Day")
      expect(headlineEl).toBeInTheDocument();
      expect(descriptionEl).toBeInTheDocument();
      expect(urlEl).toBeInTheDocument();
      expect(imageText).toBeInTheDocument();
  });
});
