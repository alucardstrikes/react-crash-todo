import React from 'react'
import {Link} from "react-router-dom"
export default function header() {
    return (
        <div>
            <header style ={headerStyle}>
                <h1>
                    My ToDoList
                </h1>
                <Link to="/" style={linkstyle}>Home</Link>|<Link to="/about" style={linkstyle}>About</Link>
            </header>
        </div>
    )
}

const headerStyle={
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

const linkstyle={
    color:'#fff',
    textDecoration:'none'
}

