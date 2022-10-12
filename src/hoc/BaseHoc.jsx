import React from "react";
const BaseHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <h1>----------</h1>
            <Component {...props} />
            <h1>----------</h1>
        </div>
    );
};

export default BaseHoc;