import React from "react";
import ME from "../assets/me-about.jpg";
import {AiOutlineHome, AiOutlineContacts, AiOutlineFile} from "react-icons/ai"
function About  ()  {
    return (
        <section className="py-6 sm:py-0 lg:pt-12" id="about">
           <h5 className="text-xs"> Get to Know </h5>
           <h2> About Me</h2>


           <div className="grid lg:grid-cols-2 grid-flow-row lg:py-16 py-8 gap-8 place-items-center">



            <div className="grid w-10/12 md:w-4/6 place-items-center justify-end align-middle bg-gradient-to-tr from-primary to-transparent aspect-square rounded-3xl">
            <img src={ME} alt="about-me"  className="my-auto w-full rounded-3xl rotate-12 hover:rotate-0 ease-in-out 200ms transition-all"></img>
            </div>



            <div className="grid grid-cols-3 gap-4 my-4">
                <div className="col-span-3 sm:col-auto py-2 sm:px-8 sm:py-6 place-items-center grid w-full border border-transparent hover:border-pv  rounded-3xl ease-in-out transition-all 500ms bg-gradient-to-t from-bg-variant to-transparent hover:bg-transparent">
                
                    <div className=" text-primary text-lg sm:mb-4 mt-2">
                        <AiOutlineHome />
               
                    </div>
                    <h5 className="text-white text-sm">Experience</h5> 
                     <p className="text-light text-xs">3+ Years Working</p>
                 </div>

                <div className="col-span-3 sm:col-auto py-2 sm:px-8 sm:py-6 place-items-center grid w-full border border-transparent hover:border-pv  rounded-3xl ease-in-out transition-all 500ms bg-gradient-to-t from-bg-variant to-transparent hover:bg-transparent">
                <div className=" text-primary text-lg sm:mb-4 mt-2">
                <AiOutlineHome />

                </div>
                 <h5 className="text-white text-sm">Experience</h5> 
                 <p className="text-light text-xs">3+ Years Working</p>
                </div>
                <div className="col-span-3 sm:col-auto py-2 sm:px-8 sm:py-6 place-items-center grid w-full border border-transparent hover:border-pv  rounded-3xl ease-in-out transition-all 500ms bg-gradient-to-t from-bg-variant to-transparent hover:bg-transparent">
                <div className=" text-primary text-lg sm:mb-4 mt-2">
                <AiOutlineHome />

                </div>
                 <h5 className="text-white text-sm">Experience</h5> 
                 <p className="text-light text-xs">3+ Years Working</p>
                </div>

                <div className="grid col-span-3">
                    <article className="text-light text-sm text-center sm:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sit iure sed earum qui asperiores, esse dolor veritatis magni reprehenderit ullam distinctio sequi rerum dolorum soluta minima ab quo fugit?</article>
                </div>
                <div className="w-full col-span-3 grid place-items-center sm:place-items-start">
                    <button className="bg-primary ">Let's Talk</button>
                </div>
            </div>
           </div>
        </section>
    )}
    export default About;