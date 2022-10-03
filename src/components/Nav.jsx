import React, { useState } from "react";
import {AiOutlineHome, AiOutlineContacts, AiOutlineCustomerService, AiOutlineCode,} from "react-icons/ai"
function Nav  ()  {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav className="z-10 left-2/4 -translate-x-1/2 grid fixed grid-cols-5 bottom-10 gap-3 self-center justify-center items-center m-auto bg-black/50 px-4 rounded-full backdrop-blur-lg">
        <a href="#"  onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /> </a>

        <a href="#about"  onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ''}><AiOutlineContacts /> </a>
        <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineCode/> </a>
        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ''} ><AiOutlineCustomerService /> </a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts /> </a>    

        </nav>

    )}
    export default Nav;