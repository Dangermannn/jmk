import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const MainPage = "Strona główna";
const AboutUs = "O nas";
const Services = "Usługi";
const Service = "Usługa";
const Address = "Adres";
const Contact$2 = "Kontakt";
const Offer = "Oferta";
const Phone = "Telefon:";
const PriceList = "Cennik";
const ContactWithUsTitle = "Kontakt z nami:";
const OpenedHours = "pn. - sob. w godzinach";
const PricePerMonth = "{{price}} zł/miesiąc";
const PricePerYear = "{{price}} zł/rok";
const PricePerDay = "{{price}} zł/dzień";
const PricePerUnit = "{{price}} zł/szt.";
const PricePerHour = "{{price}} zł/godz.";
const PricePerEntry = "{{price}} zł za zapis";
const PricePerDocument = "{{price}} zł/document";
const FromPricePln = "Od {{price}} zł";
const FromPricePlnPerUnit = "Od {{price}} zł/szt.";
const PricePerMinutes = "{{price}} zł/{{minutes}} min.";
const PricePerMonit = "{{price}} zł/monit";
const PricePerNumberOfDocuments = "{{price}} zł za każde rozpoczęte {{count}} dokumentów";
const MinimumPlusValuePerEarchCorrectedDocument = "Min. {{price}} zł + {{value}} zł za każdy korygowany dokument";
const StatutoryInterest = "Odsetki ustawowe";
const PriceValue = "{{price}} zł";
const ServicePrice = "Cena usługi";
const NoVatRegistered = "Bez ewidencji VAT";
const VatRegistered = "Z ewidencją VAT";
const RevenueAndExpenseLedger = "Księga przychodów i rozchodów wg ilości dokumentów";
const RevenueWithoutCosts = "Ryczałt ewidencjonowany wg ilości dokumentów";
const RevenueAndExpenseTitle = "Księga przychodów i rozchodów";
const RevenueWithoutCostsTitle = "Ryczałt ewidencjonowany";
const TradeBooksTitle = "Księgi handlowe";
const TradeBooks = "Księgi handlowe wg ilości dokumentów";
const PricesHeader = "Poniżej zamieszczono cennik usług księgowych";
const PricesMessage = "Podane ceny są cenami";
const DocumentsCount = "Liczba dokumentów";
const EveryRegisterAboveLimit = "Każdy zapis powyżej ustalonego limitu";
const AnnualSettlement = "Rozliczenie roczne";
const AverageValueOfIncome = "Średnia wartość wynagrodzenia z tyt. usług rozliczanego roku";
const AnnualReport = "Raport roczny";
const Additionally = "Dodatkowo";
const RangeDocuments = "{{range}} dokumentów";
const PayrollService = "Obsluga płacowa";
const AdditionalFees = "Opłaty dodatkowe";
const PayrollEmpoymentContract = "Umowa o pracę/zlecenie za każdego pracownika (wystawienie rachunku, listy płac, rozliczenie ZUS i PIT-4)";
const PayrollContractPreparation = "Przygotowanie umowy o pracę/zlecenia/o dzieło, świadectwa pracy, aneksu do umowy (w tym skierowanie na badania lekarskie)";
const AnnualDeclaration = "Roczna deklaracja PIT-11, PIT-4R";
const ZusEntrepreneursDeclaration = "Deklaracje ZUS przedsiębiorcy (DRA, Z-3, ZAS-12, ZWUA, ZUA, ZZA itp.)";
const EmploymentAndEarnigsCertificate = "Zaświadczenie o zatrudnieniu i zarobkach";
const InvoiceSettlementWithCurrencyExchange = "Rozliczenie faktury w walucie z przeliczeniem różnic kursowych";
const DeclarationPreparation = "Sporządzenie i wysyłka deklaracji VAT-UE/VAT-9M/VAT-8";
const BankTransactionRecalculation = "Przeliczenie operacji bankowych w WB w walucie";
const EmailInvoiceIssuance = "Wystawienie not, faktur, faktur korygujących z wysyłką na email";
const PostalInvoiceIssuance = "Wystawienie not, faktur, faktur korygujących z wysyłką pocztą";
const EmailDocumentationSending = "Wysyłka emailem dokumentacji księgowej do podmiotów trzecich";
const LeasingApplicationCompletion = "Wypełnienie wniosków leasingowych";
const PreparationOfAdditionalDocuments = "Sporządzenie dodatkowych pism/wniosków/deklaracji";
const PreparationOfDocumentsForBailiff = "Przygotowanie i wysyłka pism do komornika";
const DelegationPreparation = "Wyliczenie delegacji służbowej";
const MonthCorrection = "Koretka miesiąca zaksięgowanego";
const ContactWithTaxOffice = "Kontakt z urzędem skarbowym/ZUS/GUS";
const LatePayment = "Płatność za usługę biura po terminie";
const RemindersForUnpaidInvoices = "Monity za nieopłacone faktury biura";
const LateDeliverySurcharge = "Dopłata za opóźnienie w dostarczaniu kompletu dokumentów";
const StandbyFee = "Opłata postojowa za okres zawieszenia działalności";
const AccountingConsultation = "Konsultacja księgowa";
const ReportOrUpdateVat = "Zgłoszenie/aktualizacja VAT-R/VAT-26/VAT-Z/NIP-8/NIP-2";
const ReportOrUpdateInsurance = "Zgłoszenie/zmiana ubezpieczenia przedsiębiorcy w ZUS";
const SubmitDocumentsInPerson = "Złożenie dokumentów osobiście w ZUS/US/GUS i in.";
const EstablishBusiness = "Założenie działalności gospodarczej jdg/spółka";
const OfficeServices = "Usługi biurowe: porządkowanie dokumentów, np. zgodnie z umową, chronologicznie, itp.";
const PrepareDocumentsForTaxChange = "Przygotowanie dokumentów o zmianie formy opodatkowania";
const AdditionalAccountingServices = "Dodatkowe usługi księgowe niewymienione w cenniku";
const Discounts = "Rabaty";
const ClientsCommandDiscount = "Polecenie klienta";
const ClientsCommandDiscountValue = "{{percent}}% usługi księgowej przez 12 miesięcy (rabaty się sumują)";
const DocumentsDeliveryUpTo5DaysOfMonths = "Dostarczenie dokumentów do 5 dnia miesiąca";
const DocumentsDeliveryUpTo5DaysOfMonthsValue = "{{percent}}% usługi księgowej w danym miesiącu";
const ContactWithUs = "Skontaktuj się z nami";
const ContactUsMessage = "Jeśli masz pytania dotyczące cennika lub potrzebujesz dodatkowych informacji, skontaktuj się z nami.";
const ContactUsEmail = "Napisz do nas na adres: {{email}}";
const CompanyTitle = "Biuro Rachunkowe JMK Monika Kruszewska";
const CompanyFooterTitle = "Biuro Rachunkowe JMK Monika Kruszewska. Wszystkie prawa zastrzeżone.";
const CompanyHistory = "Biuro Rachunkowe JMK Monika Kruszewska działa od 2013 roku i posiada certyfikat księgowy nr 37370/2010 wydany przez Ministerstwo Finansów. Biuro jest ubezpieczone od odpowiedzialności cywilnej.";
const CompanyAddress = "05-090 Raszyn\nul. Żeromskiego 1A";
const NipValue = "522 214 02 82";
const plJSON = {
  MainPage,
  AboutUs,
  Services,
  Service,
  Address,
  Contact: Contact$2,
  Offer,
  Phone,
  PriceList,
  ContactWithUsTitle,
  OpenedHours,
  PricePerMonth,
  PricePerYear,
  PricePerDay,
  PricePerUnit,
  PricePerHour,
  PricePerEntry,
  PricePerDocument,
  FromPricePln,
  FromPricePlnPerUnit,
  PricePerMinutes,
  PricePerMonit,
  PricePerNumberOfDocuments,
  MinimumPlusValuePerEarchCorrectedDocument,
  StatutoryInterest,
  PriceValue,
  ServicePrice,
  NoVatRegistered,
  VatRegistered,
  RevenueAndExpenseLedger,
  RevenueWithoutCosts,
  RevenueAndExpenseTitle,
  RevenueWithoutCostsTitle,
  TradeBooksTitle,
  TradeBooks,
  PricesHeader,
  PricesMessage,
  DocumentsCount,
  EveryRegisterAboveLimit,
  AnnualSettlement,
  AverageValueOfIncome,
  AnnualReport,
  Additionally,
  RangeDocuments,
  PayrollService,
  AdditionalFees,
  PayrollEmpoymentContract,
  PayrollContractPreparation,
  AnnualDeclaration,
  ZusEntrepreneursDeclaration,
  EmploymentAndEarnigsCertificate,
  InvoiceSettlementWithCurrencyExchange,
  DeclarationPreparation,
  BankTransactionRecalculation,
  EmailInvoiceIssuance,
  PostalInvoiceIssuance,
  EmailDocumentationSending,
  LeasingApplicationCompletion,
  PreparationOfAdditionalDocuments,
  PreparationOfDocumentsForBailiff,
  DelegationPreparation,
  MonthCorrection,
  ContactWithTaxOffice,
  LatePayment,
  RemindersForUnpaidInvoices,
  LateDeliverySurcharge,
  StandbyFee,
  AccountingConsultation,
  ReportOrUpdateVat,
  ReportOrUpdateInsurance,
  SubmitDocumentsInPerson,
  EstablishBusiness,
  OfficeServices,
  PrepareDocumentsForTaxChange,
  AdditionalAccountingServices,
  Discounts,
  ClientsCommandDiscount,
  ClientsCommandDiscountValue,
  DocumentsDeliveryUpTo5DaysOfMonths,
  DocumentsDeliveryUpTo5DaysOfMonthsValue,
  ContactWithUs,
  ContactUsMessage,
  ContactUsEmail,
  CompanyTitle,
  CompanyFooterTitle,
  CompanyHistory,
  CompanyAddress,
  NipValue
};
i18next.use(initReactI18next).init({
  resources: {
    pl: {
      translation: {
        ...plJSON
      }
    }
  },
  lng: "pl",
  // Set the initial language of the App
  fallbackLng: "pl"
});
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Card = ({ imageSrc, title, description }) => {
  return /* @__PURE__ */ jsxs("div", { className: "group relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-[1.02]", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: imageSrc,
        alt: title,
        className: "w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 text-center", children: title }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/70 text-white p-4 flex items-center justify-center text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out", children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: description }) })
  ] });
};
const Header = ({ children, type = "h1", className }) => {
  const Heading = type;
  const headerClassName = type === "h1" ? "text-5xl font-bold text-center mb-2 text-gray-900" : "text-lg font-bold mb-2 text-gray-700";
  return /* @__PURE__ */ jsx(Heading, { className: `${headerClassName} ${className}`, children });
};
const Image = "/assets/price-bg-img-C3SMfVbB.jpg";
const Welcome = () => {
  const text = "Profesjonalna obsługa księgowa dla firm i osób fizycznych. Zaufaj naszemu doświadczeniu i skontaktuj się już dziś!";
  return /* @__PURE__ */ jsxs("div", { className: "fade-in-up animate-duration-700 animate-delay-10 relative w-full h-[60vh] rounded-2xl overflow-hidden mx-auto mb-10 my-12 shadow-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('./assets/images/price-bg-img.jpg')] bg-cover bg-center" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/80 backdrop-blur-sm" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center relative z-10 h-full flex-col text-center px-4", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: Image,
          alt: "Logo",
          className: "w-60 h-60 object-contain mb-3"
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "text-white text-3xl md:text-5xl font-bold mb-4", children: "Biuro Rachunkowe JMK Monika Kruszewska" }),
      /* @__PURE__ */ jsx("p", { className: "text-white text-lg md:text-2xl font-medium max-w-3xl", children: text })
    ] })
  ] });
};
const HomeView = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Welcome, {}),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6  mb-12 fade-in-up animate-duration-700 animate-delay-300", children: [
      /* @__PURE__ */ jsx(
        Card,
        {
          imageSrc: Image,
          title: t("RevenueAndExpenseTitle"),
          description: "A stunning view of the mountains during sunrise."
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          imageSrc: Image,
          title: t("RevenueWithoutCostsTitle"),
          description: "A stunning view of the mountains during sunrise."
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          imageSrc: Image,
          title: t("TradeBooksTitle"),
          description: "A stunning view of the mountains during sunrise."
        }
      ),
      /* @__PURE__ */ jsx(
        Card,
        {
          imageSrc: Image,
          title: t("PayrollService"),
          description: "A stunning view of the mountains during sunrise."
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "w-full mb-8 bg-white shadow-inner py-12 px-6 fade-in-up animate-duration-700 animate-delay-500", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-blue-900 mb-4", children: t("CompanyTitle") }),
      /* @__PURE__ */ jsx("p", { className: "mb-4 text-gray-800 text-justify", children: t("CompanyHistory") }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-blue-800", children: "Zakres usług księgowych obejmuje:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-700 space-y-1", children: [
        /* @__PURE__ */ jsx("li", { children: "prowadzenie Ksiąg Przychodów i Rozchodów" }),
        /* @__PURE__ */ jsx("li", { children: "rozliczenia Ewidencji Ryczałtowych" }),
        /* @__PURE__ */ jsx("li", { children: "prowadzenie Ksiąg rachunkowych" }),
        /* @__PURE__ */ jsx("li", { children: "ewidencja środków trwałych i wartości niematerialnych i prawnych" }),
        /* @__PURE__ */ jsx("li", { children: "rozliczenia VAT, PIT, CIT" }),
        /* @__PURE__ */ jsx("li", { children: "deklaracje do ZUS" }),
        /* @__PURE__ */ jsx("li", { children: "wnioski VZM o zwrot podatku VAT" }),
        /* @__PURE__ */ jsx("li", { children: "reprezentacja przed US, ZUS i innymi organami" }),
        /* @__PURE__ */ jsx("li", { children: "wsparcie podczas kontroli podatkowych" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "w-full bg-blue-50 py-12 px-6 fade-in-up animate-duration-700 animate-delay-700", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-blue-900 mb-4", children: "Zadzwoń! Napisz! Pomożemy Ci!" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-800 mb-6", children: "Pomagamy w wypełnieniu dokumentów dotyczących:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-gray-700 text-left mx-auto inline-block", children: [
        /* @__PURE__ */ jsx("li", { children: "rejestracji firmy (CEIDG, US, ZUS itp.)" }),
        /* @__PURE__ */ jsx("li", { children: "pozyskania środków z Urzędu Pracy" }),
        /* @__PURE__ */ jsx("li", { children: "pozyskania środków na nowe miejsca pracy" }),
        /* @__PURE__ */ jsx("li", { children: "wniosków kredytowych" }),
        /* @__PURE__ */ jsx("li", { children: "obsługi administracyjnej firmy" }),
        /* @__PURE__ */ jsx("li", { children: "innych zagadnień" })
      ] })
    ] }) })
  ] });
};
const Footer = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("footer", { className: "bg-blue-800 text-white py-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " ",
    t("CompanyFooterTitle")
  ] }) }) });
};
const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);
  console.log("current path:", currentPath);
  return /* @__PURE__ */ jsx("nav", { className: "bg-blue-700 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-3 flex items-center justify-between relative", children: [
    /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white-800", children: "JMK" }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "md:hidden text-white-700 focus:outline-none ml-auto",
        onClick: () => setOpen(!open),
        "aria-label": "Toggle menu",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: open ? /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
              }
            ) : /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M4 6h16M4 12h16M4 18h16"
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs(
      "ul",
      {
        className: `flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 bg-gray-800 md:bg-transparent shadow-md md:shadow-none z-20
            absolute top-full left-0 w-full
            md:static md:w-auto
            transition-[max-height,opacity] duration-500 ease-in-out
            ${open ? "max-h-96 opacity-100 pointer-events-auto items-center" : "max-h-0 opacity-0 pointer-events-none items-center"}
            md:opacity-100 md:max-h-none md:pointer-events-auto md:flex md:items-start`,
        children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/",
              className: `block px-4 py-2 text-lg transition ${currentPath === "/" ? "text-white font-bold" : "text-white/70"} hover:text-white`,
              onClick: () => setOpen(false),
              children: t("MainPage")
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/prices",
              className: `block px-4 py-2 text-lg transition ${currentPath === "/prices" ? "text-white font-bold" : "text-white/70"} hover:text-white`,
              onClick: () => setOpen(false),
              children: t("PriceList")
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: "/contact",
              className: `block px-4 py-2 text-lg transition ${currentPath === "/contact" ? "text-white font-bold" : "text-white/70"} hover:text-white`,
              onClick: () => setOpen(false),
              children: t("Contact")
            }
          ) })
        ]
      }
    )
  ] }) });
};
const PageContainer = ({ children }) => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen  flex flex-col bg-gray-100", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "container flex-1 mx-auto p-4 w-full", children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const Home = UNSAFE_withComponentProps(function Home2() {
  return /* @__PURE__ */ jsx(PageContainer, {
    children: /* @__PURE__ */ jsx(HomeView, {})
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const LocationMap = () => {
  return /* @__PURE__ */ jsx("div", { className: "border-solid border-3 border-gray-800 rounded-sm w-full", style: { height: 400 }, children: /* @__PURE__ */ jsx(
    "iframe",
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303.54238843788175!2d20.925712652241668!3d52.16084393471811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719338166f218e1%3A0x54674f7b5fb8b53!2sStefana%20%C5%BBeromskiego%201A%2C%2005-090%20Raszyn!5e0!3m2!1spl!2spl!4v1753692794878!5m2!1spl!2spl",
      className: "w-full h-full border-0",
      allowFullScreen: true,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade"
    }
  ) });
};
const CompanyDetails = {
  title: "Biuro Rachunkowe JMK Monika Kruszewska",
  address: "05-090 Raszyn, ul. Żeromskiego 1A",
  nip: "522 214 02 82",
  regon: "123 123 123",
  tel: "504 529 696",
  email: "biuro@jmk.net.pl",
  openedHours: "7 - 22"
};
const LocationIcon = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23000000'%20width='800px'%20height='800px'%20viewBox='0%200%2032%2032'%20id='icon'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20none;%20}%20%3c/style%3e%3c/defs%3e%3ctitle%3elocation%3c/title%3e%3cpath%20d='M16,18a5,5,0,1,1,5-5A5.0057,5.0057,0,0,1,16,18Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,16,10Z'/%3e%3cpath%20d='M16,30,7.5645,20.0513c-.0479-.0571-.3482-.4515-.3482-.4515A10.8888,10.8888,0,0,1,5,13a11,11,0,0,1,22,0,10.8844,10.8844,0,0,1-2.2148,6.5973l-.0015.0025s-.3.3944-.3447.4474ZM8.8125,18.395c.001.0007.2334.3082.2866.3744L16,26.9079l6.91-8.15c.0439-.0552.2783-.3649.2788-.3657A8.901,8.901,0,0,0,25,13,9,9,0,1,0,7,13a8.9054,8.9054,0,0,0,1.8125,5.395Z'/%3e%3crect%20id='_Transparent_Rectangle_'%20data-name='&lt;Transparent%20Rectangle&gt;'%20class='cls-1'%20width='32'%20height='32'%20transform='translate(0%2032)%20rotate(-90)'/%3e%3c/svg%3e";
const PhoneCallIcon = "/assets/phone-call-DJbncwUg.svg";
const Text = ({ children, bold = false, className }) => {
  return /* @__PURE__ */ jsx("p", { className: `text-gray-700 ${bold ? "font-bold" : ""} ${className}`, children });
};
const ContactView = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto py-8 px-4 bg-white shadow-md rounded-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "fade-in-up", children: [
      /* @__PURE__ */ jsx(Header, { children: t("ContactWithUs") }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-gray-700 mb-8", children: t("ContactUsMessage") })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "fade-in-up animate-delay-300  flex flex-col md:flex-row gap-8 mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col gap-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("img", { src: PhoneCallIcon, alt: "Phone", className: "w-8 h-8 mt-1 text-gray-800" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Header, { type: "h2", children: t("Contact") }),
          /* @__PURE__ */ jsxs("div", { className: "text-gray-700", children: [
            t("Phone"),
            " ",
            /* @__PURE__ */ jsx("a", { href: `tel:${CompanyDetails.tel}`, className: "text-blue-600 underline", children: CompanyDetails.tel })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-gray-700", children: [
            "E-mail: ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${CompanyDetails.email}`, className: "text-blue-600 underline", children: CompanyDetails.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 text-sm text-gray-700", children: [
            t("ContactWithUsTitle"),
            /* @__PURE__ */ jsx("br", {}),
            t("OpenedHours"),
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-bold", children: CompanyDetails.openedHours })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col gap-6 r", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("img", { src: LocationIcon, alt: "Location", className: "w-8 h-8 mt-1 text-gray-800" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Header, { type: "h2", children: t("Address") }),
          /* @__PURE__ */ jsx(Text, { bold: true, children: CompanyDetails.title }),
          /* @__PURE__ */ jsx(Text, { children: CompanyDetails.address }),
          /* @__PURE__ */ jsxs(Text, { children: [
            "NIP: ",
            CompanyDetails.nip
          ] }),
          /* @__PURE__ */ jsxs(Text, { children: [
            "REGON: ",
            CompanyDetails.regon
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full fade-in-up animate-duration-700 animate-delay-500 ", children: /* @__PURE__ */ jsx(LocationMap, {}) })
  ] });
};
const Contact = () => {
  return /* @__PURE__ */ jsx(PageContainer, {
    children: /* @__PURE__ */ jsx(ContactView, {})
  });
};
const Contact$1 = UNSAFE_withComponentProps(Contact);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact$1
}, Symbol.toStringTag, { value: "Module" }));
function Accordion({ className, title, children }) {
  var _a;
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: `border border-gray-200 rounded-md overflow-hidden mb-4 ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex justify-between items-center bg-blue-50 text-blue-800 font-medium px-4 py-3 cursor-pointer transition-colors",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: title }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `w-5 h-5 text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: contentRef,
        style: { maxHeight: isOpen ? (_a = contentRef.current) == null ? void 0 : _a.scrollHeight : 0 },
        className: "transition-all duration-300 ease-in-out overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "p-4 text-gray-700 bg-white", children })
      }
    )
  ] });
}
const Table = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "my-4 w-full max-w-full bg-white shadow-md sm:rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("table", { className: "table-auto w-full text-base text-left text-gray-500 dark:text-gray-400", children }) });
};
const TableBody = ({ children }) => {
  return /* @__PURE__ */ jsx("tbody", { children });
};
const TableColumn = ({ children }) => {
  return /* @__PURE__ */ jsx("td", { className: "px-2 py-2 whitespace-normal break-words max-w-[140px] sm:max-w-none", children });
};
const TableColumnHeader = ({ children }) => {
  return /* @__PURE__ */ jsx(
    "th",
    {
      scope: "row",
      className: "px-2 py-2 font-medium text-gray-900 whitespace-normal break-words max-w-[140px] sm:max-w-none dark:text-white",
      children
    }
  );
};
const TableHeader = ({ children }) => {
  return /* @__PURE__ */ jsx("thead", { className: "text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400", children: /* @__PURE__ */ jsx("tr", { children }) });
};
const TableRow = ({ children }) => {
  return /* @__PURE__ */ jsx("tr", { className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600", children });
};
const REVENUE_AND_EXPENSE_LEDGER = [
  { title: i18next.t("RangeDocuments", { range: "0 - 10" }), noVatPrice: i18next.t("PricePerMonth", { price: "240,00" }), vatPrice: i18next.t("PricePerMonth", { price: "360,00" }) },
  { title: i18next.t("RangeDocuments", { range: "11 - 20" }), noVatPrice: i18next.t("PricePerMonth", { price: "300,00" }), vatPrice: i18next.t("PricePerMonth", { price: "420,00" }) },
  { title: i18next.t("RangeDocuments", { range: "21 - 30" }), noVatPrice: i18next.t("PricePerMonth", { price: "360,00" }), vatPrice: i18next.t("PricePerMonth", { price: "480,00" }) },
  { title: i18next.t("RangeDocuments", { range: "31 - 40" }), noVatPrice: i18next.t("PricePerMonth", { price: "420,00" }), vatPrice: i18next.t("PricePerMonth", { price: "540,00" }) },
  { title: i18next.t("RangeDocuments", { range: "41 - 50" }), noVatPrice: i18next.t("PricePerMonth", { price: "480,00" }), vatPrice: i18next.t("PricePerMonth", { price: "600,00" }) },
  { title: i18next.t("RangeDocuments", { range: "51 - 60" }), noVatPrice: i18next.t("PricePerMonth", { price: "540,00" }), vatPrice: i18next.t("PricePerMonth", { price: "660,00" }) },
  { title: i18next.t("RangeDocuments", { range: "61 - 70" }), noVatPrice: i18next.t("PricePerMonth", { price: "600,00" }), vatPrice: i18next.t("PricePerMonth", { price: "720,00" }) },
  { title: i18next.t("RangeDocuments", { range: "71 - 80" }), noVatPrice: i18next.t("PricePerMonth", { price: "660,00" }), vatPrice: i18next.t("PricePerMonth", { price: "780,00" }) }
];
const REVENUE_AND_EXPENSE_LEDGER_ADDITIONAL_SERVICES = [
  { title: i18next.t("EveryRegisterAboveLimit"), price: i18next.t("PricePerDocument", { price: "6" }) },
  { title: i18next.t("AnnualSettlement"), price: i18next.t("PricePerYear", { price: "300,00" }) }
];
const REVENUE_WITHOUT_COSTS = [
  { title: i18next.t("RangeDocuments", { range: "0 - 10" }), price: i18next.t("PricePerMonth", { price: "240" }) },
  { title: i18next.t("RangeDocuments", { range: "11 - 20" }), price: i18next.t("PricePerMonth", { price: "300" }) },
  { title: i18next.t("RangeDocuments", { range: "21 - 30" }), price: i18next.t("PricePerMonth", { price: "360" }) }
];
const REVENUE_WITHOUT_COSTS_ADDITIONAL_SERVICES = [
  { title: i18next.t("EveryRegisterAboveLimit"), price: i18next.t("PricePerDocument", { price: "6" }) },
  { title: i18next.t("AnnualSettlement"), price: i18next.t("PricePerYear", { price: "300,00" }) }
];
const TRADE_BOOKS = [
  { title: i18next.t("RangeDocuments", { range: "0 - 10" }), noVatPrice: i18next.t("PricePerMonth", { price: "1100,00" }), vatPrice: i18next.t("PricePerMonth", { price: "1100,00" }) },
  { title: i18next.t("RangeDocuments", { range: "11 - 20" }), noVatPrice: i18next.t("PricePerMonth", { price: "1600,00" }), vatPrice: i18next.t("PricePerMonth", { price: "1600,00" }) },
  { title: i18next.t("RangeDocuments", { range: "21 - 30" }), noVatPrice: i18next.t("PricePerMonth", { price: "2000,00" }), vatPrice: i18next.t("PricePerMonth", { price: "2100,00" }) },
  { title: i18next.t("RangeDocuments", { range: "31 - 40" }), noVatPrice: i18next.t("PricePerMonth", { price: "2600,00" }), vatPrice: i18next.t("PricePerMonth", { price: "2600,00" }) }
];
const TRADE_BOOKS_ADDITIONAL_SERVICES = [
  { title: i18next.t("EveryRegisterAboveLimit"), price: i18next.t("PricePerDocument", { price: "20" }) },
  { title: `${i18next.t("AnnualReport")}/${i18next.t("AnnualSettlement")}`, price: i18next.t("AverageValueOfIncome") }
];
const PAYROLL_SERVICE = [
  { title: i18next.t("PayrollEmpoymentContract"), price: i18next.t("PricePerMonth", { price: "80,00" }) },
  { title: i18next.t("PayrollContractPreparation"), price: i18next.t("PricePerMonth", { price: "80,00" }) },
  { title: i18next.t("AnnualDeclaration"), price: i18next.t("PricePerYear", { price: "50,00" }) },
  { title: i18next.t("ZusEntrepreneursDeclaration"), price: i18next.t("PricePerUnit", { price: "80,00" }) },
  { title: i18next.t("EmploymentAndEarnigsCertificate"), price: i18next.t("PricePerUnit", { price: "30,00" }) }
];
const ADDITIONAL_FEES = [
  { title: i18next.t("InvoiceSettlementWithCurrencyExchange"), price: i18next.t("PricePerEntry", { price: "20,00" }) },
  { title: i18next.t("DeclarationPreparation"), price: i18next.t("PriceValue", { price: "50,00" }) },
  { title: i18next.t("BankTransactionRecalculation"), price: i18next.t("PricePerEntry", { price: "10,00" }) },
  { title: i18next.t("EmailInvoiceIssuance"), price: i18next.t("PriceValue", { price: "25,00" }) },
  { title: i18next.t("PostalInvoiceIssuance"), price: i18next.t("PriceValue", { price: "70,00" }) },
  { title: i18next.t("EmailDocumentationSending"), price: i18next.t("PricePerDocument", { price: "10,00" }) },
  { title: i18next.t("LeasingApplicationCompletion"), price: i18next.t("FromPricePlnPerUnit", { price: "100,00" }) },
  { title: i18next.t("PreparationOfAdditionalDocuments"), price: i18next.t("PricePerUnit", { price: "100,00" }) },
  { title: i18next.t("PreparationOfDocumentsForBailiff"), price: i18next.t("PriceValue", { price: "300,00" }) },
  { title: i18next.t("DelegationPreparation"), price: i18next.t("PriceValue", { price: "30,00" }) },
  { title: i18next.t("MonthCorrection"), price: i18next.t("MinimumPlusValuePerEarchCorrectedDocument", { price: "100,00", value: "6,00" }) },
  { title: i18next.t("ContactWithTaxOffice"), price: i18next.t("PricePerHour", { price: "200,00" }) },
  { title: i18next.t("LatePayment"), price: i18next.t("StatutoryInterest") },
  { title: i18next.t("RemindersForUnpaidInvoices"), price: i18next.t("PricePerMonit", { price: "10,00" }) },
  { title: i18next.t("LateDeliverySurcharge"), price: i18next.t("PricePerDay", { price: "10,00" }) },
  { title: i18next.t("StandbyFee"), price: i18next.t("PricePerMonth", { price: "30,00" }) },
  { title: i18next.t("AccountingConsultation"), price: i18next.t("PricePerMinutes", { price: "100,00", minutes: 30 }) },
  { title: i18next.t("ReportOrUpdateVat"), price: i18next.t("PriceValue", { price: "100,00" }) },
  { title: i18next.t("ReportOrUpdateInsurance"), price: i18next.t("PriceValue", { price: "70,00" }) },
  { title: i18next.t("SubmitDocumentsInPerson"), price: i18next.t("FromPricePln", { price: "200,00" }) },
  { title: i18next.t("EstablishBusiness"), price: `${i18next.t("PriceValue", { price: "300,00" })} / ${i18next.t("PriceValue", { price: "900,00" })}` },
  { title: i18next.t("OfficeServices"), price: i18next.t("PricePerNumberOfDocuments", { price: "10,00", count: 10 }) },
  { title: i18next.t("PrepareDocumentsForTaxChange"), price: i18next.t("PriceValue", { price: "100,00" }) },
  { title: i18next.t("AdditionalAccountingServices"), price: i18next.t("FromPricePln", { price: "50,00" }) }
];
const DISCOUNTS = [
  { title: i18next.t("ClientsCommandDiscount"), price: i18next.t("ClientsCommandDiscountValue", { percent: "10" }) },
  { title: i18next.t("DocumentsDeliveryUpTo5DaysOfMonths"), price: i18next.t("DocumentsDeliveryUpTo5DaysOfMonthsValue", { percent: "10" }) }
];
const PricesView = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "fade-in-up animate-duration-700 animate-delay-10 relative w-full h-[50vh] rounded-2xl overflow-hidden mx-auto mb-10 my-12 shadow-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('./assets/images/price-bg-img.jpg')] bg-cover bg-center" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center relative z-10 bg-black/50 border border-blue-100 rounded-2xl p-6 md:p-8 h-full flex flex-col", children: [
        /* @__PURE__ */ jsx(Header, { className: "text-white", children: t("PricesHeader") }),
        /* @__PURE__ */ jsxs(Header, { type: "h2", className: "text-white", children: [
          t("PricesMessage"),
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "BRUTTO" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Accordion, { className: "fade-in-up animate-duration-700 animate-delay-500", title: t("RevenueAndExpenseLedger"), children: [
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsxs(TableHeader, { children: [
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("NoVatRegistered") }),
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("VatRegistered") })
        ] }),
        /* @__PURE__ */ jsx(TableBody, { children: REVENUE_AND_EXPENSE_LEDGER.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
          /* @__PURE__ */ jsx(TableColumn, { children: item.noVatPrice }),
          /* @__PURE__ */ jsx(TableColumn, { children: item.vatPrice })
        ] }, item.title)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto pt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xl font-bold p-4", children: t("Additionally") }),
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsxs(TableHeader, { children: [
            /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
            /* @__PURE__ */ jsx(TableColumnHeader, { children: t("ServicePrice") })
          ] }),
          /* @__PURE__ */ jsx(TableBody, { children: REVENUE_AND_EXPENSE_LEDGER_ADDITIONAL_SERVICES.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
            /* @__PURE__ */ jsx(TableColumn, { children: item.price })
          ] }, item.title)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Accordion, { className: "fade-in-up animate-duration-700 animate-delay-500", title: t("RevenueWithoutCosts"), children: [
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsxs(TableHeader, { children: [
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("ServicePrice") })
        ] }),
        /* @__PURE__ */ jsx(TableBody, { children: REVENUE_WITHOUT_COSTS.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
          /* @__PURE__ */ jsx(TableColumn, { children: item.price })
        ] }, item.title)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto pt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xl font-bold p-4", children: t("Additionally") }),
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsxs(TableHeader, { children: [
            /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
            /* @__PURE__ */ jsx(TableColumnHeader, { children: t("ServicePrice") })
          ] }),
          /* @__PURE__ */ jsx(TableBody, { children: REVENUE_WITHOUT_COSTS_ADDITIONAL_SERVICES.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
            /* @__PURE__ */ jsx(TableColumn, { children: item.price })
          ] }, item.title)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Accordion, { className: "fade-in-up animate-duration-700 animate-delay-600", title: t("TradeBooks"), children: [
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsxs(TableHeader, { children: [
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("NoVatRegistered") }),
          /* @__PURE__ */ jsx(TableColumnHeader, { children: t("VatRegistered") })
        ] }),
        /* @__PURE__ */ jsx(TableBody, { children: TRADE_BOOKS.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
          /* @__PURE__ */ jsx(TableColumn, { children: item.noVatPrice }),
          /* @__PURE__ */ jsx(TableColumn, { children: item.vatPrice })
        ] }, item.title)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto pt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xl font-bold p-4", children: t("Additionally") }),
        /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsxs(TableHeader, { children: [
            /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
            /* @__PURE__ */ jsx(TableColumnHeader, { children: t("ServicePrice") })
          ] }),
          /* @__PURE__ */ jsx(TableBody, { children: TRADE_BOOKS_ADDITIONAL_SERVICES.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
            /* @__PURE__ */ jsx(TableColumn, { children: item.price })
          ] }, item.title)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Accordion, { className: "fade-in-up animate-duration-700 animate-delay-700", title: t("PayrollService"), children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsxs(TableHeader, { children: [
        /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
        /* @__PURE__ */ jsx(TableColumnHeader, { children: t("ServicePrice") })
      ] }),
      /* @__PURE__ */ jsx(TableBody, { children: PAYROLL_SERVICE.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
        /* @__PURE__ */ jsx(TableColumn, { children: item.price })
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsx(Accordion, { className: "fade-in-up animate-duration-700 animate-delay-800", title: t("AdditionalFees"), children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsxs(TableHeader, { children: [
        /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
        /* @__PURE__ */ jsx(TableColumnHeader, { children: t("ServicePrice") })
      ] }),
      /* @__PURE__ */ jsx(TableBody, { children: ADDITIONAL_FEES.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
        /* @__PURE__ */ jsx(TableColumn, { children: item.price })
      ] }, item.title)) })
    ] }) }),
    /* @__PURE__ */ jsx(Accordion, { className: "fade-in-up animate-duration-700 animate-delay-900", title: t("Discounts"), children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsxs(TableHeader, { children: [
        /* @__PURE__ */ jsx(TableColumnHeader, { children: t("Service") }),
        /* @__PURE__ */ jsx(TableColumn, { children: t("ServicePrice") })
      ] }),
      /* @__PURE__ */ jsx(TableBody, { children: DISCOUNTS.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableColumnHeader, { children: item.title }),
        /* @__PURE__ */ jsx(TableColumn, { children: item.price })
      ] }, item.title)) })
    ] }) })
  ] });
};
const Prices = () => {
  return /* @__PURE__ */ jsx(PageContainer, {
    children: /* @__PURE__ */ jsx(PricesView, {})
  });
};
const Prices$1 = UNSAFE_withComponentProps(Prices);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Prices$1
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Bu5zbSXh.js", "imports": ["/assets/chunk-C37GKA54-BpvFEJmx.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-BwXxRB0W.js", "imports": ["/assets/chunk-C37GKA54-BpvFEJmx.js", "/assets/i18nInstance-4tAWFlH2.js"], "css": ["/assets/root-DAIWJfsT.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Home": { "id": "routes/Home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/Home-BsLmK1ZX.js", "imports": ["/assets/chunk-C37GKA54-BpvFEJmx.js", "/assets/PageContainer-DRLCWeU3.js", "/assets/i18nInstance-4tAWFlH2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Contact": { "id": "routes/Contact", "parentId": "root", "path": "/contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/Contact-BHtAsXTD.js", "imports": ["/assets/chunk-C37GKA54-BpvFEJmx.js", "/assets/PageContainer-DRLCWeU3.js", "/assets/Header-BIFCu32R.js", "/assets/i18nInstance-4tAWFlH2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Prices": { "id": "routes/Prices", "parentId": "root", "path": "/prices", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/Prices-Dc12bDju.js", "imports": ["/assets/chunk-C37GKA54-BpvFEJmx.js", "/assets/PageContainer-DRLCWeU3.js", "/assets/Header-BIFCu32R.js", "/assets/i18nInstance-4tAWFlH2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-38825c6a.js", "version": "38825c6a", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/Home": {
    id: "routes/Home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/Contact": {
    id: "routes/Contact",
    parentId: "root",
    path: "/contact",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/Prices": {
    id: "routes/Prices",
    parentId: "root",
    path: "/prices",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
