export const TableColumnHeader: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <th
      scope="row"
      className="px-2 py-2 font-medium text-gray-900 whitespace-normal break-words max-w-[140px] sm:max-w-none"
    >
      {children}
    </th>
  );
};