import '../Sidenav/sidenav.css';
import InputSelect from '../inputSelect/inputSelect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faGear, faTableList, faCalendarDays, faEllipsis, faStar, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FaTrello, FaPlus} from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { RiSettings4Fill } from 'react-icons/ri';

import { useState } from 'react';

const Sidenav = () => {

        const [sidebar, setSidebar] = useState(true);
        const settings = [
            {key: 0, val:'Settings'},
            {key: 0, val:'settings'}
        ]

        const hideSidebar = () => setSidebar(!sidebar);

            if(sidebar) {
                return(
                    <nav className='navbaropen'>
                     
                     <div className='div1'>
                        <div className='div2'>
                            <div className='innerdiv'>
                                <h2>K</h2>
                            </div>        
                        </div>
                       
                        <div className="div3">
                        <h3>Keyvalue</h3>  <br/>
                        <p>Free</p>  
                        </div>
                        
                        <div className='coll'>
                            <button className='collapsebutton'>
                                <FontAwesomeIcon icon={faLessThan} onClick={hideSidebar} />
                            </button>
                        </div>
                     </div>
            
                    <div className="line">
                        
                    </div>
                    
                    <div className="list">
                        <ul>
                            <li className='fl'>
                                <FaTrello className='boardsicon'/>
                                Boards</li>
                            <li className='fl'>
                            <AiOutlineUser className='boardsicon'/>
                                Members
                            <FaPlus className='plusicon'/>
                            </li>
                            <li className='sett'>
                            <RiSettings4Fill className='settingsicon' icon={faGear}/>
                                <InputSelect divname='listdiv' selectclass='settingsclass' options={settings}/>
                            </li>
                        </ul>
                    </div>
            
                    <div className="view">
                        <h3 className='viewhead'>Workspace views</h3>
                        <ul>
                            <li className='vl'>
                            <FontAwesomeIcon className='boardsicon' icon={faTableList}/>
                                Table</li>
                            <li className='vl'>
                            <FontAwesomeIcon className='boardsicon' icon={faCalendarDays}/>
                            Calender
                            </li>
                        </ul>
                    </div>
            
                    <div className="view">
                        <h3 className='viewhead'>Your boards</h3>
                        <div className='gandt'>
                            G&T
                            <FontAwesomeIcon className='doticon' icon={faEllipsis}/>
                            <FontAwesomeIcon className='staricon' icon={faStar}/>
                            </div>
                    </div>
                    </nav>
                )
            }
    
            else {
                return(
                    <nav className='navbarclose'>
                       <button className='collapsebutton'>
                                <FontAwesomeIcon icon={faLessThan} onClick={hideSidebar} />
                            </button>      
                </nav>
                )
                
            }
    
}

export default Sidenav;