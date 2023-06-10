import React, { useState } from "react"

export const OnOff =()=>{
    let [on,setOn]=useState(false)

    const onStyle={
        width:'30p',
        height:'20px',
        border:"1px solid black",
        padding:'5px',
        display:'inline-block',
        backgroundColor: on===true? "green":"white"
    }
    const offStyle={
        width:'30p',
        height:'20px',
        border:"1px solid black",
        padding:'5px',
        display:'inline-block',
        backgroundColor: on===true? "white":"red"
    }
    const indicatorStyle={
        width:'10px',
        height:'10px',
        borderRadius:'5px',
        border:"1px solid black",
        display:'inline-block',
        marginLeft:'5px',
        backgroundColor: on===true? "green":"red"
    }

    return(
        <div>
          <div style={onStyle} onClick={()=>{setOn(true)}}>On</div>
          <div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>  
          <div style={indicatorStyle}></div>    
        </div>
    )
}  