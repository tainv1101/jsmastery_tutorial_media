import React from 'react'
import {Link} from 'react-router-dom'
import {Card,CardMedia,CardContent, Typography} from '@mui/material'
import {demoChannelTitle, demoVideoUrl, demoChannelUrl, demoThumbnailUrl, demoVideoTitle} from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({video: {id:{videoId}, snippet} }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm:'358px', md: '320px'}, boxShadow:'none', borderRadius: 0 }} > 
      <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl} >
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl }
       alt='' sx={{width:{xs:'100%', sm:'358px', md: '320px'}, height:180}} />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: 106}} >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <Typography variant ='subtitle1' fontWeight='bold' color='#FFF' >
            {snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>

        <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl} 
          style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Typography variant ='subtitle2' fontWeight='bold' color='gray' >
            {snippet.channelTitle || demoChannelTitle}
          </Typography>
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}  />
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard