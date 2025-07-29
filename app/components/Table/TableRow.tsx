import type React from "react";

export const TableRow: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">{children}</tr>;
};
