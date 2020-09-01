import React from 'react';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <Fade out duration={1000}>
                <h1>🤦🏼‍♀️404: Page not found🤦🏼‍♂️</h1>
                <p>Try going back home to access my website </p>
            </Fade>
        </div>
    )
}

export default NotFound;