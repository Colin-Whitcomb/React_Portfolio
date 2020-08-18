import React from 'react';

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
    

                <div className="row">
                    <div className="col-sm-12 offset-2">
                        <h1 className="display-4 d-inline">Colin Whitcomb</h1> 
                        <a className="btn btn-dark mr-2 ml-2 mb-4" href="https://www.linkedin.com/in/colin-whitcomb/" target="_blank">LinkedIn</a>
                        <a className="btn btn-dark mb-4" href="https://github.com/Colin-Whitcomb" target="_blank">GitHub</a>
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