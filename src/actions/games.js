import database from '../firebase/firebase';

//ADD_ANSWER
export const addAnswer = (answer) => ({
    type: 'ADD_ANSWER',
    id: answer.id,
    answer: answer.answer
});

//START_ADD_ANSWER
export const startAddAnswer = (answer = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}`).push(answer).then((ref) => {
            dispatch(addAnswer({
                id: ref.key,
                answer: answer
            }));
        });
    };
};