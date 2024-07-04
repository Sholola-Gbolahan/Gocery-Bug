import React, { useState } from "react"

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {item.name}
      </p>
      <button onClick={removeItem} type="button" className="btn remove-btn">
        delete
      </button>
    </div>
  )
}

export default SingleItem
