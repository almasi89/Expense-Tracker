import React, {useState} from 'react'
import ExpenseTable from './ExpenseTable'
import { expenses, getNextId} from './Expense'

const ExpenseForm = () => {

    const [searchText, setSearchText] = useState("")
    const [formList, setFormList] = useState(expenses)
    const [newList ,setNewList] = useState({
        name:"",
        description:"",
        category:"",
        expense:"",
        date:""
    })

    function handleChange(e){
        const key =e.target.id
        setNewList({...newList,[key]:e.target.value})
    }
    function handleSubmit (e){
        e.preventDefault()
        const newExpenseData ={
            id: getNextId(),
            name:newList.name,
            description:newList.description,
            category:newList.category,
            expense:newList.expense,
            date:newList.date
        }
        const updatedList = [...formList, newExpenseData]
        setFormList(updatedList)
        setNewList({name:"", description:"", category:"", expense:"", date:""})

    }
    const searchedData = formList.filter((item)=>
    item.name.toLowerCase().includes(searchText.toLowerCase())||
    item.category.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <>
    <div className='container'>
        <div className='form-card'>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            id='name'
            placeholder='name'
            onChange={handleChange}
            value={newList.name}

            /> <br />
             <input 
            type="text"
            id='description' 
            placeholder='enter your expense description'
            onChange={handleChange}
            value={newList.description}
            /> <br />
             <input 
            type="text"
            id='category' 
            placeholder='enter your expense category'
            onChange={handleChange}
            value={newList.category}
            /> <br />
             <input 
            type="number" 
            id='expense'
            placeholder='enter amount'
            onChange={handleChange}
            value={newList.amount}
            /> <br />
             <input 
            type="date" 
            id='date'
            placeholder=''
           onChange={handleChange}
            value={newList.date}
            /> <br />
            <button>submit</button>
        </form>
        </div>
        <div>
            <ExpenseTable searchText = {searchText} setSearchText= {setSearchText}>
            {searchedData.map((item)=>(
                <tr key = {item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.expense}</td>
                    <td>{item.date}</td>
                </tr>
            ))
            }

            </ExpenseTable>

        </div>
        </div>
    
    </>
  )
}

export default ExpenseForm