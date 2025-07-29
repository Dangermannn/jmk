import type { FC } from "react";
import Logo from "~/assets/images/price-bg-img.jpg"; // Adjust path if needed

const Welcome: FC = () => {
  const text =
    "Profesjonalna obsługa księgowa dla firm i osób fizycznych. Zaufaj naszemu doświadczeniu i skontaktuj się już dziś!";

  return (
    <div className="fade-in-up animate-duration-700 animate-delay-10 relative w-full h-[60vh] rounded-2xl overflow-hidden mx-auto mb-10 my-12 shadow-xl">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('./assets/images/price-bg-img.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Content */}
      <div className="flex items-center justify-center relative z-10 h-full flex-col text-center px-4">
        <img
          src={Logo}
          alt="Logo"
          className="w-60 h-60 object-contain mb-3"
        />

        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Biuro Rachunkowe JMK Monika Kruszewska
        </h1>

        <p className="text-white text-lg md:text-2xl font-medium max-w-3xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Welcome;
