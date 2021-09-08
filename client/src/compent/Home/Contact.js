import React,{useState,useEffect} from 'react'
import Address from './Address'
import RecharcheBar from './RecharcheBar'
import DenseAppBar from './Navbar'
import Carouseel from './Carouseel'
import Product from './Product'
import AppBar from '@material-ui/core/AppBar';

import Sponsur from './Sponsur'
import Box from '@material-ui/core/Box';
import {useDispatch,useSelector} from 'react-redux'
import Menu from './Menu'
import TogelMenu01 from './TogelMenu'
import {CatgoriesAdd} from '../../compent/js/action/authActions'
import {Link} from 'react-router-dom'
import Nouvetes from './Nouvetes'
import Aos from 'aos'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import "aos/dist/aos.css"
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import BusinessIcon from '@material-ui/icons/Business';
const Contact = () => {
    const [TogelMenu , setTogelMenu]=useState(false)
    const MenuTogel = ()=>{
        setTogelMenu(!TogelMenu)
    }
    return (
        <div>
        <div>
           
           <Address data-Aos="fade"/>
           <RecharcheBar />
           <AppBar style={{backgroundColor:"#1F2649"}} position="sticky">
           <DenseAppBar  MenuTogel={MenuTogel}/>
           <TogelMenu01 TogelMenu={TogelMenu}/>
           </AppBar>
                <div className="py-10 pl-20 flex" style={{backgroundColor:"#F0F2F5",height:"610px" , justifyContent:"center" }}>
                    <Box >
                    <Box boxShadow={5} style={{backgroundColor:"#FFFFFF" , height:"400px" ,paddingLeft:"20%" , paddingTop:"5%" , marginTop:"10%"}} className="ml-90 w800TestRespoive ">
                    <div className="flex mb-10">
                    <ContactMailIcon style={{color:"#1F2649" ,fontSize:"50px"}}/> 
                    <p className="pl-10 pt-2">bigsat102@bigsat.com.tn</p>
                    </div>
                    <div className="flex mb-10">
                        <PhonelinkRingIcon style={{color:"#1F2649" ,fontSize:"50px"}}/>
                        <p className="pl-10 pt-2">71701002</p>
                    </div>
                    <div className="flex">
                        <BusinessIcon style={{color:"#1F2649" ,fontSize:"50px"}}/> 
                        <p className="pl-10 pt-2">4 av al anouar</p>
                    </div>
                    </Box>
                    </Box>
                   
                </div>
         </div>
         
        </div>
    )
}

export default Contact
