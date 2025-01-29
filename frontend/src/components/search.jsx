import React from 'react'
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";



const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-white rounded-[25px] relative p-2'>
        <input type="text" placeholder='Search ...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px] '/>
        <Button className='!absolute top-[8px] right-[5px] z-50 !w-[35px] !min-w-[35px] !rounded-full !text-black' ><IoSearch className='text-black'/></Button>
        </div>
  )
}

export default Search;
