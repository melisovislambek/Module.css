import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import classes from'./CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);   ///// lifting up
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes['form-control']}>
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
