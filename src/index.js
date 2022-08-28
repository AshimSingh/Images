import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'
import Data from './data.js'
import axios from 'axios'
const url ="https://randomuser.me/api"
function Myapp(){
    // const [data,setData]=React.useState(null);
    // useEffect(()=>{
    //     axios.get(url).then((response)=>{
    //         console.log(response.data.results)
    //         console.log(data)
    //     })
    // },[])
    
    return(
        <>
            <h1>Happy Krishna Janmastami</h1>
            <Data></Data>
        </>
    )
}
ReactDom.render(<Myapp></Myapp>,document.getElementById('root'))
