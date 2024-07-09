import React from "react";
import Article from "../private/componentExample/article";

function BlogApp() {
    return (
        <div>
            <h1>Welcome to my blog</h1>
            <Article title="first" author="Allen"/>
            <Article title="second" author="Sam"/>
        </div>
    )
}

export default BlogApp;