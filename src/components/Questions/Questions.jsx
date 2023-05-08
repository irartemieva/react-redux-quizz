import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
//import HttpService from '../../API/HttpService';
import QuestionItem from './QuestionItem';

import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../asyncOperations/questions';
import {getAnswersAction} from '../reducers/answersReducer';
import {getQuestionsAction} from '../reducers/questionsReducer';

const Questions = () => {
  const dispatch = useDispatch();
  const ques = useSelector(state => state.quest.questions);
  const ans = useSelector(state => state.ans.answers);

  const params = useParams();

  useEffect(() => {
    const storageQuestions = localStorage.getItem('questions');
    const storageAnswers = localStorage.getItem('answers');

    if (!storageQuestions || !storageAnswers) {
      dispatch(fetchQuestions());
    } else {
      dispatch(getQuestionsAction(JSON.parse(storageQuestions)));
      dispatch(getAnswersAction(JSON.parse(storageAnswers)));
    }

  }, []);


  return (
    ques.length !== 0 && ans.length !== 0
      ?
      <div>
        <QuestionItem questions={ques} answers={ans} id={params.id} />
      </div>
      :
      <p>No data</p>
  );
}

export default Questions;
