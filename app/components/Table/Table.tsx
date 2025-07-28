export const Table: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="my-4 w-full max-w-full bg-white shadow-md sm:rounded-lg">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {children}
      </table>
    </div>
  );
};
