import React, { useEffect, useState } from "react"
import './Home.css'
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Home(){
    let [userData,updateUserData] = useState([])
    let [isLoading,updateIsLoading] = useState(true)
    let counter = useSelector((state)=>state.counter)
    useEffect(()=>{
        updateIsLoading(true)
        let fetchHomeData = async()=>{
            let resp = await fetch('https://jsonplaceholder.typicode.com/todos')
            //let resp = await fetch('http://localhost:4000/sample');
            let data = await resp.json();
            updateUserData(data)
        }
        setTimeout(()=>{
            updateIsLoading(false)
            fetchHomeData();
        },4000)
        
    },[])
    return(
        < React.Fragment >
     <h1>Home</h1>
     {isLoading && <h1>Loading...</h1>}
     <div className="resp-container">
        {userData.map((data)=>{
            return <div className="card">
                        <p>{data.id}</p>
                        <p>{data.title}</p>
                    </div>
        })
    
}
     </div>
     </React.Fragment>
    )
}