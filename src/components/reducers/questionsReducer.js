
const defaultState = {
    questions: []
}

const GET_QUESTIONS = 'GET_QUESTIONS';

export const questReducer = (state = defaultState, action) => {
    switch(action.type) {
        case GET_QUESTIONS:
            return {...state, questions: [...state.questions, ...action.payload]};
        default:
            return state;
    }
}

export const getQuestionsAction = (payload) => ({type: GET_QUESTIONS, payload});