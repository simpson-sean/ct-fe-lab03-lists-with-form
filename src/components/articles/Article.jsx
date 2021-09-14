import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, description }) => (
    <figure>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
    </figure>
)

Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Article;
