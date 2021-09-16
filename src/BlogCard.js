import React from "react";

import { dumpLogs } from "./Utills";

const BlogCard = (properties) => {

    dumpLogs(properties)

    return (
        <div className="BlogCard" id={properties.id}>
            <h3>{properties.title}</h3>
            <p>{properties.description}</p>
        </div>
    )
}

export default BlogCard