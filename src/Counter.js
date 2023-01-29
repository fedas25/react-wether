import React from 'react';
import logo from './logo.svg';

export default
    class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        // this.increaseСounter = this.increaseСounter.bind(this); способ привязать this при передаче в колюек
    }

    componentDidMount() {
        // шкута, котороя запускается как компонент отрендерится
    }

    componentWillUnmount() {
        // шкута, котороя запускается как компонент удалится
    }

    increaseСounter = (e) => { // this привязан и определён
        this.setState((state) => ({ // предыдущее состояник в виде аргумента
            count: state.count + 1
        }));
        console.log(e.currentTarget);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    Думаем о смысле жизни {this.state.count}
                    <button onClick={(e) => this.increaseСounter(e)}> нажми меня </button>
                </header>
            </div>
        );
    }
}