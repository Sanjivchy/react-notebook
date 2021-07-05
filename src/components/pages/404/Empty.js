import React from 'react';
import img1 from './images/img1.svg';
import './empty.css';
import {Link} from 'react-router-dom';

function Empty() {
    return (
        <div className="w-screen h-screen">
             <img src={img1} className="absolute w-1/4 top-1/3 left-48"  alt="background"/>
            <div className="w-full h-full flex flex-col justify-center items-center background">
                <h1 className=" text-gray-800 text-size font-bold mb-0 pb-0 inline-block leading-3 h-32" >404</h1>
                <Link className="text-blue-700 font-medium text-4xl"> <p>This page is missing</p></Link>
            </div>
        </div>
    )
}

export default Empty
