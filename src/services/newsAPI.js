
const ARTICLE_COUNT = 10;

export const formatArticles = (json) => {
    console.log(json);
    return json.articles.map((article) => {
     return   {
        title: article.title,
        author: article.author,
        description: article.description,
        }
    });
}


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