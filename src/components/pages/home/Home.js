import React from 'react';
import Footer from './Footer';

function Home() {
    return (
        <div className="w-auto max-w-screen-2xl bg-white-900">
            <section className="grid grid-cols-1 mt-5 md:grid-cols-2" id="hero-section">
            <div className="flex flex-col items-center justify-center row-start-1 m-5 md:items-start">
                <h1 className="text-4xl font-medium leading-7 tracking-tighter md:text-7xl">Easy Note For all</h1>
                <p className="pt-10 mb-8 text-lg font-medium leading-8 text-gray-600 md:text-2xl">Make it share it and learn it</p>
                <p href="#" className="flex flex-row items-center justify-around px-4 py-2 ml-4 text-base text-indigo-100 bg-indigo-600 border border-blue-500 border-solid rounded md:text-lg">Get Started <i className="pl-2 fas fa-arrow-right"></i></p>
            </div>
          
            <div className="self-center w-7/12 max-w-2xl row-start-2 ml-10 md:w-11/12 justify-self-center md:row-end-1">
                {/* <img src="images/img1.png"/> */}
            </div>

            <div className="self-center w-7/12 max-w-2xl row-start-4 md:w-11/12 justify-self-center md:row-start-2 ">
                {/* <img src="images/img2.png"/> */}
            </div>

            <div className="flex flex-col items-center justify-center row-start-3 m-5 md:items-start md:row-end-2">
                <h1 className="text-4xl font-medium leading-7 tracking-tighter md:text-7xl"> Sharing is Caring</h1>
                <p className="pt-10 mb-8 text-lg font-medium leading-8 text-gray-600 md:text-2xl"> Prepare the note and pass it to the other people in more efficient manner and let everyone be
                 educated</p>
            </div>
            </section>
            
            <Footer/>
        </div>
    )
}

export default Home
