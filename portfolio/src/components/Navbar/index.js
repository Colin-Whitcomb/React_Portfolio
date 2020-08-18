import React from 'react';

function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark  justify-content-end">
            <a className="navbar-brand" href="#projects">Projects</a>
            <a className="navbar-brand" href="#assignments">Assignments</a> 
            <a className="navbar-brand" href="#aboutMe">About Me</a> 
        </nav>
    </div>
    )
} 

export default Navbar;