import React, { useEffect, useState } from 'react'

export const DebounceInput = () => {

    const [searchValue,setSearchValue] = useState([]);
   
    const [input,setInput] = useState("");

    function Debounce(fn,delay){

        let timeoutId=0;
        return function(...args)
        {
            clearTimeout(timeoutId);
            timeoutId= setTimeout(()=>{
                fn(...args)
            },delay);
            
        }

    }


     const fetchData= async(val)=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?email=${val}`);
        const data = await res.json();
        setSearchValue(data);

    }
   
const inputval= Debounce(fetchData,500);
   
useEffect(()=>{
 inputval(input);
    },[input,inputval])
   


    
   
    return (
    <div><h1>DebounceInput</h1>
    <input type="text" placeholder='Search' value={input}
    onChange={(e)=>setInput(e.target.value)} />
     <div><ul>
        {
            searchValue.map(item=> {
            return <li key={item.id}>
                <span>{item.name}</span>  <span>{item.email}</span>
                <p>{item.body}</p></li>
})
}</ul>
</div>
    </div>
  )
}
