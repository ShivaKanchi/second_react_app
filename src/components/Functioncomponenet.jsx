import React, { useState } from "react";
const Functioncomponent = (props) => {
    const [count, setCount] = useState(0);
    const [changename, setChangeName] = useState("");
    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to increase count</button>
            <button onClick={() => setCount(count - 1)}>Click me to decrease count</button>
            <h1>{count}</h1>
            <h1>My name is {props.name}, I am {props.age} years old...</h1>
            <input onChange={(e) => setChangeName(e.target.value)}></input>
            <button onClick={() => props.setName(changename)}>Change Name</button>
        </div>
    );
};
export default Functioncomponent;