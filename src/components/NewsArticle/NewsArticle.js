import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <section className='news-article'>
      <img src={props.img} alt={props.headline}/>
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <a href={props.url}>Article</a>
    </section>
  )
}

export default NewsArticle;
