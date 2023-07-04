import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Social from '../social/Social'
import Dropdown from '../nav-dropdown/Dropdown'
import AboutDropdown from '../nav-dropdown/AboutDropdown'
import ArtistDropdown from '../nav-dropdown/ArtistDropdown'
import MusicPromo from '../nav-dropdown/MusicPromo'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false)

  const handleOnClick = () => {
    setIsOpened(!isOpened)
  }

  return (
    <div className='navbar__container'>
      <div className='navbar__items'>
        <div className='logo'>essel studios</div>
        <div className="nav__mobile" id={isOpened ? 'open' : 'close'}>
          <div className="mobile__links">
            <div className="nav__link_mobile">
              <NavLink className='navigate__link' to={'/'}>home</NavLink>
            </div>
            <div className="nav__link_mobile nav__hover">
                about
              <div className="navbar__dropdown_item">
                <AboutDropdown />
              </div>
            </div>
            <div className="nav__link_mobile nav__hover">
                artists hub
                <div className="navbar__dropdown_item">
                  <ArtistDropdown />
              </div>
            </div>
            {/* <div className="nav__link_mobile nav__hover">
                promotion
                <div className="navbar__dropdown_item">
                <MusicPromo />
              </div>
            </div> */}
            {/* <div className='nav__link_mobile'>

            <NavLink className='navigate__link' to={'rental'}>Rental</NavLink>
            </div> */}
            <div className="nav__link_mobile">
             <NavLink className='navigate__link' to={'contact'}>contact</NavLink>
            </div>
          </div>
          <div className="mobile__social">
            <Social />
          </div>
        </div>


        <div className="links">
          <NavLink className='nav__link' to={'/'}>home</NavLink>
          <div className="nav__link nav__hover">
              about
            <div className="navbar__dropdown_item">
              <AboutDropdown />
            </div>
          </div>
          <div className="nav__link nav__hover">
              artists hub
              <div className="navbar__dropdown_item">
                <ArtistDropdown />
            </div>
          </div>
          {/* <div className="nav__link nav__hover">
              promotion
              <div className="navbar__dropdown_item">
              <MusicPromo />
            </div>
          </div> */}
          {/* <NavLink className='nav__link' to={'rental'}>Rent An Instrument</NavLink> */}
          <NavLink className='nav__link' to={'contact'}>contact</NavLink>
        </div>
        <div className="social__nav">
          <Social />
        </div>
        <div className="hamburger">
          <FaBars onClick={handleOnClick} />
        </div>
      </div>
    </div>
  )
}

export default Navbar