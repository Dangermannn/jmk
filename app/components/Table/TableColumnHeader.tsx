export const TableColumnHeader: React.FC<{
  children: React.ReactNode;
  align?: "left" | "right";
}> = ({ children, align = "left" }) => {
  const alignmentClass = align === "right" ? "text-right" : "text-left";

  return (
    <th
      scope="col"
      className={`px-2 py-2 font-medium text-gray-900 whitespace-normal break-words ${alignmentClass}`}
    >
      {children}
    </th>
  );
};