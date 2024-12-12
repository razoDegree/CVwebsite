import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Pic from "./Pic";

const languegs = ['/src/assets/curosel/c--4.svg',
    '/src/assets/curosel/c-1.svg',
    '/src/assets/curosel/css-3.svg',
    '/src/assets/curosel/git-icon.svg',
    '/src/assets/curosel/java-icon.svg',
    '/src/assets/curosel/logo-javascript.svg',
    '/src/assets/curosel/nodejs-1.svg',
    '/src/assets/curosel/python-icon.svg',
    '/src/assets/curosel/react-2.svg',
]

function Carousel() {
    const carouselAnimation = useAnimation();
    const carouselElementRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted && carouselElementRef.current) {
            const carousel = carouselElementRef.current;
            carouselAnimation.start({
                x: -carousel.scrollWidth - 10,
                transition: {
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0,
                    duration: 15,
                },
            });
        }

    }, [carouselAnimation, carouselElementRef, isMounted]);

    return (
        <motion.div
            ref={carouselElementRef}
            animate={carouselAnimation}
            className="carousel-pic"
        >
            <div className='curousel'>
                {[...languegs].map((item, idx) => (

                    <Pic key={idx} item={item} />

                ))}

            </div>

        </motion.div>

    );
}

export default Carousel;