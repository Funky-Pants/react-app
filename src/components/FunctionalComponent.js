import React, { useState, useEffect } from 'react';

const FunctionalComponent = (props) => {
    const [count, setCount] = useState([props.count]);

    useEffect(() => {
        console.log("mounted");

        return () => {
            console.log("unmounted");
        }
    }, [])


    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.children}
            <div>{count}</div>
            <button onClick={()=> setCount(count + props.step)}
            type="button" className="btn btn-primary">Increment</button>
            <button onClick={()=> setCount(count - props.step)}
            type="button" className="btn btn-primary">Decrement</button>
        </div>
    )
}
export default FunctionalComponent