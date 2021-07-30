import React from 'react';
import {Link} from 'react-router-dom';
function Sidebar() {
    return (
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
    )
}

export default Sidebar
