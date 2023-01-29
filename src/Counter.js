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

    increaseСounter = (а) => { // this привязан и определён
        this.setState((state) => ({ // предыдущее состояник в виде аргумента
            count: state.count + 1
        }));
        // console.log(а);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    Думаем о смысле жизни {this.state.count}
                    <button onClick={this.increaseСounter.bind(this, 12)}> нажми меня </button>
                </header>      {/*  без события не видет ( правила такие ) this проигнорит в функции */}
            </div>
        );
    }
}