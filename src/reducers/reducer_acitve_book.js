
//state argument is not application state, only the state this
// reducer 
export default function(state = null, action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
            break;
    }
    return state
}