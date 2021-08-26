import React,{useState,useEffect} from 'react'
const axios = require('axios');


export default (url,options = null) => {

    const [data,setData] = useState([])


    const getDataFromApi = async() => {
       
        try{
        const response = await axios.get(url,options)
        const result = await response.data
        setData(result)

        }
        catch(error){
            console.log(error)
        }
        
    }

     
    useEffect(()=>{
        getDataFromApi()
    },[])

    return [data,setData]
}