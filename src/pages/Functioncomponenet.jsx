import React, { useState } from "react";
import BaseHoc from "../hoc/BaseHoc";
import { useEffect } from "react";
const Functioncomponent = (props) => {
    const [count, setCount] = useState(0);
    const [changename, setChangeName] = useState("");

    useEffect(() => {
        console.log("Component did mount");
    }, []);

    useEffect(() => {
        console.log("Component did update");
    });

    useEffect(() => {
        console.log("change name did update");
    }, [changename]);
    return (

        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to increase count</button>
            <button onClick={() => setCount(count - 1)}>Click me to decrease count</button>
            <h1>{count}</h1>
            <h1>My name is {props.name}, I am {props.age} years old...</h1>
            <input onC hange={(e) => setChangeName(e.target.value)}></input>
            <button onClick={() => props.setName(changename)}>Change Name</button>
        </div>
    );
};
export default BaseHoc(Functioncomponent);