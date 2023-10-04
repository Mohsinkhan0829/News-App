export const fetchNews = async (topic) => {
    const response = await fetch(`
    https://newsapi.org/v2/everything?q=${topic}&from=2023-09-30&sortBy=publishedAt&apiKey=9fe52b147928486ea0fa72382f621b2d`)
    const data = await response.json()
    return data.articles;
}

