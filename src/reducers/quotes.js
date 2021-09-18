export default (state = [], action) => {
      
    switch (action.type) {

      case "ADD_QUOTE": 
      
        const newQuote = {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: action.quote.votes
        }

        return ( state = [...state, newQuote] );

        case "REMOVE_QUOTE": 

            return( state = state.filter( (quote) => quote.id !== action.quoteId ))

        case "UPVOTE_QUOTE":

            return( state = state.map((quote) => {
              quote.id === action.quoteId && (quote.votes += 1);
              return quote 
            }) )

          case "DOWNVOTE_QUOTE": 

            return( state = state.map((quote) => {
              quote.id === action.quoteId && quote.votes !== 0 && (quote.votes -= 1)

              return quote
            }) )

        default: 
                return state


  }
   }

