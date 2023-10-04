const QuoteReducer = (state,action)=>{

        switch ( action.type){

            case "GET_QUOTE":

            return{
                ...state,
                QuoteData : action.payload,
            }
            default:
                return state;
        }
        }

        export default QuoteReducer;