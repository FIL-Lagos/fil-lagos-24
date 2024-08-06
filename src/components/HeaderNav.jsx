import { useState } from 'react';

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#131744] p-4 lg:px-10 flex justify-between items-center">
      <img src="/images/logo.png" alt="Logo" className="h-8" />
      <div className="hidden md:flex text-[#F6FBFF] w-[40%] justify-between text-sm">
        <p>ABOUT</p>
        <p>SPONSORS</p>
        <p>EVENTS</p>
        <p>SPEAKERS</p>
        <p>AGENDA</p>
      </div>
      <a href="https://lu.ma/FIL-LAGOS" target='_blank'>
        <button className="hidden md:block bg-[#0A48C0] text-white rounded-full p-2 px-10 border-2 border-[#52F4FE]">
          REGISTER
        </button>
      </a>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 py-10 w-full bg-[#131744] text-[#F6FBFF] flex flex-col items-center md:hidden">
          <p className="py-2">ABOUT</p>
          <p className="py-2">SPONSORS</p>
          <p className="py-2">EVENTS</p>
          <p className="py-2">SPEAKERS</p>
          <p className="py-2">AGENDA</p>
          <button className="bg-[#0A48C0] text-white rounded-full p-2 px-10 border-2 border-[#52F4FE] my-2">
            REGISTER
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
