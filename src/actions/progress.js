import database from '../firebase/firebase';

//ADD_ANSWER
export const addAnswer = (id, answer) => ({
    type: 'ADD_ANSWER',
    answer: {
        id, 
        answer
    }
});

//START_ADD_ANSWER
export const startAddAnswer = (id, answer = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/${id}`).push(answer).then((ref) => {
            dispatch(addAnswer({
                id,
                answer
            }));
        });
    };
};