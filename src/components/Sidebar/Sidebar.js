import React from 'react'
import './Sidebar.css';
import {SidebarData} from './SidebarData';
import Img1 from '../pages/home/images/img1.png';




function Sidebar() {
    return (
        <div className="Bar"> 
         <div className="self-center w-7/12 max-w-2xl row-start-1 ml-4 md:w-8/10 justify-self-center md:row-end-1">
                          <img src={Img1} alt="iamges"/>
                         </div>
            <ul className="SidebarList">
                {SidebarData.map((val, key ) => { 

                    return(
                        <li key={key} className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=> {window.location.pathname = val.link}}>
                        {" "} 
                        
                        <div id="icon">  {val.icon} </div>
                        <div id="title"> {val.title} </div>
                        <div className="sideline"></div> 
                        
                   
                    </li>

                    );
                })}
            </ul>
           
        </div>
    )
}

export default Sidebar
