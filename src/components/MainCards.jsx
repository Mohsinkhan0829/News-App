const Cards = ({news}) => {
    return (
        <>
            <div className="Main-card">
                <div className="card-img">
                    <img src={news.urlToImage} />
                </div>
                <div className="card-text">
                    <h3 className="card-title">{news.title}</h3>
                    <p className="card-description"> {news.description}</p>
                    <p className="card-author">{news.author}</p>
                    <a target="_blank" href={news.url} className="Main-card-button">Read-More</a>
                </div>
         </div>

        </>

    )
}

export default Cards;