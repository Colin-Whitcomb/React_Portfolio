import React, { useState} from 'react';
import './style.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import wip from '../../images/WiP2.jpg';
import miles from '../../images/miles2.jpg';
import MilesGif from '../../images/sr-pm.gif';

function Cards() {
    const [popoverOpen8, setPopoverOpen8] = useState(false);
    const toggle8 = () => setPopoverOpen8(!popoverOpen8);

    const [popoverOpen9, setPopoverOpen9] = useState(false);
    const toggle9 = () => setPopoverOpen9(!popoverOpen9);

    const [popoverOpen10, setPopoverOpen10] = useState(false);
    const toggle10 = () => setPopoverOpen10(!popoverOpen10);
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

                         {/* Tech Btn */}
                         <button className="btn btn-dark ml-1" id="Popover8">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen8} target="Popover8" toggle={toggle8}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>MERN, OOP, Chart.js, Heroku, Trello &#38; Slack</PopoverBody>
                            </Popover>
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
                        {/* Tech Btn */}
                        <button className="btn btn-dark ml-1" id="Popover9">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen9} target="Popover9" toggle={toggle9}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>MVC, mySQL, Sequelize, Node.js, ES6, Express, Handlebars, Chartist, Trello &#38; Slack</PopoverBody>
                            </Popover>
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
                         {/* Tech Btn */}
                         <button className="btn btn-dark ml-1" id="Popover10">Tech</button>
                            <Popover placement="top" isOpen={popoverOpen10} target="Popover10" toggle={toggle10}>
                            <PopoverHeader className='text-center'>Technologies &#38; Concepts</PopoverHeader>
                            <PopoverBody className='text-center'>HTML, CSS, JavaScript, jQuery, Materialize</PopoverBody>
                            </Popover>
                </div>
         
            <br></br>
            </div>
        <br/>
    </div>
    
    )
}
export default Cards;