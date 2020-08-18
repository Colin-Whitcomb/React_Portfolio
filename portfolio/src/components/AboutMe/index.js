import React from 'react';
import headshot from '../../images/headshot.JPG';
import './style.css';

function AboutMe() {
    return (
        <div className="container border mt-4"  id="aboutMe">
            <div class="media">
                 <img class="mr-3 headShot rounded" src={headshot} alt="headShot"/>
                    <div class="media-body">
                        <h3 class="mt-0 text-center">About Me</h3>
                        <h6>After graduating from UC Berkeley in December, 2019 (B.A in
				            Music with Honors) I dove into the world of web development.
				            I enrolled in theUC Berkeley Extension Full-Stack Coding Bootcamp.
				                <br/><br/>
                            Although the semester is still in
                            progress, I will be looking into software engineer positions as well as technical
                            project management roles.
                        </h6>
                    </div>
            </div>
        </div>
    )
}

export default AboutMe;