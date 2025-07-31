export const TableColumn: React.FC<{
  children: React.ReactNode;
  align?: "left" | "right";
}> = ({ children, align = "left" }) => {
  const alignmentClass = align === "right" ? "text-right" : "text-left";
  return (
    <td className={`px-2 py-2 whitespace-normal break-words ${alignmentClass}`}>
      {children}
    </td>
  );
};