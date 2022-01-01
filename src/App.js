import React, {useState} from "react"
import './styles.css'

const Button = ({digit, handleClick}) => {
  return (
    <button value={digit} onClick={handleClick}>
      {digit}
    </button>
  )
}

const OperationButton = ({operation, handleOperationClick}) => {
  return (
    <button value={operation} onClick={handleOperationClick}>
      {operation}
    </button>
  )
}

const App = () => {
  const [currentOperand, setCurrentOperand] = useState('')
  const [previousOperand, setPreviousOperand] = useState('')
  const [currentOperation, setOperation] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    const digit = event.target.value
    if (digit === '.' && currentOperand.includes('.')) return
    if (digit === '.' && currentOperand === '') return
    setCurrentOperand(currentOperand + `${digit}`)
  }

  const handleOperationClick = (event) => {
    event.preventDefault()
    const operation = event.target.value
    if (currentOperand === '') return

    setOperation(operation)
    setPreviousOperand(currentOperand + ` ${operation}`)
    setCurrentOperand('')
  }

  return (
    <div className="calc-grid">
      <div className="output">
        <div className="prev-operand">{previousOperand}</div>
        <div className="curr-operand">{currentOperand}</div>
      </div>
      <button className="span-two" onClick={clear}>AC</button>
      <button onClick={deleteLast}>DEL</button>
      <OperationButton handleOperationClick={handleOperationClick} operation={'÷'}/>
      <Button digit={1} handleClick={handleClick}/>
      <Button digit={2} handleClick={handleClick}/>
      <Button digit={3} handleClick={handleClick}/>
      <OperationButton handleOperationClick={handleOperationClick} operation={'*'}/>
      <Button digit={4} handleClick={handleClick}/>
      <Button digit={5} handleClick={handleClick}/>
      <Button digit={6} handleClick={handleClick}/>
      <OperationButton handleOperationClick={handleOperationClick} operation={'+'}/>
      <Button digit={7} handleClick={handleClick}/>
      <Button digit={8} handleClick={handleClick}/>
      <Button digit={9} handleClick={handleClick}/>
      <OperationButton handleOperationClick={handleOperationClick} operation={'-'}/>
      <Button digit={'.'} handleClick={handleClick}/>
      <Button digit={0} handleClick={handleClick}/>
      <button className="span-two" onClick={calculate}>=</button>
    </div>
  )
}
export default App