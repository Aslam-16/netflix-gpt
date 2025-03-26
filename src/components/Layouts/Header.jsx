import React from 'react'
import Logo from '../../assets/Netflix_Logo.png'

const Header = () => {
  return (
    <header className="flex justify-between w-auto px-25 py-8 items-center">
        <div className="logo flex ">
            <img src={Logo} alt="" srcset="" className='w-[100%]' />
        </div>
        <div className='menu flex flex-1 justify-end gap-4'>
            <select name="" id="" className='border-1 p-2 rounded-sm'>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
            <button className='signin bg-[#B20710] p-2 rounded-sm'>Sign In</button>
        </div>

    </header>
  )
}

export default Header