import { Component } from 'react';
import styles from './InputContainer.module.css';
import constants from './constants';

class Input extends Component {
  render() {
    const { TIPS, PEOPLE, TIPLABEL, BILL } = constants;
    return (
      <div className={styles.form}>
        <div className={styles.labelGroup}>
          <label className={styles.label} htmlFor="bill">
            {BILL}
          </label>
          <input
            type="number"
            id="bill"
            onChange={this.props.handleBillAmount}
            value={this.props.billAmount <= 0 ? 0 : this.props.billAmount}
          />
        </div>
        <div className={styles.tipSection}>
          <label htmlFor="tip">{TIPLABEL}</label>
          <div className={styles.tipAmountWrapper}>
            {TIPS.map((item) => (
              <div className={styles.tipAmount}>
                <button
                  className={styles.tip}
                  onClick={this.props.handleSelectedTip}
                  value={item / 100}
                >
                  {item}%
                </button>
              </div>
            ))}
            <div className={styles.tipAmount}>
              <input
                type="text"
                name="tip"
                onChange={this.props.handleCustomTip}
              />
            </div>
          </div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.labelWrapper}>
            <label htmlFor="people">{PEOPLE}</label>
          </div>
          <input
            type="number"
            id="people"
            onChange={this.props.numberOfPeople}
            value={this.props.people <= 0 ? 0 : this.props.people}
          />
        </div>
      </div>
    );
  }
}

export default Input;
