import React from 'react';
import './Newnote.css';
import Cardlist from './Cards';
import Sidebar from '../.././Sidebar/Sidebar';

function Newnote() {
    return (
        <>
			<Sidebar/>
			<main className="ml-64 p-3 contenttt">
				<div className="bg-white w-full h-full">
					<div className="item--cards">
						<Cardlist/>
					</div>
				</div>
			</main>
        </>
    )
}

export default Newnote