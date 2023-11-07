import React from "react";
import { useState , useEffect } from "react";

const api_key='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const randomurl= `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`


const useGif= (tag)=>{

    const [gif , setGif]=useState("");
    const [loading , setLoading]= useState(false);

    const tagurl=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`
   
   
    async function fetchdata(tag){
        setLoading(true);
        const url= await fetch(tag ? tagurl : randomurl);
        const {data}=await url.json();
        
        const imagesrc= data.images.downsized_large.url
        setGif(imagesrc);
        setLoading(false);
    }

    useEffect(()=>{
        fetchdata(tag);
       
        
    },[]);

    return {gif , loading , fetchdata};

}




export default useGif;