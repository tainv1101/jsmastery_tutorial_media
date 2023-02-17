import React from 'react'
import {Stack}from '@mui/material'
import {Link} from 'react-router-dom'

import {logo} from '../utils/constants'
import {SearchBar} from '../components'
const Navbar = () => {
  return (
    <Stack direction='row' 
      p = {2}
      alignItems = 'center' 
      justifyContent = 'space-between' 
      sx={{position: 'sticky', backgroundColor: '#000', top:0}}
    >
      <Link to='/' style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt='' height={45} />
      </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar