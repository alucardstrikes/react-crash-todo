import React,{Component} from 'react';
import TodoItem from "./Todoitems"
import PropTypes from "prop-types";

class Todos extends Component{
  
  
  render(){
    return this.props.todos.map(eachProp=>(
    <TodoItem key={eachProp.id} todo={eachProp} markComplete={this.props.markComplete} delToDo={this.props.delToDo}/>
    ))
  }
}

Todos.propTypes={
  todos:PropTypes.array.isRequired,
  markComplete:PropTypes.func.isRequired,
  delToDo:PropTypes.func.isRequired
}

export default Todos;
