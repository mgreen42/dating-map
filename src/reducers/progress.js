//Games Reducer Default State
const progressReducerDefaultState = [];

//Games Reducer
export default (state = progressReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_ANSWER':
            return [
                ...state,
                action.answer
            ];
        default:
            return state;
    }
}

