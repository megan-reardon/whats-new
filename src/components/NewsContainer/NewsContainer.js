import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = (props) => {
  const newsSelection = props.news.map(article => {
    return <NewsArticle
      key={article.id}
      headline={article.headline}
      img={article.img}
      description={article.description}
      url={article.url}
    />
  })
  return (
    <section className='news-container'>
      {newsSelection}
    </section>
  )
}

export default NewsContainer;
