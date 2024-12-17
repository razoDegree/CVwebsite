import React, { useContext } from "react";
import wavingHand from "../assets/wavingHand.gif";
import { ScrollbarContext } from "./SmoothScroll";

function ShortDescription() {
  const scrollbarRef = useContext(ScrollbarContext);

  const scrollToWorkSection = () => {
    const workSection = document.getElementById("work");
    if (scrollbarRef.current && workSection) {
      const targetPosition = workSection.offsetTop; // Element postion
      scrollbarRef.current.scrollTo(0, targetPosition, 1000); 
    }
  };

  return (
    <div className="shortDes">
      <img src={wavingHand} alt="waving hand" />
      <div className="shortDes-text">
        <p>
          Hi, I'm Raz, also known as Razo. I'm a third-year Computer Science and
          Entrepreneurship student with a passion for innovation, problem-solving,
          and continuous learning.
        </p>
        <button onClick={scrollToWorkSection}>Find more about me</button>
      </div>
    </div>
  );
}

export default ShortDescription;
