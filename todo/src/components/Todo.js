import React from 'react';

const Todo = (props) => {
  console.log("Todo:",props);
  return (
    <p>{props.item.text}</p>
  )
}

export default Todo;
