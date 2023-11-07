import React, { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./Spinner"
import useGif from "../hooks/useGif"
const api_key='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'
const Randomgif=()=>{

    

    const {gif , loading , fetchdata}=useGif();



    return( <div className="mt-[40px] w-2/3  bg-green-400
      flex flex-col justify-evenly items-center mx-auto border-black border  rounded-lg " >
        <h1 className="text-3xl my-[15px] font-bold"  >Random Gif</h1>
        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} width="450" height="20" ></img>)
        }
        
        <button onClick={()=> fetchdata()} className="w-11/12 text-[25px] font-bold my-[20px] bg-yellow-400 rounded-md py-2">Generate</button>
    </div>
    )
}

export default Randomgif