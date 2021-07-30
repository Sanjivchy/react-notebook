import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards() {
    return (
        <div className="body">
            {/* <div className="container  ">  */}
{
                <div className="flex justify-start  ml-61 sm:ml-60 lg:ml-60 ">
                 <Link to='#' className="  rounded-l-lg py-2 w-24 flex justify-center bg-gray-400 hover:bg-gray-700 "  > Notes</Link>         
                 <Link to='/' className=" mr-8 rounded-l-lg  py-2 w-24 flex justify-center bg-gray-400 hover:bg-gray-700"   > Resources</Link>
                </div>
          }
             
            {/* </div> */}
            
        </div>
    )
}

export default Cards
