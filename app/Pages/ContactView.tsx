import { useTranslation } from "react-i18next";
import { LocationMap } from "~/components/LocationMap";
import CompanyDetails from "~/data/CompanyDetails";
// Import the SVG as a React component
import LocationIcon from "~/assets/svgs/location-icon.svg";
import PhoneCallIcon from "~/assets/svgs/phone-call.svg";
import { Header } from "~/components/Header";
import { Text } from "~/components/Text";
import B2BCalculator from "~/components/B2bCalculator";

const ContactView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 bg-white shadow-md rounded-lg">
        <div className="fade-in-up">
        <Header>{t("ContactWithUs")}</Header>
      <p className="text-center text-gray-700 mb-8">{t("ContactUsMessage")}</p>

        </div>
      <div className="fade-in-up animate-delay-300  flex flex-col md:flex-row gap-8 mb-8">
        {/* Kontakt z nami */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-start gap-3">
            {/* Phone Icon */}
            <img src={PhoneCallIcon} alt="Kontakt z biurem ksiegowym" className="w-8 h-8 mt-1 text-gray-800" />
            <div>
            <Header type="h2">{t("Contact")}</Header>
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
        <div  className="flex-1 flex flex-col gap-6 r">
          <div className="flex items-start gap-3">
            {/* Location Icon from assets */}
            <img src={LocationIcon} alt="Spotkanie z biurem ksiegowym" className="w-8 h-8 mt-1 text-gray-800" />
            <div>
                <Header type="h2">{t("Address")}</Header>
                <Text bold>{CompanyDetails.title}</Text>
                <Text>{CompanyDetails.address}</Text>
                <Text>NIP: {CompanyDetails.nip}</Text>
                <Text>REGON: {CompanyDetails.regon}</Text>
            </div>
          </div>
        </div>
      </div>
      {/* Map full width */}
      <div className="w-full fade-in-up animate-duration-700 animate-delay-500 ">
        <LocationMap />
      </div>
    </div>
  );
};

export default ContactView;