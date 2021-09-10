import { response } from "msw";

const ARTICLE_COUNT = 10;

export const formatArticles = (json) =>
    json.map((articles) => ({
        title: articles.title,
        author: articles.author,
        description: articles.description,
    }));

    export const fetchArticles = async () => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}`);
        const json = await res.json();

        return formatArticles(json);
    }

    export const fetchArticlesByAuthor = async (authorName) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.NEWS_API_KEY}/${authorName}/${ARTICLE_COUNT}`);
        const json = await res.json();

        return formatArticles(json);
    }