import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Box} from '@mui/material'


import {Videos, ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
  const [channelDetail,setChannelDetail] = useState(null) 
  const [videos, setVideos] = useState([]) 

  const {channelId} = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?part=snippet&channelId=${channelId}&order=date`)
      .then((data) => setVideos(data?.items))
  },[channelId])

  return (
    <Box minHeight='95vh' >
      <Box>
        <div style={{ 
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px',
        }} />
          <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2' >
        <Box sx={{ mr: {sm: '100px'} }} />
        <Videos videos={videos} />
      </Box>

    </Box>
  )
}

export default ChannelDetail