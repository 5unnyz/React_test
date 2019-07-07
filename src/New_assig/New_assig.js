import React from 'react';

const Friend = (props) =>
{
    return(
        <div>
            <p onClick = {props.click}>My friend is {props.name} and he is {props.age} years old.</p>
            <input type="text" onChange={props.changed}></input>
        
        
            
        </div>
    )
};


export default Friend;