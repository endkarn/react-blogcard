import React, { Component } from "react";

import { dumpLogs } from "./Utills";

// import './BlogCard.css'
import classes from './BlogCard.module.css'

class BlogCard extends Component {
    state = {
        likeCount: 0
    }
    
    BtnClickLike = () => {
        // this.setState(
        //     {likeCount: this.state.likeCount + 1}
        // )
        
        this.setState((prevState, prevProp) => {
            return {likeCount : prevState.likeCount + 1}
        })

        console.log(this.state.likeCount)
    }

    render(){
        dumpLogs(this.props)

        return(
            <div className={classes.NewBlogCard} id={this.props.blogId}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>

            <p>Like Count: <span className={classes.LikeCount}>{this.props.likeCount}</span></p>
            <button onClick={this.props.onLikeBtnClick}>Like</button>
        </div>
        )
    }
}

export default BlogCard 