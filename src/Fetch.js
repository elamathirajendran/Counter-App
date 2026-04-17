
import React, { useEffect, useState } from 'react'

export const Fetch = () => {


    const [data,setData] =useState([]);

    const fetchApi = async ()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const datas = await res.json();

        setData(datas);
    }
    useEffect(()=>
    {
        fetchApi();

    },[])
  return (
    <div><h1>Fetch Api</h1>
    <ul>
        {
            data.map(item=> {
            return <li key={item.id}>
                <span>{item.title}</span>
                <p>{item.body}</p></li>
})
}</ul></div>

  )
}
