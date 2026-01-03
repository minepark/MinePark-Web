import { Crown, Shield, Users, Wrench } from "lucide-react"
import Image from "next/image"

const staffMembers = [
  {
    name: "ObrigadoADeus",
    role: "Owner",
    description: "Fundador y desarrollador principal de MinePark. Apasionado por crear la mejor experiencia de Minecraft.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Crown,
    color: "text-yellow-400",
    neonClass: "neon-text-yellow",
  },
  {
    name: "JJ99_",
    role: "Manager",
    description: "Supervisa las operaciones diarias y asegura una gestión fluida del servidor.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Shield,
    color: "text-red-400",
    neonClass: "neon-text-red",
  },
  {
    name: "ObrigadoADeus",
    role: "Desarrollador",
    description: "Crea plugins personalizados y mantiene la infraestructura del servidor.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Wrench,
    color: "text-blue-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "JJ99_",
    role: "Desarrollador",
    description: "Crea plugins personalizados y mantiene la infraestructura del servidor.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Wrench,
    color: "text-blue-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "EnderGuardian",
    role: "Moderador",
    description: "Mantiene la comunidad segura y ayuda a los jugadores con sus preguntas.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-green-400",
    neonClass: "neon-text-green",
  },
  {
    name: "BlockMaster_Pro",
    role: "Constructor",
    description: "Crea estructuras increíbles y gestiona concursos de construcción.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-purple-400",
    neonClass: "neon-text-purple",
  },
  {
    name: "CraftHelper_24",
    role: "Ayudante",
    description: "Asiste a nuevos jugadores y proporciona apoyo a la comunidad.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-cyan-400",
    neonClass: "neon-text-blue",
  },
]

export default function StaffPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-blue">
            Nuestro <span className="text-blue-400">Equipo Staff</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conoce al equipo dedicado detrás de MinePark que trabaja incansablemente para brindarte la mejor experiencia de juego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="glass-effect p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-colors">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center ${member.color.replace("text-", "bg-").replace("-400", "-500/20")} border-2 ${member.color.replace("text-", "border-")}`}
                >
                  <member.icon className={`w-6 h-6 ${member.color}`} />
                </div>
              </div>

              <h3
                className={`text-2xl font-bold mb-2 group-hover:${member.color} group-hover:${member.neonClass} transition-all text-white`}
              >
                {member.name}
              </h3>
              <div className={`text-lg font-semibold mb-4 ${member.color}`}>{member.role}</div>
              <p className="text-gray-300 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">¿Quieres Unirte a Nuestro Equipo?</h2>
            <p className="text-gray-300 mb-6">
              Siempre estamos buscando jugadores dedicados para ayudar a hacer MinePark aún mejor. Consulta nuestro proceso de
              solicitud y requisitos.
            </p>
            <button className="minecraft-btn neon-glow-green">Aplicar Ahora</button>
          </div>
        </div>
      </div>
    </div>
  )
}
