import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleInfo, faBell } from '@fortawesome/free-solid-svg-icons';
import { FaSearch, FaTrello } from 'react-icons/fa';
//import { IconName } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import gridicon from '../../images/grid.png';
import trelloimg from '../../images/trellologo.png'
import '../topnav/topnav.css';
import InputSelect from "../inputSelect/inputSelect";
import Button from "../Button/button";


const TopNav = () => {

    const workspace= [
        {key: 0, val: 'Workspace'},
        {key: 0, val: '0'},
        {key: 0, val: '0'}
    ]
    const recent= [
        {key: 0, val: 'Recent'},
        {key: 0, val: '0'},
        {key: 0, val: '0'}
    ]
    const starred= [
        {key: 0, val: 'Starred'},
        {key: 0, val: '0'},
        {key: 0, val: '0'}
    ]
    const templates= [
        {key: 0, val: 'Templates'},
        {key: 0, val: '0'},
        {key: 0, val: '0'}
    ]
    

    return (
        
       
        <header>
            <div className="nav">
                <BsFillGrid3X3GapFill className="menuicon" size={20}/>
            </div>
        
            <div className="nav1">
                <FaTrello className="trelloicon" size={20}/>
                
            </div>
            <div className="nav">
                
                <div className="head">Trello</div>
            </div>
            

            <InputSelect divname='nav' selectclass='element' options={workspace} optionclass='headeroption' />

            <InputSelect divname='nav' selectclass='element' options={recent} />

            <InputSelect divname='nav' selectclass='element' options={starred} />

            <InputSelect divname='nav' selectclass='element' options={templates} />

            <div className="nav">
                <Button buttonclass='createbutton' label='Create'/>
            </div>

            <div className="rightside">
                <div className="searchdiv">
                    
                    <FaSearch size={24} className="searchicon" />
                    <input type='text' placeholder="Search"/>
                </div>

                <div className="infodiv">
                    <AiOutlineInfoCircle size={24}/>
                    
                </div> 

                <div className="notifdiv">
                    <MdNotifications size={20}/>
                    
                </div> 

            </div>
            
        </header>



    
    )
    
}

export default TopNav;