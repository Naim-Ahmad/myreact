import React, { useState } from 'react'
import Button from './Button'
import Welcome from './Welcome'

let messages = {
  title: 'this is a title',
  description: 'message body'
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Welcome {...messages} title="javaScrip"/>
      <Button label={count} handler={()=>setCount(count + 1)}/>
    </div>
  )
}
