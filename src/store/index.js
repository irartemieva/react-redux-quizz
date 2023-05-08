import { questReducer } from "../components/reducers/questionsReducer";
import {combineReducers, createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import { answerReducer } from "../components/reducers/answersReducer";

const rootReducer = combineReducers({
    quest: questReducer,
    ans: answerReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    const storeQuestions = store.getState().quest.questions;
    const storeAnswers = store.getState().ans.answers;

    if (!localStorage.getItem('questions') && storeQuestions.length !== 0) {
        localStorage.setItem('questions', JSON.stringify(storeQuestions));
    }

    if (!localStorage.getItem('answers') && storeAnswers.length !== 0) {
        localStorage.setItem('answers', JSON.stringify(storeAnswers));
    }
    
})

export default store;


