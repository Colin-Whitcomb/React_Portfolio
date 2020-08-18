import React from 'react';

function Contact() {
    return (
        <div className="container border mt-4">
            <h4 className='text-center'>Want to connect?</h4>
                    
            <div className="row">
                <div className='col offset-2'>
                    <th>Contact Info</th>
                        <tr>Email: csammyw@gmail.com</tr>
                        <tr>Phone: (864) 612-0622</tr>
                    </div>
                <div className='col'>
                    <th>Experience</th>
                        <a href="https://www.linkedin.com/in/colin-whitcomb/" target="_blank">
                            <tr>LinkedIn</tr>
                        </a>
                        <br/>
                        <a href="https://docs.google.com/document/d/1ft7R_n3xi_CKFITbdV4TJbNVcQ4nb2SSQ1qEhh4Kqig/edit?usp=sharing" target="_blank">
                            <tr>Resume</tr>
                        </a>
                        
                </div>
            </div>
        </div>
    )
}

export default Contact;