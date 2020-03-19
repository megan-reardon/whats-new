import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search for news article here'
          name='search'
          value={this.state.search}
          onChange={event => this.handleChange(event)}
        />

        <button className='search-btn' type='button' onClick={() => this.props.filterNews(this.state.search)}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm;
