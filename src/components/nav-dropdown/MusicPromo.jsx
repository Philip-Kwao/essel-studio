import React from 'react'
import './Dropdown.css'
import { Link } from 'react-router-dom'
import DropdownItem from './DropdownItem'
import { FaFileContract, FaInfoCircle, FaMoneyBillWave, FaNewspaper } from 'react-icons/fa'
import { BsBullseye } from 'react-icons/bs'

const MusicPromo = () => {
  return (
    <div className='dropdown__container'>
          <div className="dropdown__container_item">
            <Link className='drop__link' to={'music-promotion'}>
                <DropdownItem title={'Promotion'} icon={<FaInfoCircle />} detail="Amplify Your Sound: Dynamic Music Promotion Strategies to Boost Your Reach and Impact." />
            </Link>
            <Link className='drop__link' to={'music-promotion'}>
                <DropdownItem title="Spotify Promotion" icon={<FaMoneyBillWave />} detail="Pitch your music to feature on TV, movies and adverts." />
            </Link>
            <Link className='drop__link' to={'music-promotion'}>
                <DropdownItem title="Radio Promotion" icon={<FaFileContract />} detail="Build your showcase, get new fans and increase your revenue." />
            </Link>
            <Link className='drop__link' to={'music-promotion'}>
                <DropdownItem title="Music Marketing" icon={<BsBullseye />} detail="Build your showcase, get new fans and increase your revenue." />
            </Link>
            <Link className='drop__link' to={'music-promotion'}>
                <DropdownItem title="Press" icon={<FaNewspaper />} detail="Build your showcase, get new fans and increase your revenue." />
            </Link>
        </div>
    </div>
  )
}

export default MusicPromo