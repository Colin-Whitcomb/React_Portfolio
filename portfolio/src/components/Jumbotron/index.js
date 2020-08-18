import React from 'react';

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
    

                <div className="row">
                    <div className="col-sm-12 offset-2">
                        <h1 className="display-4 d-inline">Colin Whitcomb</h1> 
                        <button className="btn btn-dark mr-2 ml-2 mb-4">LinkedIn</button>
                        <button className="btn btn-dark mb-4">GitHub</button>
                    </div>  
                    
                    <div className="col-sm-12">
                    <p className="lead text-center">Self motivated web developer eager to work together to create something amazing.</p>
                    </div>  
                </div>

                
            </div>
        </div>
    )
}

export default Jumbotron;