import React from 'react'
import List from './List'

const user = [
    {id: 1, firstName: 'Naim', lastName: 'Ahmad'},
    {id: 2, firstName: 'Abid', lastName:"hasan"}
]

export default function App() {
  return (
    <div>
        <List list={user}/>
    </div>
  )
}
