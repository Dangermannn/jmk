export const Header: React.FC<{
  type?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}> = ({ children, type = "h1", className }) => {
  const Heading = type;
  const headerClassName = type === "h1" ? "text-5xl font-bold text-center mb-2 text-gray-900" : "text-lg font-bold mb-2 text-gray-700";
    return (
        <Heading className={`${headerClassName} ${className}`}>
        {children}
        </Heading>
    );
};
