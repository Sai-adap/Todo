import axios from "axios"
import { useEffect, useState } from "react"

const List =()=>{
    const[activities,setactivities]=useState([])
    useEffect(()=>{
        const data={
            username:localStorage.getItem("user")
        }
        console.log(data)
        axios.get("http://localhost:3002/show",{headers:data}).then((data)=>{
        setactivities(data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <>
        <table border={1} className='list-table'>
        <thead>
            <tr>
                <th bgcolor="blue">Activity</th>
                <th bgcolor="blue">Status</th>
                <th bgcolor="blue"><div>Time taken</div><div>(Hrs:Min:Sec)</div></th>
                <th bgcolor="blue">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                activities.map((element)=>{
                    return (
                        <tr>
                            <td>{element.activity}</td>
                            <td>{element.status}</td>
                            <td>{element.time}</td>
                            <td>
                                <button onClick={()=>element.status="pending"}>start</button>
                                &nbsp;&nbsp;
                                <button onClick={()=>element.status="ongoing"}>end</button>
                                
                            </td>
                        </tr>
                    )
                })
            }
           
        </tbody>
        </table>
        console.log(element.status)
        </>
        
    )
}
export default List