import React, { Component } from 'react';
import Controls from '../components/articles/Controls.jsx';
import ArticleList from '../components/articles/ArticlesList.jsx';
import { fetchArticles, fetchArticlesBySearch } from '../services/newsAPI.js';

export default class NewsContainer extends Component {
    state = {
        loading: true,
        articles: [], 
        search: '',
    };

    async componentDidMount() {
        const articles = await fetchArticles();
        this.setState({ articles, loading: false});
    }
    
    handleTopicSearch = (event) => {
        this.setState({ search: event.target.value });
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const articles = await fetchArticlesBySearch(this.state.search);
        this.setState({ articles, loading: false });
    };
    
    render() {
        const { loading, articles, search } = this.state;

        if (loading) return <p>Loading...</p>;

        return (
            <>
                <Controls
                  search={search}
                  onTopicSearch={this.handleTopicSearch}
                  onSubmit={this.handleSubmit}
                />
                <ArticleList articles={articles} />
            </>

        );
    }
}
