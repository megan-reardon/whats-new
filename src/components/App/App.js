import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import NewsArticle from '../NewsArticle/NewsArticle';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
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
        selectCategory: science
      }
    }
  };

  filterCategory = (event) => {
    const chosenCategory = this.state.news[event.target.id]
    this.setState({
      news: {
        local: local,
        entertainment: entertainment,
        health: health,
        science: science,
        technology: technology,
        selectCategory: chosenCategory
      }
    })
  }

  filterNews = (searchedNews) => {
    let filteredNews = [];
    let allNews = [local, technology, health, science, entertainment];
    allNews.forEach(category => {
      category.forEach(article => {
        if(article.headline.includes(searchedNews)) {
          filteredNews.push(article)
        }
      })
    })
    this.setState({
      news: {
        local: local,
        entertainment: entertainment,
        health: health,
        science: science,
        technology: technology,
        selectCategory: filteredNews
      }
    })
  }

  render () {
    return (
      <div className="app">
        <Menu filterCategory={this.filterCategory}/>
        <NewsContainer
         news={this.state.news.selectCategory}/>
         <SearchForm filterNews={this.filterNews}/>
      </div>
    );
  }
}

export default App;
