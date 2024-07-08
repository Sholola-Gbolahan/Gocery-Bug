import React, { useState } from "react"
import { toast } from "react-toastify"

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => {
          editItem(item.id)
          item.completed || toast.success("completed")
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button
        onClick={() => removeItem(item.id, item.name)}
        type="button"
        className="btn remove-btn"
      >
        delete
      </button>
    </div>
  )
}

export default SingleItem
