import React from 'react';
import './Menu.css';
{/*import health from '../images/health.svg';*/}

const Menu = (props) => {
    return (
      <section className='menu'>
        <h2>What's New?</h2>
        <nav>
          <button id='local'
            onClick={props.filterCategory}>
            {/*<img src={health} />*/}
            Local News
            </button>
          <button id='entertainment' onClick={props.filterCategory}>Entertainment</button>
          <button id='health' onClick={props.filterCategory}>Health</button>
          <button id='science' onClick={props.filterCategory}>Science</button>
          <button id='technology' onClick={props.filterCategory}>Technology</button>
        </nav>
      </section>
    )
  }

export default Menu;
