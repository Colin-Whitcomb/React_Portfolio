import React from 'react';
import headshot from '../../images/headshot.JPG';
import './style.css';

function AboutMe() {
    return (
        <div className="container">

            <img src={headshot} className="headShot"></img>

            <h5 class="grey-text text-darken-3 lighten-3"> After graduating from UC Berkeley in December, 2019 (B.A
				in
				Music with Honors) I dove into the world of web development.
				I enrolled in the <span class="contactInfo">UC Berkeley Extension Full-Stack Coding Bootcamp.</span>
				<br/><br/>

				Although the semester is still in
				progress, I will be looking into software engineer positions as well as technical
				project management roles.

			</h5>

        </div>
    )
}

export default AboutMe;