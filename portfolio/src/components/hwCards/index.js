import React from 'react';
import './style.css';
// import Sushi from '../../images/'

function HomeworkCards() {
    return(
        <div className="container">
            <div class="card">
                <img class="card-img-top" src="https://media.giphy.com/media/SU8qHfqp7zL67I1nnW/giphy.gif" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Sushi Lover</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <div className='row'>
                        <a href="#" class="btn btn-primary">Deployed Site</a>
                      
                        <a href="#" class="btn btn-primary ml-1">GitHub</a>
                        </div>
                      
                    </div>
             </div>
        </div>
    )
}

export default HomeworkCards;