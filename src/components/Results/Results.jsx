import React, {useEffect, useState} from 'react';
import Start from "../Start/Start";

const Results = () => {
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  let myScore = 0;

  useEffect(() => {
    let answersFromUser = localStorage.getItem('userAnswers').split(',');
    let data = JSON.parse(localStorage.getItem('data'));

    setUserAnswers([...answersFromUser]);

    data.forEach((element, index) => {
      if (element.correct_answer === answersFromUser[index]) {
        myScore = myScore + 1;
      }
    });
    setScore(myScore);
  }, [])

  return (
    <div className="Results">
      <Start />
      <h6>Your results</h6>
      <h4>Your score is {score}/{userAnswers.length}</h4>
    </div>
  );
}

export default Results;
