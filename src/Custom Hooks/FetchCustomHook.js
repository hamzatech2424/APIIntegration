import React,{useState,useEffect} from 'react'



export default (url,options = null) => {
    
const [data,setData] = useState([])

const FetchDataFromApi = async() => {

try{
    const response = await fetch(url,options)
    const result = await response.json()
    return setData(result)
}
catch(error){
    console.log(error)
}

}

useEffect(()=>{
    FetchDataFromApi()
},[])


return [data,setData]

}