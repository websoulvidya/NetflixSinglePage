
import axios from '../axios'
import React,{useState,useEffect} from 'react'
import YouTube from 'react-youtube'
import {imageURL,API_KEY} from "../../constants/Constants"
import './RowPost.css'


function RowPost(props) {

const [movies,setMovies] =  useState([])
const [urlId,setUrlId] = useState('')
useEffect(() => {
axios.get(props.url).then((response)=>{
    setMovies(response.data.results)
}).catch((error)=>{
    alert("error")
})
}, [])
const opts = {
    height: '390',
    width: '100%',
    playerVars: {
     
      autoplay: 0,
    },
  };

  function youTubeVideoHandler(youTubeId){
   axios.get(`/movie/${youTubeId}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    setUrlId(response.data.results[0])
   })
  }
  
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((item)=>{
                    return(
                        <img className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={imageURL+item.backdrop_path} onClick={()=>youTubeVideoHandler(item.id)}/>
                    )
                })}
           
            </div> 
         { urlId && <YouTube videoId={urlId.key} opts={opts}   /> }  
        </div>
    )
}

export default RowPost