import database from '../firebase/firebase';

//ADD_ANSWER
export const addAnswer = (number, id, answer) => ({
    type: 'ADD_ANSWER_'+ number,
    id,
    answer
});

//START_ADD_ANSWER
export const startAddAnswer = (gameId, id, answer) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/${gameId}/answers/${id}`).set(answer).then((ref) => {
            const number = id === 1 ? 'ONE' : id === 2 ? 'TWO' : 'THREE';
            dispatch(addAnswer(
                number,
                id,
                answer
            ));
        });
    };
};

export const resetAnswers = (gameId) => ({
    type: 'RESET_ANSWERS',
    gameId
});

//START_RESET_ANSWERS
export const startResetAnswers = (gameId) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/${gameId}/answers`).remove().then((ref) => {
            dispatch(resetAnswers({
                gameId
            }));
        });
    };
};