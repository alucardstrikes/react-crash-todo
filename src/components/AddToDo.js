import React, { Component } from 'react'

export class AddToDo extends Component {

    //component level state
    state=
    {
        title:''
    }

    //avoid mutilpe implementations of onChange for different types of possible text boxes as long as the names are unique
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title:''})
    }
    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add ToDo..." style={{flex:'10',padding:'5px'}} value={this.state.title} onChange={this.onChange}></input>
                <input type="submit" value ="submit" className="btn_Submit" style={{flex:'1'}}></input>
            </form>
           )
    }
}

export default AddToDo
