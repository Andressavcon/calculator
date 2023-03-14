import React from 'react';
import styles from './Calculator.module.css';
import { Button } from './Button';

const Calculator = () => {
  const [num, setNum] = React.useState(0);
  const [oldNum, setOldNum] = React.useState(0);
  const [operator, setOperator] = React.useState(0);

  const inputNum = ({ target }) => {
    var input = target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const porcentagem = () => {
    setNum(num / 100);
  };

  const changeSign = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const operatorHandler = (e) => {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  };

  const calculate = () => {
    const oldNumNumber = parseFloat(oldNum.replace(',', '.'));
    const numNumber = parseFloat(num.replace(',', '.'));

    if (operator === '/') {
      setNum((oldNumNumber / numNumber).toLocaleString('pt-BR'));
    } else if (operator === 'x') {
      setNum((oldNumNumber * numNumber).toLocaleString('pt-BR'));
    } else if (operator === '+') {
      setNum((oldNumNumber + numNumber).toLocaleString('pt-BR'));
    } else if (operator === '-') {
      setNum((oldNumNumber - numNumber).toLocaleString('pt-BR'));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <h1>{num}</h1>
      </div>
      <div className={styles.wrapper}>
        <Button className={styles.lighterGray} onClick={clear} value={'AC'} />
        <Button
          className={styles.lighterGray}
          onClick={changeSign}
          value={'+/-'}
        />
        <Button
          className={styles.lighterGray}
          onClick={porcentagem}
          value={'%'}
        />
        <Button
          className={styles.orange}
          onClick={operatorHandler}
          value={'/'}
        />
        <Button className={styles.gray} onClick={inputNum} value={7} />
        <Button className={styles.gray} onClick={inputNum} value={8} />
        <Button className={styles.gray} onClick={inputNum} value={9} />
        <Button
          className={styles.orange}
          onClick={operatorHandler}
          value={'x'}
        />
        <Button className={styles.gray} onClick={inputNum} value={4} />
        <Button className={styles.gray} onClick={inputNum} value={5} />
        <Button className={styles.gray} onClick={inputNum} value={6} />
        <Button
          className={styles.orange}
          onClick={operatorHandler}
          value={'-'}
        />
        <Button className={styles.gray} onClick={inputNum} value={1} />
        <Button className={styles.gray} onClick={inputNum} value={2} />
        <Button className={styles.gray} onClick={inputNum} value={3} />
        <Button
          className={styles.orange}
          onClick={operatorHandler}
          value={'+'}
        />
      </div>
      <div className={styles.wrapper2}>
        <Button className={styles.gray0} onClick={inputNum} value={0} />
        <Button className={styles.gray} onClick={inputNum} value={','} />
        <Button className={styles.orange} onClick={calculate} value={'='} />
      </div>
    </div>
  );
};

export default Calculator;
