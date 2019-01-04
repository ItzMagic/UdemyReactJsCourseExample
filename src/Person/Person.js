import React from 'react'


const person = (props) => {
    
    const rnd = Math.random();
    
    if (rnd > 0.7) {
        throw new Error ('Something went wrong');
    }
    return( 

        <div>
            <p>I'm {props.name} and I am {props.age} years old! </p>
            <input type="text" onChange={props.changed}/>
        </div>
 )    
};

export default person;