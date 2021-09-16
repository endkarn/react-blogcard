
import React, { Component } from 'react';
import './App.css';

import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utills'

class App extends Component {
  state = {
    showBlog: true,
    blogArray : [
      {
        id: 1,
        title: 'first book edition',
        description: 'the book from nowhere',
        likeCount: 0
      },
      {
        id: 2,
        title: 'first book edition',
        description: 'the book from nowhere',
        likeCount: 1
      },
      {
        id: 3,
        title: 'first book edition',
        description: 'the book from nowhere',
        likeCount: 2
      }
    ]
  }


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

  onLikeBtnClick = (position) => {
    // alert('Like Clicked at POS : ' + position)
    const updatedBlogList = this.state.blogArray
    const updatedBlogObject = updatedBlogList[position]

    updatedBlogObject.likeCount++
    updatedBlogList[position] = updatedBlogObject

    this.setState({blogArray:updatedBlogList})

    console.log(updatedBlogObject)
  }

  render() {
    const isEmptyArray = isArrayEmpty(this.state.blogArray)

    if (!isEmptyArray){
      this.blogCard = this.state.blogArray.map((item, pos) => {
        return (
          <BlogCard key={pos} title={item.title} description={item.description} blogId={item.id} position={pos} likeCount={item.likeCount} onLikeBtnClick={() => {this.onLikeBtnClick(pos)}}/>
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
