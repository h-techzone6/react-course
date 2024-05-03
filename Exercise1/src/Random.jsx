import React from 'react'

const Random = () => {
    let randomNum = Math.random() * 100;
  return (
    <>
    <h3>Random number is {Math.round(randomNum)}</h3>
    </>
  )
}

export default Random