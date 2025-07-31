export const Text: React.FC<{
  bold?: boolean,
  className?: string;
  children: React.ReactNode;
}> = ({ children, bold = false, className }) => {
    return (
        <p className={`text-gray-700 py-2 ${bold ? 'font-bold' : ''} ${className}`}>
        {children}
        </p>
    );
};
