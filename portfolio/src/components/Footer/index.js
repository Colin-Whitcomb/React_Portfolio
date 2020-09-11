import React from 'react';
import './style.css';
import gitHubLogo from '../../images/github-logo.png';

function Footer(){
    return(
    <div className="ftr mt-4">
          
       
       
        <div className='row'>
            <div className='col'>
                <div className="footer-copyright text-center py-3 ml-4">
                        <a className="btn mb-4" href="https://github.com/Colin-Whitcomb/" target="_blank">
                            <img className='btn linkImg' src={gitHubLogo}/>
                        </a>
                        <a href="https://www.linkedin.com/in/colin-whitcomb/" target="_blank">
                            <img className="btn mb-4 linkImg" target="_blank" src="https://image.flaticon.com/icons/png/512/61/61109.png"></img>
                        </a>
                        <a href="https://docs.google.com/document/d/1ft7R_n3xi_CKFITbdV4TJbNVcQ4nb2SSQ1qEhh4Kqig/edit?usp=sharing" target="_blank">
                            <img className="btn mb-4 linkImg" target="_blank" src="https://static.thenounproject.com/png/143185-200.png"></img>
                        </a>
                        <p>© 2020 Copyright</p>    
                </div>
                </div>
         </div>
     </div>
    )
}

export default Footer;