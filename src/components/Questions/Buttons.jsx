import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

const Buttons = (props) => {

  const router = useHistory();

  const saveAnswers = () => {
    let answersFromUser = localStorage.getItem('userAnswers');
    if (!answersFromUser) {
      localStorage.setItem('userAnswers', [props.radioValue]);
    } else {
      localStorage.removeItem('userAnswers');
      localStorage.setItem('userAnswers', [answersFromUser, props.radioValue]);
    }
  }

  const handleNext = (val) => {
    saveAnswers();
    router.push(`/questions/${+props.id + 1}`);
  }

  const handleGoToResults = () => {
    saveAnswers();
    router.push('/results')
  }

  return (
    <div>
      {props.questions.length !== +props.id ?
        <Button
          onClick={handleNext}
          size="lg"
          variant="dark"
          disabled={!props.disable}>
            Next
        </Button>
          :
        <Button
          onClick={handleGoToResults}
          size="lg"
          variant="dark">
          Go to Results
        </Button>}
    </div>
  );
}

export default Buttons;
