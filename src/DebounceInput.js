import React, { useEffect, useState } from 'react'

export const DebounceInput = () => {

    const [searchValue,setSearchValue] = useState([]);
   const [debouncesearchValue,setDebounceSearchValue] = useState([]);
   
    const [input,setInput] = useState("");

    useEffect(()=>{


        const timeout=setTimeout(() => {
            setDebounceSearchValue(input);
        }, 1000);

        return ()=>clearTimeout(timeout);
    },[input])

   

     const fetchData= async(val)=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?email=${input}`);
        const data = await res.json();
        setSearchValue(data);

    }
   
//const inputval= Debounce(fetchData,500);
   
useEffect(()=>{
 fetchData(debouncesearchValue);
    },[debouncesearchValue])
   

const handleText=(text)=>{
setInput(text);
}
    
   
    return (
    <div><h1>DebounceInput</h1>
    <input type="text" placeholder='Search' value={input}
    onChange={(e)=>handleText(e.target.value)} />
    <span>{input}</span>
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
