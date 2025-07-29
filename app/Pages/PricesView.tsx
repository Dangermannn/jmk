import { useTranslation } from "react-i18next";
import Accordion from "~/components/Accordion";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import Navbar from "~/components/Navbar";
import { PageContainer } from "~/components/PageContainer";
import { Table } from "~/components/Table/Table";
import { TableBody } from "~/components/Table/TableBody";
import { TableColumn } from "~/components/Table/TableColumn";
import { TableColumnHeader } from "~/components/Table/TableColumnHeader";
import { TableHeader } from "~/components/Table/TableHeader";
import { TableRow } from "~/components/Table/TableRow";
import { ADDITIONAL_FEES, DISCOUNTS, PAYROLL_SERVICE, REVENUE_AND_EXPENSE_LEDGER, REVENUE_AND_EXPENSE_LEDGER_ADDITIONAL_SERVICES, REVENUE_WITHOUT_COSTS, REVENUE_WITHOUT_COSTS_ADDITIONAL_SERVICES, TRADE_BOOKS, TRADE_BOOKS_ADDITIONAL_SERVICES } from "~/data/prices";

const PricesView = () => {
  const { t } = useTranslation();
  return (
    <>

    <div className="fade-in-up animate-duration-700 animate-delay-10 relative w-full h-[50vh] rounded-2xl overflow-hidden mx-auto mb-10 my-12 shadow-xl">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('./assets/images/price-bg-img.jpg')] bg-cover bg-center" />

  {/* Semi-transparent black overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content on top */}
  <div className="flex items-center justify-center relative z-10 bg-black/50 border border-blue-100 rounded-2xl p-6 md:p-8 h-full flex flex-col">
    <Header className="text-white">{t("PricesHeader")}</Header>
    <Header type="h2" className="text-white">
      {t("PricesMessage")} <span className="font-semibold text-blue-400">BRUTTO</span>
    </Header>
    </div>
  </div>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-500" title={t("RevenueAndExpenseLedger")}>
        <Table>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader>{t("NoVatRegistered")}</TableColumnHeader>
            <TableColumnHeader>{t("VatRegistered")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { REVENUE_AND_EXPENSE_LEDGER.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn>{item.noVatPrice}</TableColumn>
                <TableColumn>{item.vatPrice}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="container mx-auto pt-4">
          <div className="text-xl font-bold p-4">
            {t("Additionally")}
          </div>
            <Table>
            <TableHeader>
              <TableColumnHeader>{t("Service")}</TableColumnHeader>
              <TableColumnHeader>{t("ServicePrice")}</TableColumnHeader>
            </TableHeader>
            <TableBody>
              { REVENUE_AND_EXPENSE_LEDGER_ADDITIONAL_SERVICES.map((item) => (
                <TableRow key={item.title}>
                  <TableColumnHeader>{item.title}</TableColumnHeader>
                  <TableColumn>{item.price}</TableColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-500" title={t("RevenueWithoutCosts")}>
        <Table>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader>{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { REVENUE_WITHOUT_COSTS.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn>{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="container mx-auto pt-4">
          <div className="text-xl font-bold p-4">
            {t("Additionally")}
          </div>
            <Table>
            <TableHeader>
              <TableColumnHeader>{t("Service")}</TableColumnHeader>
              <TableColumnHeader>{t("ServicePrice")}</TableColumnHeader>
            </TableHeader>
            <TableBody>
              { REVENUE_WITHOUT_COSTS_ADDITIONAL_SERVICES.map((item) => (
                <TableRow key={item.title}>
                  <TableColumnHeader>{item.title}</TableColumnHeader>
                  <TableColumn>{item.price}</TableColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-600" title={t("TradeBooks")}>
        <Table>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader>{t("NoVatRegistered")}</TableColumnHeader>
            <TableColumnHeader>{t("VatRegistered")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { TRADE_BOOKS.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn>{item.noVatPrice}</TableColumn>
                <TableColumn>{item.vatPrice}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="container mx-auto pt-4">
          <div className="text-xl font-bold p-4">
            {t("Additionally")}
          </div>
            <Table>
            <TableHeader>
              <TableColumnHeader>{t("Service")}</TableColumnHeader>
              <TableColumnHeader>{t("ServicePrice")}</TableColumnHeader>
            </TableHeader>
            <TableBody>
              { TRADE_BOOKS_ADDITIONAL_SERVICES.map((item) => (
                <TableRow key={item.title}>
                  <TableColumnHeader>{item.title}</TableColumnHeader>
                  <TableColumn>{item.price}</TableColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-700" title={t("PayrollService")}>
        <Table>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader>{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { PAYROLL_SERVICE.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn>{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-800" title={t("AdditionalFees")}>
        <Table>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader>{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { ADDITIONAL_FEES.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn>{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-900" title={t("Discounts")}>
        <Table>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumn>{t("ServicePrice")}</TableColumn>
          </TableHeader>
          <TableBody>
            { DISCOUNTS.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn>{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>
    </>
  );
}

export default PricesView;