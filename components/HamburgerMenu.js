import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu'
import Fab from '@material-ui/core/Fab'

const linkStyle = {
  display: 'block',
  textDecoration: 'none',
  width: '100%'
}

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Fab
        size='small'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon height='24px' width='24px' />
      </Fab>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Link href='/'>
            <a style={linkStyle}>Homepage</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/add-blog-post'>
            <a style={linkStyle}>Add blog post</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/about'>
            <a style={linkStyle}>About us</a>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
