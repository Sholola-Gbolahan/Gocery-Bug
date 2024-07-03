import React from "react"
import { useState } from "react"

export const Form = () => {
  const [newItemName, setNewItemName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newItemName)

    if (!newItemName) {
      alert("Form field cannot be empty")
      return
    }

    setNewItemName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>gocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  )
}
