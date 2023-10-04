import React, { useContext, useEffect } from "react";
import { getQuote } from "../context/Quote/QuoteAction";
import QuoteContext from "../context/Quote/QuoteContext";

const TrendingNews = () => {

    const {dispatch, QuoteData} = useContext(QuoteContext)

    const fetchquote = async()=>{  
        const data = await getQuote();

        dispatch({
            type: "GET_QUOTE",
            payload : data,
        })
    }


    useEffect(()=>{
        fetchquote()
    },[])

    if(!QuoteData){
        return <h3 className="text-center">"Please Wait"</h3>
    }
   
    return (
        <div className="my-2">
            <marquee className="display-6 my-2 text-dark">{QuoteData.content} - {QuoteData.author}</marquee>
        </div>
    )
}
export default TrendingNews;