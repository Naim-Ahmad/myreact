import React from 'react'

export default function Item({item}) {
  return (
    <li>{item.firstName} {item.lastName}</li>
  )
}
