import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos ,ChannelCard} from './' 
import { FetcFromAPI } from '../Utils/FetchFromAPI'
const ChannelDetail = () => {
  const {id} =useParams();
  const [ChannelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  console.log(ChannelDetail,videos)
  useEffect(()=>{
    FetcFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
  
    FetcFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  },[id])
  return (
    <Box>
      {id}
    </Box>
  )
}

export default ChannelDetail
