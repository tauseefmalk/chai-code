import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setdata]=useState({}) //{} empty object so the site dont crash
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data);
    },[currency]); // useEffect basically call when it loads or someone used.
    console.log(data);
    return data   
}

export default useCurrencyInfo;