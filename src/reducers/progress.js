//Games Reducer Default State
const progressReducerDefaultState = {
    one: 'unknown',
    two: 'unknown',
    three: 'unknown'
};

//Games Reducer
export default (state = progressReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ANSWER_ONE':
            return {
                ...state,
                one: action.answer
            };
        case 'RESET_ANSWERS':
            return {
                one: 'unknown',
                two: 'unknown',
                three: 'unknown'
            };
        default:
            return state;
    }
}

// [
//     {...state.map((item) => {
//         if(item.id === action.id) {
//             item.answer = action.answer;
//             console.log(item.answer);
//         }
//     })}
// ];