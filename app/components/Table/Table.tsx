export const Table: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="my-4 w-full max-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <table className="table-auto w-full text-base text-left">
        {children}
      </table>
    </div>
  );
};