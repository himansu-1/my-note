import React,{useEffect} from 'react';


const Tesing = () => {
    const active = ()=>{
        console.log("I'm still running")
    }
    useEffect(() => {
        console.log("Hii i'm running")
        active()
    }, [])
    return <div className="m-5 p-5 b-5" onClick={active}>  Hello World </div>;
}


export default Tesing;