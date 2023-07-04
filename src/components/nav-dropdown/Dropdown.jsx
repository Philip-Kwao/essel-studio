import React from 'react'
import './Dropdown.css'
import DropdownItem from './DropdownItem'
import { FaCompactDisc, FaCompressArrowsAlt, FaHeadphonesAlt, FaOutdent } from 'react-icons/fa'
import { BsMegaphoneFill } from "react-icons/bs";

const Dropdown = ({icon, title, detail}) => {
  return (
    <div className='dropdown__container'>
          <div className="dropdown__container_item">
            <DropdownItem title="Music Distribution" icon={<FaCompressArrowsAlt />} detail="Release to over 300 DSPs including Spotify, Apple, Amazon and more.
" />
            <DropdownItem title="Sync Licensing" icon={<FaCompactDisc />} detail="Pitch your music to feature on TV, movies and adverts." />
            <DropdownItem title="Artist Websites" icon={<FaOutdent />} detail="Build your showcase, get new fans and increase your revenue." />
            <DropdownItem title="Playlist Submission" icon={<FaHeadphonesAlt />} detail="Submit your music to premium playlists and curators." />
            <DropdownItem title="Music Promotion" icon={<BsMegaphoneFill />} detail="Promote your music and gain access to our promo team." />
          </div>
    </div>
  )
}

export default Dropdown