import React from "react";

import { dumpLogs } from "./Utills";

// import './BlogCard.css'
import classes from './BlogCard.module.css'

const BlogCard = (properties) => {

    dumpLogs(properties)

    return (
        <div className={classes.NewBlogCard} id={properties.id}>
            <h3>{properties.title}</h3>
            <p>{properties.description}</p>
        </div>
    )
}

export default BlogCard 