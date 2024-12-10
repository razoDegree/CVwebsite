import React, { Link, useEffect } from 'react';
import gsap from 'gsap';
import AttachFileIcon from '@mui/icons-material/AttachFile';


function Header() {
    useEffect(() => {


        // GSAP animation for the button container
        gsap.fromTo('.cv-button',
            {
                opacity: 0,  // Start with opacity 0 (invisible)
                y: -50,      // Start from above the page
            },
            {
                opacity: 1,   // End with opacity 1 (visible)
                y: 0,         // Move to its normal position
                duration: 1,   // Duration of 1 second
                ease: "power2.out", // Smooth ease out
            }
        );

        // GSAP animation for the header (h1)
        gsap.fromTo('h1',
            {
                opacity: 0,  // Start with opacity 0 (invisible)
                y: -50,      // Start from above the page
            },
            {
                opacity: 1,   // End with opacity 1 (visible)
                y: 0,         // Move to its normal position
                duration: 1,   // Duration of 1 second
                ease: "power2.out", // Smooth ease out
            }
        );
    }, []);

    const handleRedirectCV = () => {
        window.open("https://www.google.com", "_blank"); ; // Download CV link
    };

    const handleRedirectRAZO = () => {
        window.location.href = "localhost:5173"; // Back to the original site
    };

    return (
        <header>
            <h1 data-textify onClick={handleRedirectRAZO}> razo</h1>
            <div className='cv-button'>
                <button onClick={handleRedirectCV} data-textify>cv</button>
                <AttachFileIcon onClick={handleRedirectCV} />
            </div>
        </header>
    );
}


export default Header;