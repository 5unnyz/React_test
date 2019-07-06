import React from 'react';

const Friend = (props) =>
{
    return(
        <div>
            <p onClick = {props.click}>My friend is {props.name} and he is {props.age} years old.</p>
        
        
            
        </div>
    )
};


export default Friend;