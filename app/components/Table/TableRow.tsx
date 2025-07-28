import type React from "react";

export const TableRow: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">{children}</tr>;
};
