import { Box } from "@mui/material"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Navbar,Feed,SearchFeed,VideoDetail,ChannelDetail} from './components'
const App = () => {
  return (
    <Router>
     <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Feed/>} />
          <Route path="/video/:videoId" element={<VideoDetail/>} />
          <Route path="/channel/:channelId" element={<ChannelDetail/>} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        </Routes>
     </Box>

    </Router>
  )
}

export default App