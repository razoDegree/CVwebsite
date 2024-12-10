import React, { useEffect, useRef } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

const CustomCursor = ({ children }) => {
    const area = useRef(null);

    // Register GSAP with MouseFollower
    MouseFollower.registerGSAP(gsap);

    useEffect(() => {
        let cursor;
        const listeners = [];

        if (area.current) {
            // Initialize MouseFollower
            cursor = new MouseFollower({
                container: area.current,
                speed: 0.55,
            });

            const el = document.querySelectorAll('.project-card');

            el.forEach(element => {
                const mouseEnter = () => cursor.setText('Explore');
                const mouseLeave = () => cursor.removeText();

                element.addEventListener('mouseenter', mouseEnter);
                element.addEventListener('mouseleave', mouseLeave);

                listeners.push({ element, mouseEnter, mouseLeave });
            });

        }

        // Cleanup on component unmount
        return () => {
            if (cursor) {
                cursor.destroy();
            }
            listeners.forEach(({ element, mouseEnter, mouseLeave }) => {
                element.removeEventListener('mouseenter', mouseEnter);
                element.removeEventListener('mouseleave', mouseLeave);
            });
        };
    }, []);

    return (
        <div ref={area} style={{ height: "100vh", overflow: "hidden" }}>
            {children}
        </div>
    );
};

export default CustomCursor;
