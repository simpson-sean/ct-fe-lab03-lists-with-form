import React, { Component } from 'react';
import Controls from '../components/articles/Controls.jsx';
import ArticleList from '../components/articles/ArticlesList.jsx';
import { fetchArticles, fetchArticlesByAuthor } from '../services/newsAPI.js';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [], 
        topic: '',
    };

    async componentDidMount() {
        const articles = await fetchArticles();
        this.setState({ articles, loading: false});
    }
    
    handleTopicSearch = (event) => {
        this.setState({ topic: event.target.value });
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const articles = await fetchArticlesByAuthor(this.state.topic);
        this.setState({ articles, loading: false });
    };
    
    render() {
        const { loading, articles, topic } = this.state;

        if (loading) return <p>Loading...</p>;

        return (
            <>
                <Controls
                  topic={topic}
                  onTopicSearch={this.handleTopicSearch}
                  onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles} />
            </>

        );
    }
}
