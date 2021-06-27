import React from 'react'
import {Link }  from 'react-router-dom';


function Footer() {
    return (
        <div>
           <footer className="bg-gray-200 pt-14">
            <div className="max-w-6xl m-auto ">
                <div className="flex flex-wrap ">
                    <div className="w-full px-4 mb-8 md:w-3/12 sm:w-9/12 ">
                        <h4 className="relative text-lg font-medium text-gray-900 capitalize mb-9">Company</h4>
                        <ul className="flex flex-col justify-start">
                              <Link to="#"><li className="pl-0"><i className="block text-base font-medium text-gray-600 capitalize " >about hamronote</i></li></Link>
                              <Link to="#"><li className="pl-0"><i className="block text-base font-medium text-gray-600 capitalize " >address</i></li></Link>   
                              <Link to="#"><li className="pl-0"><i className="block text-base font-medium text-gray-600 capitalize " >contact</i></li></Link>   
                              <Link to="#"><li className="pl-0"><i className="block text-base font-medium text-gray-600 capitalize " >find us</i></li></Link>   
                        </ul>
                        
                    </div>
                    <div className="w-full px-4 mb-8 md:w-3/12 sm:w-9/12">
                        <h4 className="relative text-lg font-medium text-gray-900 capitalize mb-9">Contact</h4>
                        <ul>
                           <Link to="#"> <li className="pl-0"> <i className="block text-base font-medium text-gray-600 capitalize" >gfdgd</i></li></Link>
                           <Link to="#"> <li className="pl-0"> <i className="block text-base font-medium text-gray-600 capitalize" >gfdgd</i></li></Link>
                           <Link to="#" > <li className="pl-0"> <i className="block text-base font-medium text-gray-600 capitalize" >gfdgd</i></li></Link>
                           <Link to="#"> <li className="pl-0"> <i className="block text-base font-medium text-gray-600 capitalize" >gfdgd</i></li></Link>

                           
                        </ul> 
                    </div>
                    <div className="w-full px-4 mb-8 md:w-3/12 sm:w-9/12">
                        <h4 className="relative text-lg font-medium text-gray-900 capitalize mb-9">nav links</h4>
                        <ul>
                            <Link to="#"><li> <i className="block text-base font-medium text-gray-600 capitalize " >new notes</i></li></Link>
                            <Link to="#"><li> <i className="block text-base font-medium text-gray-600 capitalize " >Show the notes</i></li></Link>
                            <Link to="#"><li> <i className="block text-base font-medium text-gray-600 capitalize " >sign in</i></li></Link>
                            <Link to="#"><li> <i className="block text-base font-medium text-gray-600 capitalize " >nhelp</i></li></Link>
                        </ul>
                    </div>
                    <div className="w-full px-4 mb-8 md:w-3/12 sm:w-9/12">
                        <h4 className="relative text-lg font-medium text-gray-900 capitalize mb-9">Follow us</h4>
                        
                        <div className="flex">
                            <Link to="#" className=" h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 "><i className="fab fa-facebook"></i></Link>
                            <Link to="#" className="h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 "><i className="fab fa-instagram"></i></Link>
                            <Link to="#"  className="h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 "><i className="fab fa-twitter"></i></Link>
                            <Link to="#" className="h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 " ><i className="fab fa-tiktok"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bg-gray-300 h-7">
                <h3>Terms • Privacy • © 2021 Sanjivchy</h3>
            </div>
        </footer> 
        </div>
    )
}

export default Footer
