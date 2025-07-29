import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-blue-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t("CompanyFooterTitle")}
        </p>
      </div>
    </footer>
  );
}