import React from "react"

const OperationButton = ({operation, handleOperationClick}) => {
    return (
      <button value={operation} onClick={handleOperationClick}>
        {operation}
      </button>
    )
  }

export default OperationButton