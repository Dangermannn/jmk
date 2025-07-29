import { useTranslation } from "react-i18next";
import Card from "~/components/Card";
import { Header } from "~/components/Header";
import Image from "~/assets/images/price-bg-img.jpg";
import Welcome from "~/components/Welcome";

const HomeView = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Header Section */}
      <Welcome/>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6  mb-12 fade-in-up animate-duration-700 animate-delay-300">
                <Card
            imageSrc={Image}
            title={t("RevenueAndExpenseTitle")}
            description="A stunning view of the mountains during sunrise."
          />
                  <Card
            imageSrc={Image}
            title={t("RevenueWithoutCostsTitle")}
            description="A stunning view of the mountains during sunrise."
          />
                  <Card
            imageSrc={Image}
            title={t("TradeBooksTitle")}
            description="A stunning view of the mountains during sunrise."
          />
        <Card
            imageSrc={Image}
            title={t("PayrollService")}
            description="A stunning view of the mountains during sunrise."
          />
      </div>

<section className="w-full mb-8 bg-white shadow-inner py-12 px-6 fade-in-up animate-duration-700 animate-delay-500">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
      {t("CompanyTitle")}
    </h2>
    <p className="mb-4 text-gray-800 text-justify">
        {t("CompanyHistory")}
    </p>

    <h3 className="text-xl font-semibold mb-2 text-blue-800">Zakres usług księgowych obejmuje:</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>prowadzenie Ksiąg Przychodów i Rozchodów</li>
      <li>rozliczenia Ewidencji Ryczałtowych</li>
      <li>prowadzenie Ksiąg rachunkowych</li>
      <li>ewidencja środków trwałych i wartości niematerialnych i prawnych</li>
      <li>rozliczenia VAT, PIT, CIT</li>
      <li>deklaracje do ZUS</li>
      <li>wnioski VZM o zwrot podatku VAT</li>
      <li>reprezentacja przed US, ZUS i innymi organami</li>
      <li>wsparcie podczas kontroli podatkowych</li>
    </ul>
  </div>
</section>

{/* CTA Section */}
<section className="w-full bg-blue-50 py-12 px-6 fade-in-up animate-duration-700 animate-delay-700">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
      Zadzwoń! Napisz! Pomożemy Ci!
    </h2>
    <p className="text-gray-800 mb-6">
      Pomagamy w wypełnieniu dokumentów dotyczących:
    </p>
    <ul className="list-disc list-inside text-gray-700 text-left mx-auto inline-block">
      <li>rejestracji firmy (CEIDG, US, ZUS itp.)</li>
      <li>pozyskania środków z Urzędu Pracy</li>
      <li>pozyskania środków na nowe miejsca pracy</li>
      <li>wniosków kredytowych</li>
      <li>obsługi administracyjnej firmy</li>
      <li>innych zagadnień</li>
    </ul>
  </div>
</section>
    </>
  );
};

export default HomeView;