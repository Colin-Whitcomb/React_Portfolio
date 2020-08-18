import React from 'react';
import './style.css';
// import Sushi from '../../images/'

function HomeworkCards() {
    return(
        <div className="container">
            <div class="card mt-2 hw">
                <img class="card-img-top" src="https://media.giphy.com/media/SU8qHfqp7zL67I1nnW/giphy.gif" alt="Card image cap"/>
                    <div class="card-body">
                        <p class="card-text"><b>Sushi Lover</b> is an app that allows the user to add and "devour" it their
                        favorite sushi order!</p>

                        <div className='row'>
                        <a href="https://nameless-bastion-18794.herokuapp.com/" target="_blank" class="btn btn-primary">Deployed Site</a>
                      
                        <a href="https://github.com/Colin-Whitcomb/sushi_lover" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                        </div>
                      
                    </div>
             </div>
        </div>
    )
}

export default HomeworkCards;