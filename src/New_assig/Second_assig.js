import React from 'react';

const Enemy = (props) =>
{
    return(
        <div>
            <p>My enemy is {props.code} and he is coming at {props.time}</p>
        </div>
    )
}
export default Enemy;