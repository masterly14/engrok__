import Link from "next/link";

export default function CryptoHero() {
  return (
    <div className="mt-10 container mx-auto px-4">
      <div
        className="relative h-[120vh] md:h-[180vh] bg-cover bg-[center_top] sm:bg-center flex justify-center text-center rounded-3xl border border-gray-200"
        style={{ backgroundImage: "url(/bg-agency-app.png)" }}
      >
        <div className="max-w-3xl text-white px-4">
          {/* Badge */}
          <div className="inline-flex items-center bg-green-200 text-green-800 text-sm font-medium px-4 py-1 rounded-full mb-4 shadow mt-[100px]">
            <svg
              className="w-4 h-4 mr-2 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10" />
            </svg>
            Llamada de consultoria de AI gratis ¡Por tiempo limitado!
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-bold text-black/80 leading-tight">
            Inteligencia artificial
            <br />
            al alcance de su empresa.
            <br />
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 text-gray-700 text-md md:text-xl">
            Implemente inteligencia artificial en los flujos operacionales de su negocio para optimizar, ahorrar y ganar.
          </p>

          {/* Botón CTA */}
          <div className="mt-6">
            <Link href="#">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow transition">
                Agendar reunión
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
