import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFun, minusFun,  } from './redux/action'

const ReduxExample = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>Count is == {count}</h3>
      <button onClick={() => dispatch(addFun())}>Add</button>
      <button onClick={() => dispatch(minusFun())}>Minus</button>
    </div>
  )
}

export default ReduxExample