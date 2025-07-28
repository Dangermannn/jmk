import { useTranslation } from "react-i18next";
import Accordion from "~/components/Accordion";
import { Footer } from "~/components/Footer";
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
      <div className="p-4 text-xl font-bold text-gray-800">{t("PricesHeader")}</div>
      <div className="p-6 text-xl text-gray-800">{t("PricesMessage")}</div>
        <Accordion title={t("RevenueAndExpenseLedger")}>
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
        <Accordion title={t("RevenueWithoutCosts")}>
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
        <Accordion title={t("TradeBooks")}>
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
        <Accordion title={t("PayrollService")}>
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
        <Accordion title={t("AdditionalFees")}>
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
        <Accordion title={t("Discounts")}>
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