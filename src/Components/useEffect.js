import React, { useEffect, useState } from "react";

export default function UseEffect(){

    const [count, handleCount] = useState(0)
    const [date, useDate] = useState(new Date())
    // const [text, handleText] = useState('')

    const handleClick = ()=>{
        handleCount((prev)=>
            prev + 1
        )
    }

    useEffect(()=>{
        console.log('tick function is rendered');
        const interval = setInterval(tick, 1000)

       return ()=>{
        clearInterval(interval)
       }

    },[])

    function tick(){
        console.log('thick function is rendered')
        useDate(new Date())
    }
    // const handleChange = (e)=>{
    //     handleText(e.target.value)
    // }
    
    useEffect(()=>{
        console.log('click rendered')
        document.title = `clicked ${count} times`
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick}>Click</button>
            {/* <p>{text}</p> */}
            {/* <input type="text" onChange={handleChange}/> */}

            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}