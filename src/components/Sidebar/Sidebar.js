import React from 'react'
import './Sidebar.css';
import {SidebarData} from './SidebarData';
import Img1 from '../pages/home/images/img1.png';
import {Link} from 'react-router-dom'




function Sidebar() {
    return (
        <div className="Bar"> 
        { <div className="sideline">
         <img src={Img1} alt="iamges"/> 
        </div> }

                        
<br />
            <ul className="SidebarList">
                {SidebarData.map((val, key ) => { 

                    return(
                        <li key={key} className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=> {window.location.pathname = val.link}}>
                        {" "} 
                        
                        <div id="icon">  {val.icon} </div>
                        <div id="title"> {val.title} </div>

                        
                   
                    </li>
 
                    );
                })}
                


            </ul>
            {/* <div className="footer">
              
                            <Link to="#" className=" h-8 w-8  ml-10 mb-1 text-center  justify-center  ">Help</Link>
                            <Link to="#" className="h-8 w-8  ml-3 mb-1 text-center  justify-center ">Terms</Link>
                            <Link to="#"  className="h-8 w-8 ml-5 mb-1 text-center  justify-center  ">Privacy</Link>
                            <Link to="#" className="h-8 w-8  ml-7 mb-1 text-center  justify-center " >@YubarajSigh</Link>
                       
                
            </div> */}
           
        </div>
    )
}

export default Sidebar
