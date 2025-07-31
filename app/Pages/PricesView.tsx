import { useTranslation } from "react-i18next";
import Accordion from "~/components/Accordion";
import { Header } from "~/components/Header";
import { Table } from "~/components/Table/Table";
import { TableBody } from "~/components/Table/TableBody";
import { TableColumn } from "~/components/Table/TableColumn";
import { TableColumnHeader } from "~/components/Table/TableColumnHeader";
import { TableHeader } from "~/components/Table/TableHeader";
import { TableRow } from "~/components/Table/TableRow";

import { ADDITIONAL_FEES, DISCOUNTS, DOCUMENT_STORAGE, PAYROLL_SERVICE, REVENUE_AND_EXPENSE_LEDGER, REVENUE_AND_EXPENSE_LEDGER_ADDITIONAL_SERVICES, REVENUE_WITHOUT_COSTS, REVENUE_WITHOUT_COSTS_ADDITIONAL_SERVICES, TRADE_BOOKS, TRADE_BOOKS_ADDITIONAL_SERVICES } from "~/data/PricesDetails";

const PricesView = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className="fade-in-up animate-duration-700 animate-delay-10 relative w-full h-[50vh] rounded-2xl overflow-hidden mx-auto mb-10 my-12 shadow-xl">
  {/* Background image */}
  <div className="absolute inset-0 bg-[url('./assets/images/price-bg-img-reduced.jpg')] bg-cover bg-center" />

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
        <Table numColumns={3}>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("NoVatRegistered")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("VatRegistered")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { REVENUE_AND_EXPENSE_LEDGER.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn align="right">{item.noVatPrice}</TableColumn>
                <TableColumn align="right">{item.vatPrice}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="container mx-auto pt-4">
          <div className="text-xl font-bold p-4">
            {t("Additionally")}
          </div>
            <Table numColumns={2}>
            <TableHeader>
              <TableColumnHeader>{t("Service")}</TableColumnHeader>
              <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
            </TableHeader>
            <TableBody>
              { REVENUE_AND_EXPENSE_LEDGER_ADDITIONAL_SERVICES.map((item) => (
                <TableRow key={item.title}>
                  <TableColumnHeader>{item.title}</TableColumnHeader>
                  <TableColumn align="right">{item.price}</TableColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-500" title={t("RevenueWithoutCosts")}>
        <Table numColumns={2}>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { REVENUE_WITHOUT_COSTS.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn align="right">{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="container mx-auto pt-4">
          <div className="text-xl font-bold p-4">
            {t("Additionally")}
          </div>
            <Table numColumns={2}>
            <TableHeader>
              <TableColumnHeader>{t("Service")}</TableColumnHeader>
              <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
            </TableHeader>
            <TableBody>
              { REVENUE_WITHOUT_COSTS_ADDITIONAL_SERVICES.map((item) => (
                <TableRow key={item.title}>
                  <TableColumnHeader>{item.title}</TableColumnHeader>
                  <TableColumn align="right">{item.price}</TableColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-600" title={t("TradeBooks")}>
        <Table numColumns={2}>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { TRADE_BOOKS.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn align="right">{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="container mx-auto pt-4">
          <div className="text-xl font-bold p-4">
            {t("Additionally")}
          </div>
            <Table numColumns={2}>
            <TableHeader>
              <TableColumnHeader>{t("Service")}</TableColumnHeader>
              <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
            </TableHeader>
            <TableBody>
              { TRADE_BOOKS_ADDITIONAL_SERVICES.map((item) => (
                <TableRow key={item.title}>
                  <TableColumnHeader>{item.title}</TableColumnHeader>
                  <TableColumn align="right">{item.price}</TableColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-700" title={t("PayrollService")}>
        <Table numColumns={2}>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { PAYROLL_SERVICE.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn align="right">{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-800" title={t("AdditionalFees")}>
        <Table numColumns={2}>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { ADDITIONAL_FEES.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn align="right">{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-900" title={t("DocumentStorage")}>
        <Table numColumns={2}>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("ServicePrice")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { DOCUMENT_STORAGE.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn align="right">{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>
      <Accordion className="fade-in-up animate-duration-700 animate-delay-1000" title={t("DiscountSumUpTitle")}>
        <Table numColumns={2}>
          <TableHeader>
            <TableColumnHeader>{t("Service")}</TableColumnHeader>
            <TableColumnHeader align="right">{t("Discount")}</TableColumnHeader>
          </TableHeader>
          <TableBody>
            { DISCOUNTS.map((item) => (
              <TableRow key={item.title}>
                <TableColumnHeader>{item.title}</TableColumnHeader>
                <TableColumn align="right">{item.price}</TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Accordion>
    </>
  );
}

export default PricesView;