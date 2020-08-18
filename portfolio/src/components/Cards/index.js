import React from 'react';
import './style.css';
import wip from '../../images/WiP2.jpg';
import miles from '../../images/miles2.jpg';
import MilesGif from '../../images/sr-pm.gif';

function Cards() {
    
    return(
    
    <div className="container">

        <div className="row">
            <div class="col-md-6 sm-12">
                <div class="card bg-dark text-white">
                    <img src={wip} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h3 class="card-title text-center">WiP</h3>
                        </div>
                </div>
            </div>

                        <div class="col-md-6 sm-12">
                         
                            <h4 class="card-text align-text-bottom text-center">WiP is a goal oriented progress tracker app that helps the user divide and conquer goals.</h4>
                            <br/>   
                            <div className='row'>
                                <div class="col-md-6">
                                    <img src='https://media.giphy.com/media/IecI9ZHXpzb8kMXKQg/giphy.gif' alt='gif' class='gif'/>
                                </div>
                                <br/>  <br/>  <br/>  
                                <div class="col-md-6">
                                    <button className="btn btn-dark">Deployed Link</button>
                                        <br/> <br/>
                                    <button className="btn btn-dark">GitHub</button>
                                </div>
                            </div>
                        </div>
                </div>
         
<br/><br/><br/><br/>
        <div className="row">
            <div class="col-md-6">
                <div class="card bg-dark text-white">
                    <img src={miles} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h3 class="card-title text-center">WiP</h3>
                        </div>
                </div>
            </div>

            <div class="col-sm-6">
                         
            <h4 class="card-text text-center">Miles is an app designed to help find close and healthy eating destinations.</h4>
                         <br/>   
                         <div className='row'>
                             <div class="col-sm-6">
                                 <img src={MilesGif} alt='gif' class='gif'/>
                             </div>

                             <div class="col-sm-6">
                                 <button className="btn btn-danger">Deployed Link</button>
                                     <br/> <br/>
                                 <button className="btn btn-danger">GitHub</button>
                             </div>
                         </div>
                     </div>
             </div>
    </div>
    
    )
}
export default Cards;