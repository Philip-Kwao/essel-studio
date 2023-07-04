import React from 'react'
import { FaRegWindowMaximize } from 'react-icons/fa'

const DropdownItem = ({title, icon, detail}) => {
  return (
    <div className='dropdownitem__container'>
        <div className="dropdown__title">
            <span className='dropdown__title_icon'>
                {icon}
            </span>
            <span className='dropdown__title_item'>
                {title}
            </span>
            </div>

            <div className="dropdown__detail">
                {detail}
            </div>

    </div>
  )
}

export default DropdownItem