import i18next from "i18next";
import { useState, useTransition } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        <div className="text-xl font-bold text-white-800">JMK</div>
        <button
          className="md:hidden text-gray-700 focus:outline-none ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul
          className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 bg-gray-800 md:bg-transparent shadow-md md:shadow-none z-20
            absolute top-full left-0 w-full
            md:static md:w-auto
            transition-[max-height,opacity] duration-500 ease-in-out
            ${
              open
                ? "max-h-96 opacity-100 pointer-events-auto items-center"
                : "max-h-0 opacity-0 pointer-events-none items-center"
            }
            md:opacity-100 md:max-h-none md:pointer-events-auto md:flex md:items-start`
          }
        >
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-white-700 hover:text-white-600 transition"
              onClick={() => setOpen(false)}
            >
              {t('MainPage')}
            </Link>
          </li>
          <li>
            <Link
              to="/offer"
              className="block px-4 py-2 text-white-700 hover:text-white-600 transition"
              onClick={() => setOpen(false)}
            >
              {t('Offer')}
            </Link>
          </li>
          <li>
            <Link
              to="/prices"
              className="block px-4 py-2 text-white-700 hover:text-white-600 transition"
              onClick={() => setOpen(false)}
            >
              {t('PriceList')}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-white-700 hover:text-white-600 transition"
              onClick={() => setOpen(false)}
            >
              {t('Contact')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;