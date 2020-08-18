import React from 'react';
import './style.css';
// import Sushi from '../../images/'

function HomeworkCards() {
    return(
        <div className="container">
            {/* Sushi Lover */}
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div class="card mt-2 hw">
                        <img class="card-img-top hw_img" src="https://media.giphy.com/media/SU8qHfqp7zL67I1nnW/giphy.gif" alt="Card image cap"/>
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

                {/* Note Taker */}
                <div className="col-xs-12 col-md-6 col-lg-4">
                    <div class="card mt-2 hw">
                        <img class="card-img-top hw_img" src="https://media.giphy.com/media/UqSKAHTqSRMlx8ywwW/giphy.gif" alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text"><b>Note Taker</b> is an app that allows users to save and delete notes. Great for lists!</p>

                                <div className='row'>
                                <a href="https://boiling-eyrie-32722.herokuapp.com/" target="_blank" class="btn btn-primary">Deployed Site</a>
                            
                                <a href="https://github.com/Colin-Whitcomb/note_taker" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                                </div>
                            
                            </div>
                    </div>
                </div>

                  {/* WorkDay Scheduler */}
                  <div className="col-xs-12 col-md-6 col-lg-4">
                    <div class="card mt-2 hw">
                        <img class="card-img-top hw_img" src="https://media.giphy.com/media/hQW9Nq5uIqssFubgCX/giphy.gif" alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text"><b>Work Day Scheduler</b> is a great tool to help plan your daily work activities!
                                </p>

                                <div className='row'>
                                <a href="https://colin-whitcomb.github.io/work-day-scheduler/" target="_blank" class="btn btn-primary">Deployed Site</a>
                            
                                <a href="https://github.com/Colin-Whitcomb/work-day-scheduler" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                                </div>
                            
                            </div>
                    </div>
                </div>

             </div>
        </div>
    )
}

export default HomeworkCards;