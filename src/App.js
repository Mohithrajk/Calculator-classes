import React from 'react';
import './App.css';
import Calculator from './Calculator';
import Input from './InputContainer';
import logo from './logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 0,
      tip: 0,
      people: 0,
    };
  }

  handleBillAmount = (e) => {
    this.setState({ bill: e.target.value });
  };

  handleSelectedTip = (e) => {
    this.setState({ tip: e.target.value });
  };

  handleCustomTip = (e) => {
    this.setState({ tip: e.target.value / 100 });
  };

  numberOfPeople = (e) => {
    this.setState({ people: e.target.value });
  };

  resetValues = () => {
    console.log('reset', this.props.bill);
    this.setState({ bill: 0 });
    this.setState({ people: 0 });
    this.setState({ tip: 0 });
  };

  render() {
    return (
      <div className="App">
        <img className="logo" src={logo} alt="" />
        <div className="container">
          <Input
            billAmount={this.state.bill}
            handleBillAmount={this.handleBillAmount}
            handleSelectedTip={this.handleSelectedTip}
            handleCustomTip={this.handleCustomTip}
            numberOfPeople={this.numberOfPeople}
            people={this.state.people}
          ></Input>
          <Calculator
            bill={this.state.bill}
            people={this.state.people}
            tip={this.state.tip}
            setPeople={this.numberOfPeople}
            setTip={this.handleCustomTip}
            setBill={this.handleBillAmount}
            resetValues={this.resetValues}
          ></Calculator>
        </div>
      </div>
    );
  }
}

export default App;
