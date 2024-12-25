import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addfun, minusfun } from './Redux/action'

const ReduxExample = () => {
  const count = useSelector((state) => state.count)
 const dispatch = useDispatch()

 
  return (
    <div>
      <h3>count is--{count}</h3>
      <button onClick={() => dispatch(addfun())}>add</button>
      <button onClick={() => dispatch(minusfun( ))}>minus</button>
    </div>
  )
}

export default ReduxExample
