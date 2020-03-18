import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import Menu from '../Menu/Menu';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: {
        local: local,
        entertainment: entertainment,
        health: health,
        science: science,
        technology: technology,
        selectCategory: 'technology'
      }
    }
  };

  filterCategory = (event) => {
      this.setState({
        news: {
          local: local,
          entertainment: entertainment,
          health: health,
          science: science,
          technology: technology,
          selectCategory: [event.target.id]
        }
      })
  }

  render () {
    {console.log(this.state.news[this.state.news.selectCategory])}
    return (
      <div className="app">
        <Menu filterCategory={this.filterCategory}/>
        <NewsContainer
         news={this.state.news[this.state.news.selectCategory]}/>
      </div>
    );
  }
}

export default App;
