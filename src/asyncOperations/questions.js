import {getQuestionsAction} from "../components/reducers/questionsReducer";
import {getAnswersAction} from "../components/reducers/answersReducer";
import {getCorrectAnswerAction} from "../components/reducers/answersReducer";

export const fetchQuestions = () => {
    return function(dispatch) {
        fetch('https://opentdb.com/api.php?amount=10&category=25&type=multiple')
        .then(response => response.json())
        .then(json => {
            const parsedQuestions = [];
            const parsedAnswers = [];
            const parsedCorrectAns = [];

            for (let value of json.results) {
                parsedQuestions.push(value.question);
                parsedAnswers.push(value.incorrect_answers.concat(value.correct_answer));
                parsedCorrectAns.push(value.correct_answer)
            }
            dispatch(getQuestionsAction(parsedQuestions));
            dispatch(getAnswersAction(parsedAnswers));
            dispatch(getCorrectAnswerAction(parsedCorrectAns));
        });
    }
}

