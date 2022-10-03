import React from "react";
import CTA from "./Cta";
import ME from "../assets/me.png";
import HeaderSocials from "./HeaderSocials";
function Header  ()  {
    return (
       <header className=" pt-14 overflow-x-hidden"> 
      <section className="text-center relative">
      <HeaderSocials />
        <h5 className="text-sm"> Hello I'm</h5>
        <h1>Sohan</h1>
        <h5 className="text-white text-clip"> Fullstack Developer</h5>
        <CTA />
        <div className="relative bg-gradient-to-t from-transparent to-primary mx-auto w-10/12 lg:w-4/12 h-96 overflow-hidden mt-16 rounded-tr-full rounded-tl-full pt-8">
            <img src={ME} alt="myself" className="mx-auto h-full w-full md:w-10/12 object-contain"/>
        </div>
        <div className="rotate-90 text-sm absolute -right-9 bottom-20">
        <a href="#contact" className=""><p >Scroll Down</p></a>

        </div>

      </section>
      
       </header>
    )}
    export default Header;