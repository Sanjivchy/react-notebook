import React from 'react'

import Img1 from '../pages/home/images/img1.png';

function Container() {
    return (
        <div>
            <div className="font-mono font-medium not-italic absolute w-20 h-1.5 ml-96 mt-1.5 text-2xl flex items-center text-center text-black">account</div>
            <img className="absolute w-36 h-36 ml-96 mt-16 rounded-2xl shadow-2xl drop-shadow-3xl" src={Img1} alt="iamges"/> 
            
               <form action="">
               <input className="absolute w-52 h-6 ml-106 mt-24 border box-border rounded-sm text-gray-600" type="text" name="name" />
                <input className="absolute w-52 h-6 ml-106 mt-32 border box-border rounded-sm text-gray-600"  type="text" name="name" />
            
                <textarea className="absolute w-52 h-16 ml-106 mt-40 bg-gray-300 border box-border rounded-sm text-gray-600 inline-block align-top "  type="text" name="name" />
              <div className="absolute w-52 h-0 ml-106  mt-60 border "></div>
                <label className="font-mono font-normal not-italic absolute w-28 h-5 ml-96 mt-60 text-base flex items-center text-center text-black">Social Links</label>

               </form>
        </div>
    )
} 

export default Container
