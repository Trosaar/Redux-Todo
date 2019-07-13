import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.js'

const TodoList = (props) => {
  console.log("TodoList:",props);
  return (
    <div> {props.todos.map( (todo, index) => {
      return (
        <p>?</p>,
        <Todo item={todo} key={index}/>
      )
    })} </div>
  )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { })(TodoList);
