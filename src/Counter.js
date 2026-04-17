

import React, { useState } from 'react'

export const Counter = () => {

    const [count,setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>setCount(count=>count+1)}>Increment</button>
        <span>{count}</span>
          <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
    </div>
  )
}
