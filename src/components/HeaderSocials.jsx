import React from 'react';
import {AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillGithub} from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className='flex flex-col items-center gap-y-3 absolute left-0 bottom-6 text-lg after:w-[1px] after:h-12 after:bg-primary'>
        <a href="https://linkedin.com" target="_blank"><AiFillLinkedin /></a>   
        <a href="https://linkedin.com" target="_blank"> <AiFillFacebook /></a>    
 
        <a href="https://linkedin.com" target="_blank"> <AiFillGithub /></a> 
        <a href="https://linkedin.com" target="_blank"> <AiFillTwitterCircle /></a>    


    </div>
  )
}

export default HeaderSocials