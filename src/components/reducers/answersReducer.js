
const defaultState = {
    answers: [],
    correct_answer: [],
    userAnswers: []
}

const GET_ANSWERS = 'GET_ANSWERS';
const GET_CORRECT_ANSWER = 'GET_CORRECT_ANSWER';
const SET_USER_ANSWERS = 'SET_USER_ANSWERS';

export const answerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_ANSWERS:
            return {...state, answers: [...state.answers, ...action.payload]};
        case GET_CORRECT_ANSWER:
            return {...state, correct_answer: [...state.correct_answer, ...action.payload]};
        case SET_USER_ANSWERS:
            return {...state, userAnswers: [...state.userAnswers, ...action.payload]};
        default:
            return state;
    }
}

export const getAnswersAction = (payload) => ({type: GET_ANSWERS, payload});
export const getCorrectAnswerAction = (payload) => ({type: GET_CORRECT_ANSWER, payload});
export const setUserAnswersAction = (payload) => ({type: SET_USER_ANSWERS, payload});