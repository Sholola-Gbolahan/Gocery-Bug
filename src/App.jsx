import { useState } from "react"
import { Form } from "./Form"
import { nanoid } from "nanoid"
import Items from "./Items"
import { ToastContainer, toast } from "react-toastify"

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items))
}

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list")
//   if (list) {
//     list = JSON.parse(localStorage.getItem("list"))
//   } else {
//     list = []
//   }
//   return list
// }

//Using One Liner to get LocalStorage
const defaultList = JSON.parse(localStorage.getItem("list") || "[]")

const App = () => {
  // getLocalStorage()

  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("item added to the list")
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success("item deleted")
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        //The idea approach is to copy the exiting value and create a new one.
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })

    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App
