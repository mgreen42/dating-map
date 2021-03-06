//Games Reducer Default State
const gamesReducerDefaultState = [{
    name: 'Fourth of July',
    id: 'fourth-of-july',
    isOwned: true
}];

//Games Reducer
export default (state = gamesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_GAME':
            return [
                ...state,
                action.game
            ];
        default:
            return state;
    }
}

