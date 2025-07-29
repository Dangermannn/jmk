export const TableHeader: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <thead className="text-base text-gray-700 uppercase bg-gray-50 bg-gray-300 text-gray-100">
      <tr>{children}</tr>
    </thead>
  );
};
