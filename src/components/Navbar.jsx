import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCityToursOpen, setIsCityToursOpen] = useState(false);
  const [isDesertSafariOpen, setIsDesertSafariOpen] = useState(false);
  const [isTicketopen, setisTicketopen] = useState(false);
  const [isAdventureOpen, setIsAdventureOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center text-[#077045] text-2xl font-bold"
            >
              <img src="/logo.png" className="h-20 sm:px-6" alt="HBTS Logo" />
              <h1 className="Equila text-xl sm:text-2xl">HBTS Travel and Tourism</h1>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 uppercase">
            <div
              className="relative group"
              onMouseEnter={() => setIsCityToursOpen(true)}
              onMouseLeave={() => setIsCityToursOpen(false)}
            >
              <a
                href="/package"
                className="flex items-center text-gray-700 hover:text-teal-500 font-medium"
              >
                City Tours
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isCityToursOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {isCityToursOpen && (
                <div className="absolute left-0 w-40 bg-white shadow-lg rounded-md z-10">
                  <a
                    href="/citytours/abu-dhabi"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                    Abu Dhabi
                  </a>
                  <a
                    href="/citytours/dubai"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                    Dubai
                  </a>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setIsDesertSafariOpen(true)}
              onMouseLeave={() => setIsDesertSafariOpen(false)}
            >
              <a
                href="/desertsafari"
                className="flex items-center text-gray-700 hover:text-teal-500 font-medium"
              >
                Desert Safari
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isDesertSafariOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              {isDesertSafariOpen && (
                <div className="absolute left-0 w-56 bg-white shadow-lg rounded-md z-10">
                  <a
                    href="/desertsafari/morning"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                    Morning Desert Safari
                  </a>
                  <a
                    href="/desertsafari/evening"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                    Evening Desert Safari
                  </a>
                  <a
                    href="/desertsafari/dune-buggy"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                    Dune Buggy
                  </a>
                  <a
                    href="/desertsafari/quad-biking"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                    Quad Biking
                  </a>
                </div>
              )}
            </div>

            <div 
            className="relative group"
            onMouseEnter={() => setisTicketopen(true)}
            onMouseLeave={() => setisTicketopen(false)}
            >
            <a
              href="/tickets"
              className="flex items-center text-gray-700 hover:text-teal-500 font-medium"
            >
              Ticket
              <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isTicketopen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
            </a>
            {isTicketopen && (
                <div className="absolute left-0 w-52 bg-white shadow-lg rounded-md z-10">
                  <a
                    href="/tickets/AttractionTickets"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                   Attraction Tickets
                  </a>
                  <a
                    href="/tickets/ThemeParks"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                    Theme Parks
                  </a>
               </div>
            )}

            </div>

            <div className="relative group"
            onMouseEnter={() => setIsAdventureOpen(true)}
            onMouseLeave={() => setIsAdventureOpen(false)}
            >
            <a
              href="/adventure"
              className="flex items-center text-gray-700 hover:text-teal-500 font-medium"
            >
              Adventure

              <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                    isAdventureOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
</a>
                {isAdventureOpen && (
                <div className="absolute left-0 w-52 bg-white shadow-lg rounded-md z-10">
                  <a
                    href="/adventure/helicopter"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                   Helicopter Tours
                  </a>
                  <a
                    href="/adventure/hotairballoon"
                    className="block px-4 py-2 text-gray-700 hover:text-teal-500"
                  >
                  Hot Air Balloon
                  </a>
                </div>
              )}

            </div>
             
            <a
              href="/dhow-cruise"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              Dhow Cruise
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-500 hover:text-teal-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="/package"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Packages
            </a>
            <a
              href="/gallery"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="/workwithus"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Join Us
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
