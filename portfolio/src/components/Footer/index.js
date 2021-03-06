import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import './style.css';
import gitHubLogo from '../../images/github-logo.png';

function Footer(props){

    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return(
    <div className="ftr mt-4">
          
       
       
        <div className='row'>
            <div className='col'>
                <div className="footer-copyright text-center py-3 ml-4">
                    <p>© 2020 Copyright</p>    
                </div>
            </div>
         </div>
     </div>
    )
}

export default Footer;