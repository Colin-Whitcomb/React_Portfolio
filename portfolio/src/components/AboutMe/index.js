import React from 'react';
import headshot from '../../images/headshot.JPG';
import './style.css';

function AboutMe() {
    return (
        <div className="aM">
            <div className="container mt-4"  id="aboutMe">
                <div className='row'>

                    <div className='col-lg-4 col-md-6'>
                        <div className='text-center'>
                            <img class="mr-3 mt-2 headShot rounded" src={headshot} alt="headShot"/>
                        </div>
                    </div>

                    <div className='col-lg-8 col-md-6'>
                        <div class="media-body text-wrap">
                            <h3 class="mt-2">About Me</h3>
                                <hr/>
                            <h6>Full Stack Web Developer with previous experience in Music Education. Effective communicator and passionate about optimizing team strategies. Self-motivated and goal-oriented to ensure work upholds high standards.
                                    <br/><br/>
                                For the past 8 years, I've been teaching percussion to a variety of students from middle school through college in both southern and northern California. Recently, however, I have pivoted my career into Full Stack Web Development by enrolling in the UCB Extension's Coding Bootcamp! 
                            </h6>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default AboutMe;