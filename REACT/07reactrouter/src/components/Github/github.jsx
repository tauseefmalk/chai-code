import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function github() {
    const data= useLoaderData()   // will load optimisly when hover
    
    // const [data, setData]=useState([])
    // useEffect(()=>{ // fetch data from api when it loads
    //     fetch('http://api.github.com/users/tauseefmalk')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    return (
        <div className='bg-gray-700 text-white text-3xl p-4 '>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="Github img"  />
        </div>
    );
}

export default github;

export const githubInfoLoader = async()=>{
    const response= await fetch("http://api.github.com/users/tauseefmalk")
    return response.json()
}