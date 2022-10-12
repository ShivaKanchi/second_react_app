import React from "react";
import BaseHoc from "../hoc/BaseHoc";
class Classcomponent extends React.Component {
    render() {
        return (
            < div className="App" >
                <h2>This is Class Component</h2 >
            </div>
        );
    }
}

export default BaseHoc(Classcomponent);