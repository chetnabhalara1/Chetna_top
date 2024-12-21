import React from 'react'

const Contact = () => {
    let count=0
    for(let i=0;i<10000000;i++)
    {
        count+=i
    }
  return (
    <div>
     <h4> contact component callll...</h4>
     <h4>{count}</h4>
    </div>
  )
}

export default Contact
