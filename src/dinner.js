import React from 'react';

function Dinner(props){
    return(
            <div>
                <h1>Today we have {props.dishName}</h1>
                <h1>And we are giving complimentary {props.complimentary}</h1>
            </div>
    );
}
export default Dinner;