import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 mb-6">
          <li>
            <Link
              to="/"
              className={`block px-4 py-2 text-sm transition ${
                currentPath === "/" ? "text-white font-bold" : "text-white/70"
              } hover:text-white`}
            >
              {t("MainPage")}
            </Link>
          </li>
          <li>
            <Link
              to="/prices"
              className={`block px-4 py-2 text-sm transition ${
                currentPath === "/prices" ? "text-white font-bold" : "text-white/70"
              } hover:text-white`}
            >
              {t("PriceList")}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`block px-4 py-2 text-sm transition ${
                currentPath === "/contact" ? "text-white font-bold" : "text-white/70"
              } hover:text-white`}
            >
              {t("Contact")}
            </Link>
          </li>
        </ul>
        <p className="text-white font-semibold mb-2">Przydatne linki</p>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6 text-sm text-white/80">
            <a href="https://ekrs.ms.gov.pl/web/wyszukiwarka-krs/strona-glowna/" target="_blank" rel="noopener noreferrer">Wyszukiwarka KRS</a>
            <a href="https://www.biznes.gov.pl/pl/eceidg" target="_blank" rel="noopener noreferrer">CEIDG</a>
            <a href="https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx" target="_blank" rel="noopener noreferrer">Baza REGON</a>
            <a href="https://www.podatki.gov.pl/wykaz-podatnikow-vat/" target="_blank" rel="noopener noreferrer">Wykaz podatników VAT</a>
            <a href="https://ec.europa.eu/taxation_customs/vies/" target="_blank" rel="noopener noreferrer">Potwierdzenie numeru VAT (VIES)</a>
        </div>

        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} {t("CompanyFooterTitle")}
        </p>
      </div>
    </footer>
  );
};
