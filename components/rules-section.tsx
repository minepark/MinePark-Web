import { Shield, Users, Zap, Heart } from "lucide-react"

const rules = [
  {
    icon: Shield,
    title: "No Griefing",
    description: "Respeta las construcciones y creaciones de otros jugadores. El griefing resultará en castigo inmediato.",
  },
  {
    icon: Users,
    title: "Sé Respetuoso",
    description: "Trata a todos los jugadores con respeto. No se permite acoso, discriminación o comportamiento tóxico.",
  },
  {
    icon: Zap,
    title: "No Hacer Trampa",
    description: "Clientes hackeados, exploits y ventajas injustas están estrictamente prohibidos.",
  },
  {
    icon: Heart,
    title: "Diviértete",
    description: "Lo más importante, disfruta tu tiempo en el servidor y ayuda a crear una comunidad positiva.",
  },
]

export function RulesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text-red">
            Reglas del <span className="text-red-400">Servidor</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sigue estas simples reglas para asegurar que todos tengan una gran experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rules.map((rule, index) => (
            <div
              key={index}
              className="glass-effect p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4 group-hover:bg-red-500/30 transition-colors">
                <rule.icon className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 group-hover:neon-text-red transition-all">
                {rule.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
