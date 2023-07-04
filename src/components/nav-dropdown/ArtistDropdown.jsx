import React from 'react'
import { FaBullhorn, FaFileContract, FaGlobe, FaHeadphonesAlt, FaRegFileAlt, FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DropdownItem from './DropdownItem'

const ArtistDropdown = () => {
  return (
    <div className='dropdown__container'>
          <div className="dropdown__container_item">
            <Link className='drop__link' to={'music-distribution'}>
                <DropdownItem title={'Music Distribution'} icon={<FaShareAlt />} detail="We help you distribute your music across all major streaming platforms." />
            </Link>
            <Link className='drop__link' to={'artiste-website'}>
                <DropdownItem title={'Artiste Website'} icon={<FaGlobe />} detail="Maximize your reach by building a professional artiste website." />
            </Link>
            <Link className='drop__link' to={'music-promotion'}>
                <DropdownItem title={'Music Promotion'} icon={<FaBullhorn />} detail="Maximize the Impact of your music by harnessing the Power of Sync Licensing for Unforgettable Soundtracks." />
            </Link>
            {/* <Link className='drop__link' to={'licensing'}>
                <DropdownItem title={'Music Licensing'} icon={<FaFileContract />} detail="Copyright your music to enjoy your royalties and compensation attributed to your music." />
            </Link> */}
        </div>
    </div>
  )
}

export default ArtistDropdown