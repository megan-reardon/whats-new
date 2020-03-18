import React from 'react';
import './Menu.css'

const Menu = (props) => {
  //   super();
  //   this.state = {
  //     newsType: null
  //   }
  // }
  //
  // updateNewsCategory = (event) => {
  //   this.setState({newsType: event.target.id})
  // }
  //
  // render() {
    return (
      <section>
        <button id='local' onClick={props.filterCategory}>Local News</button>
        <button id='entertainment' onClick={props.filterCategory}>Entertainment</button>
        <button id='health' onClick={props.filterCategory}>Health</button>
        <button id='science' onClick={props.filterCategory}>Science</button>
        <button id='technology' onClick={props.filterCategory}>Technology</button>
      </section>
    )
  }

export default Menu;
