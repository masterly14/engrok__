import { Brain, Rocket, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="features">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-white shadow-md mb-6">
          <span className="text-sm font-medium">Caracteristicas</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Soluciones de IA para empresas
        </h2>

        <p className="max-w-3xl text-lg text-gray-700">
          Desarrollamos e integramos soluciones de inteligencia artificial que
          optimizan procesos, mejoran decisiones y aceleran el crecimiento
          empresarial.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-16">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-emerald-500" />
          </div>
          <p className="text-gray-800">
            Implementación de modelos de lenguaje y visión artificial a la
            medida de tu negocio.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <Rocket className="w-12 h-12 text-emerald-500" />
          </div>
          <p className="text-gray-800">
            Automatizamos tareas repetitivas y procesos críticos para que tu
            equipo se enfoque en lo que importa.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center mb-6">
            <ShieldCheck className="w-12 h-12 text-emerald-500" />
          </div>
          <p className="text-gray-800">
            Seguridad y privacidad como prioridad: tus datos siempre protegidos
            con IA responsable.
          </p>
        </div>
      </div>
    </section>
  );
}
