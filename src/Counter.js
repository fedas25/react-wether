import React from 'react';
import logo from './logo.svg';

export default
    class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.getTime(), 1100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getTime() {
        this.setState((state) => ({ // предыдущее состояник в виде аргумента
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    Думаем о смысле жизни {this.state.count}
                </header>
            </div>
        );
    }
}