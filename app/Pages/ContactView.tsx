import { useTranslation } from "react-i18next";
import { LocationMap } from "~/components/LocationMap";
import CompanyDetails from "~/data/CompanyDetails";
// Import the SVG as a React component
import LocationIcon from "~/assets/svgs/location-icon.svg";
import PhoneCallIcon from "~/assets/svgs/phone-call.svg";

export const ContactView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">{t("ContactWithUs")}</h1>
      <p className="text-center text-gray-700 mb-8">{t("ContactUsMessage")}</p>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Kontakt z nami */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-start gap-3">
            {/* Phone Icon */}
            <img src={PhoneCallIcon} alt="Phone" className="w-8 h-8 mt-1 text-gray-800" />
            <div>
              <h2 className="text-lg font-bold mb-2 text-gray-700">{t("Contact")}</h2>
              <div className="text-gray-700">
                {t("Phone")} <a href={`tel:${CompanyDetails.tel}`} className="text-blue-600 underline">{CompanyDetails.tel}</a>
              </div>
              <div className="text-gray-700">
                E-mail: <a href={`mailto:${CompanyDetails.email}`} className="text-blue-600 underline">{CompanyDetails.email}</a>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                {t('ContactWithUsTitle')}<br />
                {t('OpenedHours')} <span className="font-bold">{CompanyDetails.openedHours}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Nasz adres */}
        <div className="flex-1 flex flex-col gap-6 r">
          <div className="flex items-start gap-3">
            {/* Location Icon from assets */}
            <img src={LocationIcon} alt="Location" className="w-8 h-8 mt-1 text-gray-800" />
            <div>
              <h2 className="text-lg font-bold mb-2 text-gray-700">{t("Address")}</h2>
              <div className="font-bold text-gray-700">{CompanyDetails.title}</div>
              <div className="text-gray-700">{CompanyDetails.address}</div>
              <div className="text-gray-700">NIP: {CompanyDetails.nip}</div>
              <div className="text-gray-700">REGON: {CompanyDetails.regon}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Map full width */}
      <div className="w-full">
        <LocationMap />
      </div>
    </div>
  );
};