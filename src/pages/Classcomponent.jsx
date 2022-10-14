import React from "react";
import BaseHoc from "../hoc/BaseHoc";
class Classcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Shiva",
            age: 20
        }
        console.log("Constructor");
    }
    componentDidMount() {
        console.log("componenet mounted");
    }
    render() {
        console.log("Render");
        return (
            <>
                <h2>This is Class Component</h2 >
            </>
        );
    }

}

export default BaseHoc(Classcomponent);