import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="centerone mt-10 py-8">
      <p>
        &copy; {currentYear} Larry Chang. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
