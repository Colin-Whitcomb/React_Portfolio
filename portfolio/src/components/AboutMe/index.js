import React from 'react';
import headshot from '../../images/headshot.JPG';
import './style.css';

function AboutMe() {
    return (
        <div className="container mt-4"  id="aboutMe">
            <div class="media">
                 <img class="mr-3 headShot rounded" src={headshot} alt="headShot"/>
                    <div class="media-body text-justify">
                        <h3 class="mt-0">About Me</h3>
                            <hr/>
                        <h5>Full Stack Web Developer with previous experience in Music Education. Effective communicator and passionate about optimizing team strategies. Self-motivated and goal-oriented to ensure work upholds high standards.
				                <br/><br/>
                                For the past 8 years, I've been teaching percussion to a variety of students from middle school through college in both southern and northern California. Recently, however, I have pivoted my career into Full Stack Web Development by enrolling in the UCB Extension's Coding Bootcamp! 
                        </h5>

                    </div>
            </div>
        </div>
    )
}

export default AboutMe;