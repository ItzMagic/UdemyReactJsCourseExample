import React from 'react'
import Radium from 'radium'

const person = (props) => {
    
    return( 
        <div style={style}>
            <p>I'm {props.name} and I am {props.age} years old! </p>
            <input type="text" onChange={props.changed}/>
        </div>
 )    
};

export default person;