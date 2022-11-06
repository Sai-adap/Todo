import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"
const Createone=()=>{
    const navigate=useNavigate()
    const [activity,setactivity]=useState("")
    const handlecreate=()=>{
        if(activity.length){
            const username=localStorage.getItem("user")
            const data={
                username,
                activity
            }
            axios.post("http://localhost:3002/create",data).then(()=>{
            alert("activity created")
            navigate('/mainpage')
        }).catch((err)=>{
            console.log(err)
        })
        }else{
            alert("please enter details")
        }
        
    }
    return (
        <>
        <Header/>
        <Sidebar/>
        <div className="create-page">
        <input className="input-activity" placeholder="enter activity" onChange={(e)=>{setactivity(e.target.value)}}/>
        <button className="input-activity" onClick={handlecreate} >Submit</button>
        </div>

        </>
    )
}
export default Createone