import React from "react";
import { motion } from "framer-motion";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function Header() {
  const handleRedirectCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf"; // File path 
    link.download = "CV-RazKatz.pdf"; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header>
      {/* Header text (h1) with animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }} // Start invisible and above
        animate={{ opacity: 1, y: 0 }}  // End visible and at normal position
        transition={{ duration: 2, ease: "easeOut" }} // Duration and easing
      >
        razo
      </motion.h1>

      {/* CV Button container */}
      <motion.div
        className="cv-button"
        initial={{ opacity: 0, y: -50 }} // Start invisible and above
        animate={{ opacity: 1, y: 0 }}  // End visible and at normal position
        transition={{ duration: 2, ease: "easeOut" }} // Same animation
      >
        <button onClick={handleRedirectCV} data-textify>
          cv
        </button>
        <AttachFileIcon onClick={handleRedirectCV} />
      </motion.div>
    </header>
  );
}

export default Header;
