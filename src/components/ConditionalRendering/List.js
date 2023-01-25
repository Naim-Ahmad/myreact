import React from 'react'
import Item from './Item'

export default function List({list}) {
    if(!list) return
    console.log(list)
  return (
    <ul>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  )
}
