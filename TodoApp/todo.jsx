import React, { useState, useEffect } from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import TodoList from './todoList'



const Todo = () => {

    const [todo, setTodo] = useState('')
    const [items, setItems] = useState([])


    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items') || '[]');
        setItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

 
    const changeHandler = (e) => {
        const newValue = e.target.value
    
        setTodo(newValue)
    }

    const clickHandler = () => {
        if(todo === ''){
            alert('Please fill the input field')
            
        }else if(todo.length > 30) {    ``
            alert('Less than 30 characters are allowed to be typed ')
            setTodo('')
        }else{
            setItems(prev => {
                return [
                    ...prev,
                    todo,
                ]
            })
            setTodo("")
        }
       
    }

    const deleteHandler = (id) => {
        setItems(prev => {
            return prev.filter((item, index) => {
                return index !== id
            })
        })
    }

    return (
        <div className=' mt-5 h-screen w-screen '>
            <div className='flex justify-center items-center bg-gradient-to-r from-blue-500  to-blue-700 w-1/3 h-32 mx-auto rounded-lg'>
                <div className='relative flex items-center h-16 w-8/12 rounded-lg bg-slate-50'>
                    <input onChange={changeHandler} value={todo} className="rounded-md pl-5 w-full h-full focus:outline-none bg-slate-50" type="text" placeholder='take some notes...' required/>
                    <div onClick={clickHandler} className='absolute top-[48px] right-2 bg-orange-600   rounded-full h-8 w-8 flex justify-center items-center hover:cursor-pointer'>
                        <button className=' text-white' ><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>
            {
                items == ''? <h1 className='text-center mt-10 text-xl'>Create some tasks...</h1> : <div className='flex justify-center pt-10'>
                <table className=''>
                    {
                        items.map((item, index) => {
                            return ( 
                                    <TodoList
                                        key={index}
                                        id={index}
                                        item={item}
                                        onChecked={deleteHandler}
                                   />

                            )
                        })
                    }
                </table>
            </div>
            }
            
        </div>
    )
}
export default Todo