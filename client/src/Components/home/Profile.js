import React, { useState } from 'react'
import Cookies from 'js-cookie';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Menu, Box, MenuItem,styled } from '@mui/material';

const Component = styled(Menu)`
    margin-top : 5px;
`;

function Profile({email, setEmail, setToken}) {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logout = () => {
        Cookies.remove('auth_token')
        setEmail('')
        setToken('')
    }

  return (
    <div>
        <Box style={{ cursor : "pointer", display : 'flex', gap:'0.2rem'}}  onClick={(event) => handleClick(event)}>
            <AccountCircleIcon color="primary"/>
            <Typography style={{marginTop : 2}}>{email}</Typography>
        </Box>
        <Component
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
        >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem  onClick={() => {handleClose(); logout();}}>
                <LogoutIcon style={{ fontSize:20, paddingRight:4 }} color = "primary"/>
                <Typography>Logout</Typography>
            </MenuItem>
        </Component>
    </div>
  )
}

export default Profile