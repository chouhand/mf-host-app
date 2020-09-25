import React, { useState } from 'react'

import './index.css'
const Button = () => {
  const [counter, setcounter] = useState(0)
  const handlebtnClick = () => setcounter(counter + 1)
  const handleResetClick = () => setcounter(0);
  return (
    <>
      <div>Clicked <span>{counter}</span></div>
      <h1>Reset btn via Reset</h1>
      <button onClick={handlebtnClick}>Click</button>
      <button onClick={handleResetClick}>Reset</button>

    </>
  )
}

export default Button
