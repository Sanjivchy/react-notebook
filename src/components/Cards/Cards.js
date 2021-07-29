import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards() {
    return (
        <div className="body">
            <div className="container mx-auto "> 
{
                <div className="flex justify-start space-x-6 ml-60 sm:ml-60 lg:ml-60 ">
                 <Link to='#' className="w-24 flex justify-center " style={{color:"white", backgroundColor:"purple", borderRadius:'30px'}} > Notes</Link>         
                 <Link to='/' className="w-24 flex justify-center" style={{color:"white", backgroundColor:"purple", borderRadius:'30px'}}  > Resources</Link>
                </div>
          }
             
            </div>
            
        </div>
    )
}

export default Cards
