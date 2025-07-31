export const Table: React.FC<{
  children: React.ReactNode;
  numColumns?: number;
}> = ({ children, numColumns = 1 }) => {
  // Determine if we need to apply flex styles to distribute columns
  const flexClass = `grid grid-cols-${numColumns} gap-2`;

  return (
    <div className="my-4 w-full max-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <table className={`table-auto w-full text-base text-left`}>
        {children}
      </table>
    </div>
  );
};