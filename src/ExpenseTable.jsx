import React from 'react'
import { expenses } from './Expense'

function ExpenseTable({children, searchText, setSearchText }) {
  return (
    <div className='mm'>
        <h3>Expense Table</h3>
    

            <input 
            type="text" 
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            placeholder='search by name or category'
            /> <br />
        
        <table>

            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>category</th>
                    <th>expense</th>
                    <th>dates</th>
                </tr>
           
            </thead>
            <tbody>
                {children}
            </tbody>

        </table>
    </div>
  )
}

export default ExpenseTable