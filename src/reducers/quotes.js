export default (state = [], action) => {
      
    switch (action.type) {

      case "ADD_QUOTE": 
        const newQuote = {
          id: action.quote.id,
          content: action.quote.content,
          author: action.quote.author,
          votes: quote.action.vote
        }

        return (state = [...state, newQuote] );

        default: 
                return state


  }
   }

