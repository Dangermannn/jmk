import { Footer } from "./Footer";
import Navbar from "./Navbar";

export const PageContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="container flex-1 mx-auto p-4 w-full">{children}</main>
      <Footer />
    </div>
  );
};
