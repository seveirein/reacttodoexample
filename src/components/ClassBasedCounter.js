import React from "react";

class ClassBasedCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 5,
            name: "Reka"
        }
    }

    handleIncrement() {
        this.setState({count: this.state.count+1});
    }

    render() {
        return (
            <div>
                <p>Current Count: {this.state.count}</p>
                <button onClick={this.handleIncrement.bind(this)}>Increment</button>
            </div>
        )
    }
}

export default ClassBasedCounter;
