import React, {useState, useEffect} from 'react';
import Buttons from './Buttons';

const QuestionItem = (props) => {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const handleChange = (e) => {
    setRadioValue(e.currentTarget.value);
    setChecked(e.currentTarget.checked);
  }

  return (
    <div>
      <h3>{props.questions[props.id - 1]}</h3>
      {props.answers[props.id - 1].map(ans => 
        <div key={ans}>
          <input type="radio"
            id={ans}
            value={ans}
            checked={radioValue === ans}
            onChange={handleChange}
          />
          <label htmlFor={ans}>
            {ans}
          </label>
        </div>
      )}
      {<Buttons
        questions={props.questions}
        id={props.id} 
        radioValue={radioValue}
        disable={!!radioValue}
      />}
    </div>
  );
}

export default QuestionItem;
