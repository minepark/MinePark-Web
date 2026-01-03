import { Sword, Home, Coins, Zap, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Sword,
    title: "PvP Personalizado",
    description: "Participa en batallas épicas con armas y habilidades personalizadas en nuestras zonas PvP dedicadas.",
  },
  {
    icon: Home,
    title: "Reclamación de Tierras",
    description: "Protege tus construcciones con nuestro sistema avanzado de reclamación de tierras y protección contra grief.",
  },
  {
    icon: Coins,
    title: "Sistema Económico",
    description: "Comercia, compra y vende con otros jugadores usando nuestro sistema económico equilibrado.",
  },
  {
    icon: Zap,
    title: "Plugins Personalizados",
    description: "Experimenta una jugabilidad única con más de 50 plugins y características personalizadas.",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description: "Únete a miles de jugadores activos en nuestra comunidad amigable y acogedora.",
  },
  {
    icon: Shield,
    title: "Moderación 24/7",
    description: "Nuestro equipo de staff dedicado garantiza un entorno de juego seguro y justo.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text-blue">
            Características del <span className="text-blue-400">Servidor</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre qué hace de MinePark la experiencia definitiva de Minecraft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6 group-hover:bg-blue-500/30 transition-colors">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 group-hover:neon-text-blue transition-all">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
