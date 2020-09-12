import React from 'react';
import gitHubLogo from '../../images/github-logo.png';
import "./style.css";


function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid mb-0">
            <div className="container">
    

                <div className="row">
                    <div className="col-sm-12 text-center mt-3">
                        <h3 className="mt-2 display-4 d-inline">COLIN WHITCOMB</h3> 

                        <a className="btn mb-4" href="https://github.com/Colin-Whitcomb/" target="_blank">
                            <img className='btn linkImg' src={gitHubLogo}/>
                        </a>


                        <a href="https://www.linkedin.com/in/colin-whitcomb/" target="_blank">
                            <img className="btn mb-4 linkImg" target="_blank" src="https://image.flaticon.com/icons/png/512/61/61109.png"></img>
                        </a>
                    </div>  
                    
                    <div className="col-sm-12">
                    <p className="lead text-center">Self-motivated web developer eager to work together to create something amazing.</p>
                    </div>  
                </div>

                
            </div>
        </div>
    )
}

export default Jumbotron;

// Pictures by Dave Gandy 