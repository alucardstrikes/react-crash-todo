import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from "./components/layouts/header";
import AddToDo from "./components/AddToDo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About";
import Axios from "axios"

class App extends Component {


  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(eachToDoItem => {
        if (eachToDoItem.id === id) {
          eachToDoItem.completed = !eachToDoItem.completed
        }
        return eachToDoItem;
      })
    });
  }

  delToDo = (id) => {
    //first delete from server or database and only then remove from UI
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>{
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    })
    
  }

  addToDo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos',{title:title,completed:false})
    .then(res=>{
      this.setState({ todos: [...this.state.todos, res.data] })
    });
    
  }
  //App level state
  state = {

    todos: []
  }

  async componentDidMount(){
    let resData=await Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
    this.setState({todos:resData.data});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route  exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addToDo={this.addToDo}></AddToDo>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo} />
              </React.Fragment>
            )}></Route>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>

    );
  }
}
export default App;
