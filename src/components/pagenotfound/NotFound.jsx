import React from 'react';
import Fade from 'react-reveal/Fade';

const NotFound = () => {
    return (
        <Fade out duration={1000}>
        <div className="notfound-container">
                <h1><span role="img" aria-label="faceslap">🤦🏼‍♀️</span>404: Page not found<span role="img" aria-label="faceslap">🤦</span></h1>
                <p>Try going back <a href="/">home</a> to access my website </p>
        </div>
        </Fade>
    )
}

export default NotFound;