import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {AiOutlineHome, AiOutlineSearch} from "react-icons/ai";
import {HiOutlineCollection} from "react-icons/hi";
import {VscVerified} from "react-icons/vsc";
import {BsLightningCharge} from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-5 items-center justify-between h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl' >
            <HeaderItem title="HOME" Icon={AiOutlineHome}/>
            <HeaderItem title="TRENDING" Icon={BsLightningCharge}/>
            <HeaderItem title="VERIFIED" Icon={VscVerified}/>
            <HeaderItem title="COLLECTIONS" Icon={AiOutlineHome}/>
            <HeaderItem title="SEARCH" Icon={AiOutlineSearch}/>
            <HeaderItem title="ACCOUNT" Icon={MdPersonOutline}/>
        </div>
        <div className="-mt-6">
            <Image src="/img/hulu_logo.png" alt="logo" className='object-contain' width={62.5} height={25}/>
        </div>
        
    </header>
  )
}

export default Header