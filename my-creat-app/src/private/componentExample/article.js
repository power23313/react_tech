import React from "react";

function Article(props) {
    const {title, author} = props;

    const articleStyle = {
        border: '1px solid #ccc',
        padding: '5px',
        borderRadius: '5px',
        marginBottom: '20px'
    };

    return (
        <div style={articleStyle}>
            <h2>{title}</h2>
            <p>Written by: {author}</p>
        </div>
    )
}

export default Article;