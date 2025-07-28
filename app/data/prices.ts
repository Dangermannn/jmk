import i18next from "i18next";

interface PriceBase {
    title: string;
}
export interface VatPrice extends PriceBase {
    noVatPrice: string;
    vatPrice: string;
}

export interface PriceText extends PriceBase {
    price: string;
}

export const REVENUE_AND_EXPENSE_LEDGER: Array<VatPrice> = [
    { title: i18next.t("RangeDocuments", { range: "0 - 10"}), noVatPrice: i18next.t("PricePerMonth", { price: "240,00" }), vatPrice: i18next.t("PricePerMonth", { price: "360,00" }) },
    { title: i18next.t("RangeDocuments", { range: "11 - 20"}), noVatPrice: i18next.t("PricePerMonth", { price: "300,00" }), vatPrice: i18next.t("PricePerMonth", { price: "420,00" }) },
    { title: i18next.t("RangeDocuments", { range: "21 - 30"}), noVatPrice: i18next.t("PricePerMonth", { price: "360,00" }), vatPrice: i18next.t("PricePerMonth", { price: "480,00" }) },
    { title: i18next.t("RangeDocuments", { range: "31 - 40"}), noVatPrice: i18next.t("PricePerMonth", { price: "420,00" }), vatPrice: i18next.t("PricePerMonth", { price: "540,00" }) },
    { title: i18next.t("RangeDocuments", { range: "41 - 50"}), noVatPrice: i18next.t("PricePerMonth", { price: "480,00" }), vatPrice: i18next.t("PricePerMonth", { price: "600,00" }) },
    { title: i18next.t("RangeDocuments", { range: "51 - 60"}), noVatPrice: i18next.t("PricePerMonth", { price: "540,00" }), vatPrice: i18next.t("PricePerMonth", { price: "660,00" }) },
    { title: i18next.t("RangeDocuments", { range: "61 - 70"}), noVatPrice: i18next.t("PricePerMonth", { price: "600,00" }), vatPrice: i18next.t("PricePerMonth", { price: "720,00" }) },
    { title: i18next.t("RangeDocuments", { range: "71 - 80"}), noVatPrice: i18next.t("PricePerMonth", { price: "660,00" }), vatPrice: i18next.t("PricePerMonth", { price: "780,00" }) },
];

export const REVENUE_AND_EXPENSE_LEDGER_ADDITIONAL_SERVICES: Array<PriceText> = [
    { title: i18next.t("EveryRegisterAboveLimit"), price: i18next.t("PricePerDocument", { price: "6" }) },
    { title: i18next.t("AnnualSettlement"), price: i18next.t("PricePerYear", { price: "300,00" }) },
];

export const REVENUE_WITHOUT_COSTS: Array<PriceText> = [
    { title: i18next.t("RangeDocuments", { range: "0 - 10"}), price: i18next.t("PricePerMonth", { price: "240" }) },
    { title: i18next.t("RangeDocuments", { range: "11 - 20"}), price: i18next.t("PricePerMonth", { price: "300" }) },
    { title: i18next.t("RangeDocuments", { range: "21 - 30"}), price: i18next.t("PricePerMonth", { price: "360" }) },
];

export const REVENUE_WITHOUT_COSTS_ADDITIONAL_SERVICES: Array<PriceText> = [
    { title: i18next.t("EveryRegisterAboveLimit"), price: i18next.t("PricePerDocument", { price: "6" }) },
    { title: i18next.t("AnnualSettlement"), price: i18next.t("PricePerYear", { price: "300,00" }) },
];

export const TRADE_BOOKS: Array<VatPrice> = [
    { title: i18next.t("RangeDocuments", { range: "0 - 10"}), noVatPrice: i18next.t("PricePerMonth", { price: "1100,00" }), vatPrice: i18next.t("PricePerMonth", { price: "1100,00" }) },
    { title: i18next.t("RangeDocuments", { range: "11 - 20"}), noVatPrice: i18next.t("PricePerMonth", { price: "1600,00" }), vatPrice: i18next.t("PricePerMonth", { price: "1600,00" }) },
    { title: i18next.t("RangeDocuments", { range: "21 - 30"}), noVatPrice: i18next.t("PricePerMonth", { price: "2000,00" }), vatPrice: i18next.t("PricePerMonth", { price: "2100,00" }) },
    { title: i18next.t("RangeDocuments", { range: "31 - 40"}), noVatPrice: i18next.t("PricePerMonth", { price: "2600,00" }), vatPrice: i18next.t("PricePerMonth", { price: "2600,00" }) }
];

export const TRADE_BOOKS_ADDITIONAL_SERVICES: Array<PriceText> = [
    { title: i18next.t("EveryRegisterAboveLimit"), price: i18next.t("PricePerDocument", { price: "20" }) },
    { title: `${i18next.t('AnnualReport')}/${i18next.t("AnnualSettlement")}`, price: i18next.t("AverageValueOfIncome") },
];

export const PAYROLL_SERVICE: Array<PriceText> = [
    { title: i18next.t("PayrollEmpoymentContract"), price: i18next.t("PricePerMonth", { price: "80,00" }) },
    { title: i18next.t("PayrollContractPreparation"), price: i18next.t("PricePerMonth", { price: "80,00" }) },
    { title: i18next.t("AnnualDeclaration"), price: i18next.t("PricePerYear", { price: "50,00" }) },
    { title: i18next.t("ZusEntrepreneursDeclaration"), price: i18next.t("PricePerUnit", { price: "80,00" }) },
    { title: i18next.t("EmploymentAndEarnigsCertificate"), price: i18next.t("PricePerUnit", { price: "30,00" }) }
];

export const ADDITIONAL_FEES: Array<PriceText> = [
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
    { title: i18next.t("ContactWithTaxOffice"), price: i18next.t("PricePerHour", { price: "200,00"})},
    { title: i18next.t("LatePayment"), price: i18next.t("StatutoryInterest") },
    { title: i18next.t("RemindersForUnpaidInvoices"), price: i18next.t("PricePerMonit", { price: "10,00" })  },
    { title: i18next.t("LateDeliverySurcharge"), price: i18next.t("PricePerDay", { price: "10,00" }) },
    { title: i18next.t("StandbyFee"), price: i18next.t("PricePerMonth", { price: "30,00" })  },
    { title: i18next.t("AccountingConsultation"), price: i18next.t("PricePerMinutes", { price: "100,00", minutes: 30 }) },
    { title: i18next.t("ReportOrUpdateVat"), price: i18next.t("PriceValue", { price: "100,00" }) },
    { title: i18next.t("ReportOrUpdateInsurance"), price: i18next.t("PriceValue", { price: "70,00" }) },
    { title: i18next.t("SubmitDocumentsInPerson"), price: i18next.t("FromPricePln", { price: "200,00" }) },
    { title: i18next.t("EstablishBusiness"), price: `${i18next.t("PriceValue", { price: "300,00" })} / ${i18next.t("PriceValue", { price: "900,00" })}` },
    { title: i18next.t("OfficeServices"), price: i18next.t("PricePerNumberOfDocuments", { price: "10,00", count: 10 }) },
    { title: i18next.t("PrepareDocumentsForTaxChange"), price: i18next.t("PriceValue", { price: "100,00" }) },
    { title: i18next.t("AdditionalAccountingServices"), price: i18next.t("FromPricePln", { price: "50,00" }) }    
]

export const DISCOUNTS: Array<PriceText> = [
    { title: i18next.t("ClientsCommandDiscount"), price: i18next.t("ClientsCommandDiscountValue", { percent: "10" }) },
    { title: i18next.t("DocumentsDeliveryUpTo5DaysOfMonths"), price: i18next.t("DocumentsDeliveryUpTo5DaysOfMonthsValue", { percent: "10" }) } 
];