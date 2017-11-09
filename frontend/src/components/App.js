import React, { Component } from 'react';

// export default React.createClass({
//     render() {
//         return <div>Hello, React Router!</div>
//     }
// });

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    OK
                </p>
            </div>
        );
    }
}

export default App;