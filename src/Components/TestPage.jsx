import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {add} from './Redux/cartSlice'
import {remove} from './Redux/cartSlice';
import "./TestPage.css"
const TestPage = () => {
    const dispatch = useDispatch();

    const handleAdd = ()=>{
        dispatch(add())
    }
    const handleDelete=()=>{
        dispatch(remove());
    }

    const count = useSelector(state=>state.cart) 

  return (
    <div className="counter">
    <h2>Counter</h2>
    <div className="counter-container">
      <button onClick={handleDelete}>-</button>
      <span className='count-no'>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  </div>
  )
}

export default TestPage