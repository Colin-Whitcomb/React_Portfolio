import React from 'react';
import './style.css';
import wip from '../../images/WiP2.jpg';
import miles from '../../images/miles2.jpg';
import MilesGif from '../../images/sr-pm.gif';

function Cards() {
    
    return(
    
    <div className="container mt-2" id="projects">

        <br/>   
            <h2 className="mt-1" id="teamHeading">Team Projects</h2>
            <hr></hr>
    {/* ------------- Quan ---------- */}
            <div className="row cardSection">

                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>Quan</b></span> is an investment app that provides a variety of investment strategies.</p>
                        <div class="card bg-dark text-white">
                            <img src='https://fast-mesa-56626.herokuapp.com/static/media/QUANlogo.4d6575f4.png' className="card-img center-text" id='quanPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://fast-mesa-56626.herokuapp.com/" target="_blank" className='text-center'>
                            <button className="btn btn-dark">Deployed Link</button>
                        </a>
                        <a href="https://github.com/Colin-Whitcomb/InvestmentSimluator_1" target="_blank" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                </div>
            <br></br>
            {/* WIP */}
            <div class="col-12 col-md-6 col-lg-4 cardDiv">
                    <p><span class='extraWords'><b>WIP</b></span> is a goal oriented progress tracker app that helps the user divide and conquer goals.</p>
                        <div class="card bg-dark text-white">
                            <img src={wip} className="card-img center-text" id='wipPic' alt="..."/>
                        </div>

                        <br></br>

                        <a href="https://vast-hollows-48558.herokuapp.com" target="_blank" className='text-center'>
                            <button className="btn btn-dark">Deployed Link</button>
                        </a>
                        <a href="https://github.com/crackedsnowboard/project-maven" target="_blank" className='text-center ml-1'>
                            <button className="btn btn-dark">GitHub</button>
                        </a>
                </div>
            <br></br>
            {/*  */}
                {/* ------------- MILES ---------- */}
       
                <div class="col-12 col-md-6 col-lg-4 cardDiv">
                        <p class="card-text"><span class='extraWords'><b>Miles</b></span> is an app designed to help users find close and healthy eating destinations.</p>
                            <div class="card bg-dark text-white">
                                <img src={miles} class="card-img" id='milesPic' alt="..."/>
                            </div>
                                <br></br>
                        <a href="https://gabesucich.github.io/Project1_CGJK/" target="_blank">
                            <button className="btn btn-dark">Deployed Link</button>
                        </a>
                        <a href="https://github.com/Colin-Whitcomb/Project1_CGJK" target="_blank">
                            <button className="btn btn-dark ml-1">GitHub</button>
                        </a>
                </div>
         
            <br></br>
            </div>
        <br/>
    </div>
    
    )
}
export default Cards;