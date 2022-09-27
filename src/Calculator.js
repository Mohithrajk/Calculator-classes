import styles from './Calculator.module.css';
import { Component } from 'react';
import constants from './constants';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billPerPerson: '0.00',
      tipPerPerson: '0.00',
    };
  }

  splitTip = () => {
    let tipValue = (this.props.tip * this.props.bill) / this.props.people;
    const tipPerPerson =
      this.props.bill > 0 && this.props.people > 0
        ? tipValue.toFixed(2)
        : '0.00';
    this.setState({ tipPerPerson });
  };

  splitAmount = () => {
    let tipValue = (this.props.tip * this.props.bill) / this.props.people;
    let value = this.props.bill / this.props.people;
    value += tipValue;
    const billPerPerson =
      this.props.bill > 0 && this.props.people > 0 ? value.toFixed(2) : '0.00';
    this.setState({ billPerPerson });
  };

  resetValues = () => {
    this.props.resetValues();
    this.setState({ billPerPerson: '0.00' });
    this.setState({ tipPerPerson: '0.00' });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.bill !== this.props.bill ||
      prevProps.tip !== this.props.tip ||
      prevProps.people !== this.props.people
    ) {
      this.splitAmount();
      this.splitTip();
    }
  }

  render() {
    const { TIPAMOUNT, TOTAL, PERPERSON, RESET } = constants;
    return (
      <div className={styles.calculator}>
        <div className={styles.calculatorGroup}>
          <div className={styles.calculatorUnit}>
            <div className={styles.calculatorLabel}>
              <p className={styles.header}>{TIPAMOUNT}</p>
              <p className={styles.unit}>{PERPERSON}</p>
            </div>
            <div className={styles.value}>
              <p>${this.state.tipPerPerson}</p>
            </div>
          </div>

          <div className={styles.calculatorUnit}>
            <div className={styles.calculatorLabel}>
              <p className={styles.header}>{TOTAL}</p>
              <p className={styles.unit}>{PERPERSON}</p>
            </div>
            <div className={styles.value}>
              <p>${this.state.billPerPerson}</p>
            </div>
          </div>
        </div>
        <button className={styles.btn} onClick={this.resetValues}>
          {RESET}
        </button>
      </div>
    );
  }
}

export default Calculator;
