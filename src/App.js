
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utills'

class App extends React.Component {
  state = {
    showBlog: true
  }

  blogArray = [
    {
      id: 1,
      title: 'first book edition',
      description: 'the book from nowhere'
    },
    {
      id: 2,
      title: 'first book edition',
      description: 'the book from nowhere'
    },
    {
      id: 3,
      title: 'first book edition',
      description: 'the book from nowhere'
    }
  ]


  blogCard = ''

  // blogCard = isArrayEmpty(this.blogArray) ? [] : this.blogArray.map((item, pos) => {
  //   return (
  //     <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>
  //   )
  // })


  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlog;
    // this.setState({
    //   showBlog: updatedState
    // })

    this.setState((prevState, prevProps) => {
      return {showBlog: !prevState.showBlog}
    })
  }

  render() {
    const isEmptyArray = isArrayEmpty(this.blogArray)

    if (!isEmptyArray){
      this.blogCard = this.blogArray.map((item, pos) => {
        return (
          <BlogCard key={pos} title={item.title} description={item.description} id={item.id}/>
        )
      })
    }

    return(
      <div className="App">
      <button onClick={this.onHideBtnClick}>{this.state.showBlog ? 'Hide List' : 'Show List'}</button>
      <br></br>
      {
        this.state.showBlog ? this.blogCard : null
      }
    </div> 
    )
  }
}

export default App;
