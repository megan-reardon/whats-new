import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <section className='news-article'>
      <img src={props.img} alt={props.headline}/>
      <h3>{props.headline}</h3>
      <p>{props.description}</p>
      <a href={props.url}>Link to article</a>
    </section>
  )
}

export default NewsArticle;
