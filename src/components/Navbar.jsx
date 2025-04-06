import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu on small screens

  return (
    <nav>
      <div className="logo">
        <img src="/logo.png" alt="Left Logo" />
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger icon (three lines) */}
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={isOpen ? 'open' : ''}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#event" onClick={() => setIsOpen(false)}>Event</a></li>
        <li><a href="#speaker" onClick={() => setIsOpen(false)}>Speakers</a></li>
        <li><a href="#committee" onClick={() => setIsOpen(false)}>Committee</a></li>
      </ul>
      <div className="rlogo">
        <img src="/kletech-logo.png" alt="Right Logo" />
      </div>
    </nav>
  );
}

export default Navbar;