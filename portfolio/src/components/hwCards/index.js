import React from 'react';
import './style.css';
// import Sushi from '../../images/'

function HomeworkCards() {
    return(
        <div className="container border mt-4" id="assignments">
            <br/>
            <h2 className="text-center hwHeader">Additional Assignments</h2>
            <br/><br/>

            {/* Sushi Lover */}
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-4 mt-4">
                    <div class="card mt-2 hw">
                        <img class="card-img-top hw_img" src="https://media.giphy.com/media/SU8qHfqp7zL67I1nnW/giphy.gif" alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text"><b>Sushi Lover</b> is an app that allows the user to add and "devour" it their
                                favorite sushi order!</p>

                                <div className='row offset-1'>
                                <a href="https://nameless-bastion-18794.herokuapp.com/" target="_blank" class="btn btn-primary">Deployed Site</a>
                            
                                <a href="https://github.com/Colin-Whitcomb/sushi_lover" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                                </div>
                            
                            </div>
                    </div>
                </div>

            {/* WorkDay Scheduler */}
                  <div className="col-xs-12 col-md-6 col-lg-4 mt-4">
                    <div class="card mt-2 hw">
                        <img class="card-img-top hw_img" src="https://media.giphy.com/media/hQW9Nq5uIqssFubgCX/giphy.gif" alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text"><b>Work Day Scheduler</b> is a great tool to help plan your daily work activities!
                                </p>

                                <div className='row offset-1'>
                                <a href="https://colin-whitcomb.github.io/work-day-scheduler/" target="_blank" class="btn btn-primary">Deployed Site</a>
                            
                                <a href="https://github.com/Colin-Whitcomb/work-day-scheduler" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                                </div>
                            
                            </div>
                    </div>
                </div>

            {/* Password Generator */}       
                <div className="col-xs-12 col-md-6 col-lg-4 mt-4">
                    <div class="card mt-2 hw">
                        <img class="card-img-top hw_img" src="https://media.giphy.com/media/j32q28FDoKZNHHQoSt/giphy.gif" alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text"><b>Password Generator</b> generates a random password with special characters, 
                                numbers, and letters!
                                </p>

                                <div className='row offset-1'>
                                <a href="https://colin-whitcomb.github.io/password-generator/" target="_blank" class="btn btn-primary">Deployed Site</a>
                            
                                <a href="https://github.com/Colin-Whitcomb/password-generator" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                                </div>
                            
                            </div>
                    </div>
                </div>
           
             {/* Note Taker */}
             <div className="col-xs-12 col-md-6 col-lg-4 offset-lg-2 mt-4 mb-4">
                    <div class="card mt-2 hw">
                        <img class="card-img-top" src="https://media.giphy.com/media/UqSKAHTqSRMlx8ywwW/giphy.gif" alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text"><b>Note Taker</b> is an app that allows users to save and delete notes. Great for lists!</p>

                                <div className='row offset-1'>
                                <a href="https://boiling-eyrie-32722.herokuapp.com/" target="_blank" class="btn btn-primary">Deployed Site</a>
                            
                                <a href="https://github.com/Colin-Whitcomb/note_taker" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                                </div>
                            
                            </div>
                    </div>
                </div>

            {/* Employee Tracker */}
             <div className="col-xs-12 col-md-6 col-lg-4 mt-4 mb-4">
                    <div class="card mt-2 hw mb-3">
                        <img class="card-img-top" src="https://media.giphy.com/media/Y1Ac1jXxBcxPmvneBi/giphy.gif" alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text"><b>Employee Tracker</b> allows the user to update and mangage employee details!</p>

                                <div className='row offset-1'>
                                <a href="https://boiling-eyrie-32722.herokuapp.com/" target="_blank" class="btn btn-primary">Deployed Site</a>
                            
                                <a href="https://github.com/Colin-Whitcomb/note_taker" target="_blank" class="btn btn-primary ml-1">GitHub</a>
                                </div>
                            
                            </div>
                    </div>
                </div>






             </div>
        </div>
    )
}

export default HomeworkCards;