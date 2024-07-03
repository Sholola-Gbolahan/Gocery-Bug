import React from "react"
import SingleItem from "./SingleItem"

const Items = ({ items, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default Items
