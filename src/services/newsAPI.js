//const ARTICLE_COUNT = 10;

export const formatArticles = (json) => {
    return json.articles.map((article) => {
     return   {
        title: article.title,
        author: article.author ? article.author : 'not provided',
        description: article.description,
        }
    });
}


    export const fetchArticlesBySearch = async (search) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`);
        const json = await res.json();

        return formatArticles(json);
    }
