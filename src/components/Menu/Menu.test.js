import React from 'react';
import Menu from './Menu';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

//
describe('Menu', () => {
  it('should render buttons', () => {
    const { getByText } = render(<Menu />)

    const localButtonEl = getByText("Local News");
    const entertainmentButtonEl = getByText("Entertainment");
    const healthButtonEl = getByText("Health");
    const scienceButtonEl = getByText("Science");
    const technologyButtonEl = getByText("Technology");

    expect(localButtonEl).toBeInTheDocument();
    expect(entertainmentButtonEl).toBeInTheDocument();
    expect(healthButtonEl).toBeInTheDocument();
    expect(scienceButtonEl).toBeInTheDocument();
    expect(technologyButtonEl).toBeInTheDocument();
  });

  it('should call the filterCategory method on button click', () => {
    const mockFilterCategory = jest.fn();

    const { getByText } = render(<Menu
      filterCategory={mockFilterCategory} />);

    fireEvent.click(getByText("Local News"));
    fireEvent.click(getByText("Entertainment"));
    fireEvent.click(getByText("Health"));
    fireEvent.click(getByText("Science"));
    fireEvent.click(getByText("Technology"));

    expect(mockFilterCategory).toHaveBeenCalledTimes(5);
  })
})
