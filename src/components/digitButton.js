import React from "react"

const Button = ({digit, handleClick}) => {
    return (
      <button value={digit} onClick={handleClick}>
        {digit}
      </button>
    )
  }

  export default Button