import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import logo from "../../assets/images/netflixLogo.png"
import PP from "../../assets/images/download.jpg"
import "./navbar.scss"
import { useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIscrolled] = useState(false)
    window.onscroll = () => {
        setIscrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={logo} alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icons' />
                    <span>Kid</span>
                    <Notifications className='icons' />
                    <img src={PP} alt="" />
                    <div className="profile">
                        <ArrowDropDown className='icons' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar