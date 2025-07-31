import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa"; // Facebook icon

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row items-center justify-center mb-4">
          {[
            { path: "/", label: t("MainPage") },
            { path: "/prices", label: t("PriceList") },
            { path: "/contact", label: t("Contact") },
          ].map(({ path, label }) => (
            <li key={path} className="md:w-36 flex justify-center md:mx-3 my-1 md:my-0">
              <Link
                to={path}
                className={`block text-sm px-4 py-2 transition text-center ${
                  currentPath === path ? "text-white font-bold" : "text-white/70"
                } hover:text-white`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-white font-semibold mb-2">Przydatne linki</p>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 text-sm text-white/80">
          <a
            href="https://ekrs.ms.gov.pl/web/wyszukiwarka-krs/strona-glowna/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wyszukiwarka KRS
          </a>
          <a
            href="https://www.biznes.gov.pl/pl/eceidg"
            target="_blank"
            rel="noopener noreferrer"
          >
            CEIDG
          </a>
          <a
            href="https://wyszukiwarkaregon.stat.gov.pl/appBIR/index.aspx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baza REGON
          </a>
          <a
            href="https://www.podatki.gov.pl/wykaz-podatnikow-vat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wykaz podatników VAT
          </a>
          <a
            href="https://ec.europa.eu/taxation_customs/vies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Potwierdzenie numeru VAT (VIES)
          </a>
        </div>

        {/* Facebook Icon below Helpful Links */}
        <a
          href="https://www.facebook.com/share/1EqiSFM7u9" // Replace with your real page
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 text-white/80 hover:text-white transition"
        >
          <FaFacebook size={24} />
        </a>

        {/* Footer Bottom Text */}
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} {t("CompanyFooterTitle")}
        </p>
      </div>
    </footer>
  );
};
