import React from 'react';
import {Link} from 'react-router-dom';
import './Newnote.css';

import {CardItems} from './Cardlist';

function Cards() {
    return (
        <>
        {CardItems.map((item,index)=>{
            return(
                <article className="item--card">
                <h2 className="text-center font-bold text-lg capitalize text-gray-700 my-3">{item.Section}</h2>
                <div className="card--image bg-red-200 h-32 w-full max-w-full">
                    images
                </div>
                <div className="card--title">
                    <h3 className="text-center text-lg capitalize text-gray-700 my-2">{item.title}</h3>
                    <p className=" text-sm text-gray-500 capitalize text-left mb-8 h-16 overflow-auto" > {item.description}  </p>
                    <hr></hr>
                    <div className="flex justify-around mt-1 ">
                        <Link><i class="fas fa-trash-alt"></i></Link>
                        <Link><i class="fas fa-pen-nib"></i></Link>
                        <Link><i class="fas fa-bars"></i></Link>
                    </div>
                </div>
            </article>
                 )
             })};
        </>
    )
}

export default Cards
