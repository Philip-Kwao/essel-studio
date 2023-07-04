import React from 'react'
import DropdownItem from './DropdownItem'
import { FaFileContract, FaImages, FaInfoCircle, FaMoneyBillWave } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { BsFillDiscFill } from 'react-icons/bs'

const AboutDropdown = () => {
  return (
    <div className='dropdown__container'>
          <div className="dropdown__container_item">
            <Link className='drop__link' to={'about'}>
                <DropdownItem title={'About Us'} icon={<FaInfoCircle />} detail="Get to know more about us, what we do and what we stand for" />
            </Link>
            <Link className='drop__link' to={'service'}>
                <DropdownItem title="Our Services" icon={<BsFillDiscFill />} detail="We are kin on providing the best and quality Gospel records in ghana." />
            </Link>
            <Link className='drop__link' to={'gallery'}>
                <DropdownItem title="Gallery" icon={<FaImages />} detail="Release to over 300 DSPs including Spotify, Apple, Amazon and more." />
            </Link>
            <Link className='drop__link' to={'pricing'}>
                <DropdownItem title="Pricing" icon={<FaMoneyBillWave />} detail="Pitch your music to feature on TV, movies and adverts." />
            </Link>
            {/* <Link className='drop__link' to={'terms-and-conditions'}>
                <DropdownItem title="Terms And Conditions" icon={<FaFileContract />} detail="Build your showcase, get new fans and increase your revenue." />
            </Link> */}
        </div>
    </div>
  )
}

export default AboutDropdown