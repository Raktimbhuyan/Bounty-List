import { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GiPirateFlag } from "react-icons/gi";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")

  // Load saved todos once, and fix old items that used the wrong key (isComplete)
  const [todos, setTodos] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("todos")) || []
      return saved.map(item => ({
        ...item,
        isCompleted: item.isCompleted ?? item.isComplete ?? false,
      }))
    } catch {
      return []
    }
  })

  // "all" | "pending" | "finished"
  const [filter, setFilter] = useState("all")

  // Save automatically whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleSave = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
  }

  const handleDelete = (e, id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleEdit = (e, id) => {
    const t = todos.find(item => item.id === id)
    setTodo(t.todo)
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    const id = e.target.name
    setTodos(
      todos.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    )
  }

  // Only used for display, the real list stays untouched
  const visibleTodos = todos.filter(item =>
    filter === "pending" ? !item.isCompleted :
    filter === "finished" ? item.isCompleted :
    true
  )

  return (
     <div className="flex min-h-dvh flex-col">
      <Navbar />
      <hr className='w-full bg-[#FFDF00] h-0.5' />
      <div className="flex flex-1 flex-col bg-[url('/Op2.jpg')] bg-cover bg-center bg-no-repeat px-3 py-5">
        <div className="box mx-auto flex w-[92%] flex-1 flex-col space-y-4 rounded-2xl bg-white/40 pb-5 backdrop-blur-md md:w-[80%] lg:w-[70%]">
          <div className="name font-['Rye'] text-center text-2xl sm:text-2xl md:text-3xl font-bold py-3 flex items-center gap-2 justify-center"><GiPirateFlag />Bounty List</div>

          <div className='flex mx-3 sm:mx-7 sm:flex-row gap-3'>
            <div className='w-full'>
              <input onChange={handleChange} value={todo} type="text" className="rounded-xl w-full border py-1" />
            </div>
            <div>
              <button
                onClick={handleSave}
                disabled={todo.length <= 3}
                className='font-bold bg-black text-white rounded-md w-13 hover:opacity-75 disabled:opacity-50 py-1'
              >
                Save
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mx-3 sm:mx-7 justify-center">
            {["all", "pending", "finished"].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-md px-3 py-1 font-bold capitalize transition-colors ${
                  filter === type ? "bg-[#FFDF00] text-black" : "bg-black text-white hover:opacity-75"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {visibleTodos.length === 0 && (
            <div className="text-center font-[cursive]">No Todos To Display</div>
          )}
{visibleTodos.map(item => {
  return (
    <div key={item.id} className='todo flex items-start justify-between gap-4 mx-7'>
      <div className='flex flex-1 min-w-0 items-start gap-2'>
        <input
          name={item.id}
          onChange={handleCheckbox}
          type="checkbox"
          checked={item.isCompleted}
          className='h-7 w-5 shrink-0'
        />
        <div className={`break-words min-w-0 ${item.isCompleted ? "line-through" : ""}`}>
          {item.todo}
        </div>
      </div>
      <div className="button flex shrink-0 gap-3">
        <button onClick={(e) => handleEdit(e, item.id)} className='font-bold bg-black text-white rounded-md w-7 hover:opacity-75 my-1 flex justify-center py-0.5'><FaEdit /></button>
        <button onClick={(e) => handleDelete(e, item.id)} className='font-bold bg-black text-white rounded-md w-7 h-5 hover:opacity-75 my-1 flex justify-center py-0.5'><MdDeleteForever/></button>
      </div>
    </div>
  )
})}
        </div>
      </div>
      <hr className='w-full bg-[#FFDF00] h-0.5' />
      <Footer />
     </div>
  )
}

export default App
