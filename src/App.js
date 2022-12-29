
import React, { useState } from "react"
import Button from "./Components/Button"
import Title from "./Components/Title"

function App(){
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const handle1 = ()=>{
    setCount1((prev)=> prev + 1)
  }

  const handle2 = ()=>{
    setCount2((prev)=> prev + 5)
  }

  // const isOdd = useMemo(()=>{
  //   let i = 0
  //   while(i < 1000000000){
  //     i++
  //   }
  //   return count1 % 2 === 0
  // },[count1])

  return (
    <div>
      <Title />
        {/* <span>{isOdd ? 'Event': 'Odd'}</span> */}
      <Button handle1={handle1} title={`Counter 1 is: ${count1}`}>
        Increment Number by one
      </Button>
      <hr />
      <Button handle1={handle2} title={`Counter 2 is: ${count2}`}>
        Increment Number by five
      </Button>
    </div>
  )
}

export default App