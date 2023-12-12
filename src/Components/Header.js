import React from "react";
import pakistan from "../images/pakistan.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Mainheader from "./mainheader";
function Header() {
  return (
  
    <>
       <div className=" flex flex-row justify-evenly py-4 border border-purple-300 border-y-b-2 bg-gradient-to-r from-[#1f2b45] to-black-800"  >
       
        
       
       <div className="flex space-x-4 ">
          <img className="w-6 h-6" src={pakistan} alt="Pakistan" />
          <img className="w-6 h-6" src={pakistan} alt="Pakistan" />
          <img className="w-6 h-6" src={pakistan} alt="Pakistan" />
        </div>
               <div className=" flex flex-row space-x-4 "   >
         
        
          <div className="flex flex-row space-x-1 items-center" >
            <div>
              <FaPhoneAlt />
            </div>
            <div> +923057538955 </div>
          </div>
          <div className="flex flex-row space-x-1 items-center" >
            <div>
              <MdOutlineEmail/>
               </div>
            <div>waytosohaib@gmail.com </div>
          </div>
        </div>
        <div> Reach Us</div>
        <div className="flex flex-row space-x-4" >
          <div> 
            <FaFacebookF />
          </div>
          <div> 
            <FaInstagram />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div></div>
        </div>
      </div>

                < Mainheader /> 
    </>


  );

}

export default Header;
