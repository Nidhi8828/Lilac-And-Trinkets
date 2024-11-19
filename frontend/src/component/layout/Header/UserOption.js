import React,{Fragment, useState}from 'react'
import "./Header.css"
import { SpeedDial,SpeedDialAction } from '@mui/material'
import { logout } from '../../../actions/userAction'
import { useDispatch } from 'react-redux'
const UserOption = ({user}) => {
    const [open,setOpen]=useState(false)
    function logoutUser(){
        // dispatch(logout())
        alert.success("logout successfullys")
    }
  return (
    <Fragment>
        <SpeedDial ariaLabel='SpeedDial tolltip example'>
onClose={()=>setOpen(false)}
onOpen={()=>setOpen(true)}
open={open}
icon={<img className="speedDialIcon"
src="/Profile.png"
/>}
        </SpeedDial>
        </Fragment>
  )
}

export default UserOption