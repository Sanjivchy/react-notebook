import React from 'react';
import './Newnote.css';
import {Link} from 'react-router-dom';


function Newnote() {
    return (
        <>
        <nav className="fixed inset-y-0 left-0 bg-gray-100 shadow-xl rounded-r-xl p-1 mt-14 w-60">  
					<div className="flex h-40 w-full bg-gray-600 ">
					<div className="bg-gray-500 h-full w-full">
						photo
					</div>
					<div className="bg-red-300 h-full w-full">
						detail
					</div>
				</div>
				<div className="flex flex-col py-10 divide-y divide-gray-800">
					<div className="py-5 flex flex-col gap-2">
						<Link to="#" className="flex items-center gap-2 text-sm tracking-wider text-blue-500 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
							<span classNameName="material-icons-outlined text-base" >
								Linkkk
							</span>
							linkkkkk
						</Link>
					</div>
					<div className="py-5 flex flex-col gap-2">
						<Link to="#" className="flex items-center gap-2 text-sm tracking-wider text-gray-800 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
							<span className="material-icons-outlined text-base" >
								linkkk
							</span>
							linkkkk
						</Link>
						<Link to="#" className="flex items-center gap-2 text-sm tracking-wider text-gray-800 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
							<span className="material-icons-outlined text-base" >
								linkkk
							</span>
							linkkkkkkk
						</Link>
						<Link to="#" className="flex items-center gap-2 text-sm tracking-wider text-gray-800 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
							<span className="material-icons-outlined text-base" >
								paid
							</span>
							Cashflow
						</Link>
					</div>
					<div className="py-5 flex flex-col gap-2">
						<Link to="#" className="flex items-center gap-2 text-sm tracking-wider text-gray-800 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
							<span className="material-icons-outlined text-base" >
								linkkk
							</span>
							linkkkkk
						</Link>
						<Link href="#" className="flex items-center gap-2 text-sm tracking-wider text-gray-800 font-semibold hover:text-blue-500 transition duration-300 ease-in-out">
							<span className="material-icons-outlined text-base">
								linkkk
							</span>
							linkkkk
						</Link>
				
					</div>
				</div>
			</nav>
			<main className="ml-64 contenttt">
				<div className="bg-white w-full h-full">
					<div className="item--cards">
						<article className="item--card">
							<h2>QA tester</h2>
							<div className="card--image bg-red-200 h-32 w-full max-w-full">
								image
							</div>
							<div className="card--title">
								<h3>title</h3>
								<p>dasd adsdas dasas dd ddsad as dsad dasdnsad dda asd ajsdnad asdas
								</p>
								<div className="flex justify-around">
									<Link><i class="fas fa-trash-alt"></i></Link>
									<Link><i class="fas fa-pen-nib"></i></Link>
									<Link><i class="fas fa-bars"></i></Link>
								</div>
							</div>
						</article>
						<article className="item--card">
							<h2>QA tester</h2>
							{/* <img>image</img> */}
							<div className="card--title">
								<h3>title</h3>
								<p>paragraph</p>
								<div>
									<Link><i class="fas fa-trash-alt"></i></Link>
									<Link><i class="fas fa-pen-nib"></i></Link>
									<Link><i class="fas fa-bars"></i></Link>
								</div>
							</div>
						</article>
						
							<article className="item--card">
							<h2>QA tester</h2>
							{/* <img>image</img> */}
							<div className="card--title">
								<h3>title</h3>
								<p>paragraph</p>
								<div>
									<Link><i class="fas fa-trash-alt"></i></Link>
									<Link><i class="fas fa-pen-nib"></i></Link>
									<Link><i class="fas fa-bars"></i></Link>
								</div>
							</div>
						</article>

						<article className="item--card">
							<h2>QA tester</h2>
							<div className="card--image bg-red-200 h-32 w-full max-w-full">
								image
							</div>
							<div className="card--title">
								<h3>title</h3>
								<p>dasd adsdas dasas dd ddsad as dsad dasdnsad dda asd ajsdnad asdas
								</p>
								<div className="flex justify-around">
									<Link><i class="fas fa-trash-alt"></i></Link>
									<Link><i class="fas fa-pen-nib"></i></Link>
									<Link><i class="fas fa-bars"></i></Link>
								</div>
							</div>
						</article>

						<article className="item--card">
							<h2>QA tester</h2>
							<div className="card--image bg-red-200 h-32 w-full max-w-full">
								image
							</div>
							<div className="card--title">
								<h3>title</h3>
								<p>dasd adsdas dasas dd ddsad as dsad dasdnsad dda asd ajsdnad asdas
								</p>
								<div className="flex justify-around">
									<Link><i class="fas fa-trash-alt"></i></Link>
									<Link><i class="fas fa-pen-nib"></i></Link>
									<Link><i class="fas fa-bars"></i></Link>
								</div>
							</div>
						</article>
						
					</div>
				</div>
			</main>
        </>
    )
}

export default Newnote
