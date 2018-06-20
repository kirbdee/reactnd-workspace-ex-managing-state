import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  getRandomBasedOn = (value) => Math.floor(Math.random() * value);
  getRandomValue = () => this.getRandomBasedOn(100);
  getRandomAnswerOffset = () => this.getRandomBasedOn(3);

  state = {
    value1: this.getRandomValue(),
    value2: this.getRandomValue(),
    value3: this.getRandomValue(),
    proposedOffSet: this.getRandomAnswerOffset(),
    numQuestions: 0,
    numCorrect: 0
  };

  checkAnswer = (answer) => {
    this.setState((prevState) => ({
      numCorrect: (answer === (this.state.proposedOffSet === 0)) ? ++prevState.numCorrect : prevState.numCorrect,
      numQuestions: ++prevState.numQuestions,
      value1: this.getRandomValue(),
      value2: this.getRandomValue(),
      value3: this.getRandomValue(),
      proposedOffSet: this.getRandomAnswerOffset(),
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedOffSet + this.state.value1 + this.state.value2+ this.state.value3}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
