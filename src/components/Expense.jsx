import React from 'react'
import Desc from './Desc'

const Expense = (props) => {
  
  return (
    <div>
      <div>
        <Desc title={props.title} localExpenditure={props.localExpenditure} />
        
        </div>
        <h1>{props.amount}</h1>
    </div>
  )
}

export default Expense
