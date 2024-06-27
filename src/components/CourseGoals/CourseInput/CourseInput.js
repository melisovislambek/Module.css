import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import Modal from '../../UI/Modal/Modal';



const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isNotEntered, setisNotEnteredValue] = useState(false);
  const [modal, setModal] = useState({
    isShow: false,
    message: '',
    title: ''

  })
  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    

    ////// два сценария 2 текста

    if (enteredValue.trim().length < 6){
      setModal({
        isShow: true,
        message: "Should be more than 6 please change",
        title: "Some error"
      })
    }


    if ( enteredValue.trim().length === 0){   //// метод trim()убирает пробелы
      setModal ({
        isShow: true,
        message: 'Please type something',
        title: "No date"
      })

     
      setisNotEnteredValue(true)
      return
    }else {
      setisNotEnteredValue(false)
    }
   
    props.onAddGoal(enteredValue);   ///// lifting up
    setEnteredValue('')
  };


  const closeModalHandler = () => {        /////Обработик при нажатии ок "Click"
    setModal (prevState => !prevState )
  }

  return (
    <Div>
      {modal.isShow && <Modal onClick ={closeModalHandler} title ={modal.title} message ={modal.message} />}
    <form onSubmit={formSubmitHandler}>
      <Div error ={isNotEntered} >
        <label>Course Goal</label>
        <input value={enteredValue} type="text" onChange={goalInputChangeHandler} />
        {isNotEntered && <p style={{color: "green"}}> Please type something</p>}
      </Div>
      <Button type="submit">Add Goal</Button>
    </form>
    </Div>
  );
};






const Div = styled.div`


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  background-color: ${(props) =>!props.error? "" : 'tomato' }
}


& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

`


export default CourseInput;
