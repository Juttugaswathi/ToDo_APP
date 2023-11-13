import React, { Fragment, useState } from 'react'

const ToDo = () => {
    let[state,setState]=useState("")
    let[listItem,setList]=useState([]);
    let[edit,setEdit]=useState(null)

    let handleSubmit=(e)=>{
        e.preventDefault();
    }

    let handleChange=(e)=>{
        setState(e.target.value);
    }

    let Add=()=>{
        if(state!='')
        {
          if(edit!==null)
          {
            listItem[edit]=state
            setEdit(null);
          }
          else
          {
            setList([...listItem,state])
          }
          setState("");
      }
    }

    let handleDelete=(id)=>
    {
        let deleteList=listItem.filter((val,index)=>{
          return index!==id
        })
        setList(deleteList);
    }
    
    let handleEdit=(id)=>{
       setState(listItem[id])
       setEdit(id)
    }

  return (
    <>
    <div className='main'>
    <div className="container">
    <h1>TODO APP</h1>
        <form onSubmit={handleSubmit} autoComplete='off'>
            <input type="text" name="content" placeholder='Type your task here' value={state} onChange={handleChange}/>&nbsp;
            <button onClick={Add}>{edit!==null ? "Update Item": "Add Item" }</button>
        </form>
        </div>
            <section>
              <h2>Your Task List</h2>
                {listItem.map((val,index)=>
                {
                    return (
                      <Fragment key={index}>
                        <div className="item">
                        <h3>{val}</h3> 
                        <button onClick={()=>handleDelete(index)} id="Delete">Delete</button>
                        <button onClick={()=>handleEdit(index)} id="Edit">Edit</button>
                        <br/>
                        </div> <br/>
                      </Fragment>
                    )
                })}  
            </section> 
            <button onClick={()=>setList([])} id="clear">Clear All</button>
    </div>
    </>
  )
}

export default ToDo