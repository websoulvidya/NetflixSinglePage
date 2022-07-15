import React,{useState,useEffect} from 'react'
import axios from "../axios"
import {API_KEY,imageURL} from "../../constants/Constants"
import "./Banner.css"
function Banner() {
  const [trendMovie,setTrendMovie] = useState([])
  useEffect(() => {
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setTrendMovie(response.data.results[0])
      console.log(response.data.results[0])
   
  })
  }, [])
 
  return (
     <div style={{backgroundImage:`url(${trendMovie? imageURL+trendMovie.backdrop_path : "" })`}} 
    className='banner'>
        <div className='content'>
            <h1 className='title'> {trendMovie ? trendMovie.title : ""}</h1>
            {/* <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div> */}
            <h1 className='description'>{trendMovie ? trendMovie.overview : ""}</h1>
        </div>
 <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner