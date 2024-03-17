import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos} from './Videos'
import { FetcFromAPI } from '../Utils/FetchFromAPI'
import ChannelCard from './ChannelCard';
const ChannelDetail = () => {
  const {id} =useParams();
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    FetcFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))
  
    FetcFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,85,1) 0%, rgba(0,212,255,1) 100%)",zIndex:10,height:'300px'}}/>
      <ChannelCard channelDetail={channelDetail} marginTop='-93px'/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
