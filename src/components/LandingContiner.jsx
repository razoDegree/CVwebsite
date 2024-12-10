import React from 'react';
import codeRun from '../assets/code-run.gif'

function LandingContiner() {
    return (
        <div className="landing-container" id="landing">
            <div className="content">
                <h2>
                    I'm just a <span className="highlight">regular</span><br />
                    <img src={codeRun} alt="code" />
                    guy who <br />loves to code
                </h2>

            </div>
        </div>
    );
}

export default LandingContiner;
