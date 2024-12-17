import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MagneticButton = () => {
    const buttonRef = useRef(null); // יצירת רפרנס לאלמנט הכפתור

    useEffect(() => {
        const button = buttonRef.current;

        if (button) {
            // מאזין לאירועי עכבר
            button.addEventListener("mousemove", (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                // הפעלת אנימציה של GSAP על הסמן
                gsap.to(button, {
                    x: x * 0.3, // אפקט מגנטי
                    y: y * 0.3,
                    duration: 0.3,
                    ease: "power3.out",
                });
            });

            button.addEventListener("mouseleave", () => {
                // החזרת הכפתור למיקום המקורי
                gsap.to(button, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out",
                });
            });
        }

        return () => {
            // ניקוי מאזינים לאירועים
            button?.removeEventListener("mousemove", () => { });
            button?.removeEventListener("mouseleave", () => { });
        };
    }, []);

    return (
        <></>
    );
};

export default MagneticButton;
