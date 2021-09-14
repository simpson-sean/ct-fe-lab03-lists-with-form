//const ARTICLE_COUNT = 10;

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


    export const fetchArticlesBySearch = async (search) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`);
        const json = await res.json();

        return formatArticles(json);
    }

    // export const fetchArticlesBySearch = async (search) => {
    //     const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`);
    //     const json = await res.json();

    //     return formatArticles(json);
    // }