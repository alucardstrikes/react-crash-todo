import React, { Component } from 'react';
import PropTypes from "prop-types";


class TodoItem extends Component {
    getStyle = () => {
        return{
            backgroundColor:'#f4f4f4',
            padding:'10px',
            textDecoration:this.props.todo.completed?'line-through':'none',
            borderBottom:'1px #ccc dotted'
        }
    }

    
    render() {

        const {id, title} =this.props.todo;
        return (
            
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" id={"chkBox_".concat(id)} onChange={this.props.markComplete.bind(this,id)}></input>
                {title}
                <button style={btnStyle} onClick={this.props.delToDo.bind(this,id)} id={"btn".concat(id)}></button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem;
