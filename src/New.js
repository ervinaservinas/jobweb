import React from 'react';

const New = ({prop1}) => {

    return (
        <div>
            <button onClick={prop1}> Click me</button>
            <button onClick={prop1} > click me 2</button>
            <button onClick={prop1}> click me 3</button>
        </div>
    )
}
export default New;