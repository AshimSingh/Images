import React from "react";
import {useState,useEffect} from 'react'
import Loading from "./loading";
const url ="https://picsum.photos/v2/list?page=2&limit=20"
const Data = ()=>{
    const [imageList,setImageList]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const fetchimage =async ()=>{
        
            try {
            const response = await fetch(url)
            const images = await response.json()
            setImageList(images)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.log(error)
        }
        
        }
    
    useEffect(()=>{
        fetchimage()
    },[])
    // return(
    //     <>
    //         <h1>Hello World</h1>
    //         {
    //             // console.log(imageList)
    //         }
    //     </>
    // )
    if(isLoading){
        return(
            <main>
                <Loading></Loading>
            </main>
        )
    }
    return(
        <>
            <h1>Data fetch complete</h1>
            {
                imageList.map((user)=>{
                    return(
                        <>
                            <h1>{user.id}</h1>
                            <h1>{user.author}</h1>
                            <img src={user.download_url} alt="ashim"></img>
                        </>
                    )
                })
            }
        </>
    )
}
export default Data