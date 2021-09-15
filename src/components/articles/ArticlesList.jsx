import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article'

const ArticleList = ({ articles }) => (
    <ul aria-label="articles">
        {articles?.map(({ title, author, description }, index) => (
            <li key={`${title}-${author}-${index}`}>
                <Article
                    title={title}
                    author={author}
                    description={description}
                />
            </li>
        ))}
    </ul>
);

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};

export default ArticleList;