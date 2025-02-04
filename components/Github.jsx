import React, { useEffect, useState } from "react";
function Github(){

     const [data,setdata]=useState([])

    useEffect(()=>{

        fetch("https://api.github.com/users/yadavrohan45").then(response=>response.json()).then(data=>{
            setdata(data)

        })
        
    },[])




    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Follower:{data.followers}
        <img src={data.avatar_url} alt="git pic" width={300}/>
        
        </div>
    )
}
export default Github