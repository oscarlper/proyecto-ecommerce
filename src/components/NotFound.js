import React from 'react';
import '../styles.css';

function NotFound() {
    
    return<>
    <div className="container">
        <div className="row align-items-center">
            <div className="col align-self-center">
                <img src="/image/404.gif" className="img-fluid center-block img404" alt="404 Page Not Found"/>
            </div>
        </div>
    </div>
    </>;
}

export default NotFound;