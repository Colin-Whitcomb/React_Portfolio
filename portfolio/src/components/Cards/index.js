import React from 'react';
import './style.css';
import wip from '../../images/WiP2.jpg';
import miles from '../../images/miles2.jpg'

function Cards() {
    
    return(
    
    <div className="container">
        <h2 className='text-center'>Projects</h2>
        <br></br>
        <div className="row justify-center">
            <div class="col-md-6 sm-12">
                <div class="card bg-dark text-white">
                    <img src={wip} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h3 class="card-title text-center">WiP</h3>
                            <h5 class="card-text align-text-bottom">WiP is a goal oriented progress tracker app that divides broad goals into smaller, more achievable, subgoals.</h5>
                        </div>
                </div>
            </div>
            <br/><br/>
            <div class="col-md-6 sm-12">
                <div class="card bg-dark text-white">
                    <img src={miles} class="card-img" alt="..."/>
                        <div class="card-img-overlay">
                            <h3 class="card-title text-center">Miles</h3>
                            <h5 class="card-text">WiP is a goal oriented progress tracker app that divides broad goals into smaller, more achievable, subgoals.</h5>
                    </div>
                 </div>
            </div>
         
        </div>
    </div>
    
    )
    // style="max-width: 540px;"
}

export default Cards;