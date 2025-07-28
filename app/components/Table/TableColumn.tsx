export const TableColumn: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <td className="px-2 py-2 whitespace-normal break-words max-w-[140px] sm:max-w-none">
      {children}
    </td>
  );
};