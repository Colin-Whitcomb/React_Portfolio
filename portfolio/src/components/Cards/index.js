import React from 'react';
import './style.css';
import wip from '../../images/WiP2.jpg';
import miles from '../../images/miles2.jpg';
import MilesGif from '../../images/sr-pm.gif';

function Cards() {
    
    return(
    
    <div className="container border mt-2" id="projects">

<br/>   
        <h3 className="text-center">Team Projects</h3>

        <br/><br/>

        <div className="row mt-1">

            <div class="col-md-6 sm-12">
                <div class="card bg-dark text-white">
                    <img src={wip} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h3 class="card-title text-center">WiP</h3>
                        </div>
                </div>
            </div>

                        <div class="col-md-6 sm-12">

                            <div className='row'>
                            <h4 class="card-text align-text-bottom text-center">WiP is a goal oriented progress tracker app that helps the user divide and conquer goals.</h4>
                                 
                            
                            
                                <div class="col-xs-6 mt-3">
                                    <img src='https://media.giphy.com/media/IecI9ZHXpzb8kMXKQg/giphy.gif' alt='gif' class='img'/>
                                </div>
                                <br/>  <br/>  <br/>  
                                <div class="col-xs-5 offset-1 mt-3">
                                    <a href="https://vast-hollows-48558.herokuapp.com" target="_blank">
                                        <button className="btn btn-dark">Deployed Link</button>
                                    </a>

                                        <br/> <br/>

                                    <a href="https://github.com/crackedsnowboard/project-maven" target="_blank">
                                        <button className="btn btn-dark">GitHub</button>
                                    </a>

                                </div>
                            </div>
                        </div>
        </div>
         
        <br/><br/><br/><br/>
   
        <div className="row">
            <div class="col-md-6 sm-12">
                <div class="card bg-dark text-white">
                    <img src={miles} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h3 class="card-title text-center">Miles</h3>
                        </div>
                </div>
            </div>

            <div class="col-sm-6">
                        
            <div className='row'>
            <h4 class="card-text text-center">Miles is an app designed to help find close and healthy eating destinations.</h4>
                         <br/>   
                       
                             <div class="col-xs-6 mt-3">
                                 <img src={MilesGif} alt='gif' class='img'/>
                             </div>

                             <div class="col-xs-5 offset-1 mt-3">

                                     <a href="https://gabesucich.github.io/Project1_CGJK/" target="_blank">
                                        <button className="btn btn-dark">Deployed Link</button>
                                    </a>

                                        <br/> <br/>

                                    <a href="https://github.com/Colin-Whitcomb/Project1_CGJK" target="_blank">
                                        <button className="btn btn-dark">GitHub</button>
                                    </a>
                             </div>
                         </div>
                     </div>
             </div>
             <br/>
    </div>
    
    )
}
export default Cards;