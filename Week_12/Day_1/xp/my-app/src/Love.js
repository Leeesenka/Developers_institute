//ex2 xp
import React from "react";

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5

class Love extends React.Component {
    render() {
        return [myelement, sum];
    }
}


export default Love