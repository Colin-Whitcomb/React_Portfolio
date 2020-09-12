import React from 'react'
import './style.css'

function Technical() {
    return(
        <div className='tech'>
            <div className="container text-center">
                <h3 className='text-left'>Technical Skills</h3>
                <hr></hr>
                
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"></img>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'></img>
                <img className='logo' src='https://malakian75s.github.io/static/media/es6.1f0e4175.svg'></img>
                {/* <img className='logo' src='data:image/jpeg;base64,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'></img> */}
                <img className='logo' src='https://i0.wp.com/www.disk91.com/wp-content/uploads/2018/02/mongodb-1.png?fit=413%2C484&ssl=1'></img>
                <img className='logo' src='https://miro.medium.com/max/6668/1*XP-mZOrIqX7OsFInN2ngRQ.png'></img>
                <img className='logo' src='https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png'></img>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_XanOL-jJfrFnbIDYp9Q0e8wa4PL-Wdiicw&usqp=CAU'></img>           

            </div>
        </div>
    )
}

export default Technical;