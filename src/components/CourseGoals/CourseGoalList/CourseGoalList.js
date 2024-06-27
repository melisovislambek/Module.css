import React from 'react';
import Card from '../../UI/Button/Card';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import styled from 'styled-components';



const CourseGoalList = props => {
  return (
    <Card>
<Ul backgroundColor ="white">
      {props.items.map(goal => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </Ul>
    </Card>
    
  );
};


const Ul  = styled.ul`

  
  list-style: none;
  margin: 0;
  padding: 0;
  background-color:${(props) => props.backgroundColor };


`



export default CourseGoalList;
