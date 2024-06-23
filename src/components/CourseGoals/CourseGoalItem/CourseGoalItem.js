import React from 'react';
import styled from 'styled-components';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <Li background ='#8b005d'  onClick={deleteHandler}>
      {props.children}
    </Li>
  );
};

const Li = styled.li `

  margin: 1rem 0;
  background: ${(props) => props.background };
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: red;
  padding: 1rem 2rem;
  cursor: pointer;

`

export default CourseGoalItem;
