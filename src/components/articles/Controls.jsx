import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ topic, onTopicSearch, onSubmit }) => (
    <form onSubmit={onSubmit} data-testid="news-form">
        <label htmlFor="topic">Topic Search</label>
        <input
            id="topic"
            type="text"
            value={topic}
            onChange={onTopicSearch}
        />
        <button aria-label='find-articles'>Search Articles</button>
    </form>
);

Controls.propTypes = {
    topic: PropTypes.string.isRequired,
    onTopicSearch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired, 
};

export default Controls;