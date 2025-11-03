import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="centerone">
      <br></br> <br></br> <br></br> <br></br> 
      <p>
        &copy; {currentYear} Larry Chang. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
