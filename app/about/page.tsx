import { Calendar, Users, Server, Heart, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-green">
            Acerca de <span className="text-green-400">MinePark</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            MinePark nació de la pasión por crear la experiencia definitiva de supervivencia en Minecraft. Desde 2021,
            nos hemos dedicado a construir una comunidad donde la creatividad, la aventura y la amistad prosperan.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass-effect p-8">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text-green">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                MinePark comenzó como un pequeño proyecto entre amigos que compartían el amor por Minecraft. Lo que comenzó como un
                simple servidor de supervivencia ha evolucionado en una próspera comunidad de más de 15,000 jugadores.
              </p>
              <p>
                Nuestro viaje ha estado marcado por la innovación continua, desde el desarrollo de plugins personalizados hasta la organización de eventos épicos
                a nivel de servidor. Siempre hemos priorizado crear un entorno justo, divertido y atractivo para jugadores
                de todos los niveles de habilidad.
              </p>
              <p>
                Hoy, MinePark se erige como uno de los principales servidores de supervivencia de Minecraft, conocido por nuestra activa
                comunidad, staff profesional y compromiso con proporcionar la mejor experiencia de juego posible.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
              alt="MinePark server spawn"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="glass-effect p-8 text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 neon-text-blue">Nuestra Misión</h3>
            <p className="text-gray-300">
              Crear la experiencia de supervivencia más atractiva y justa de Minecraft, fomentando una comunidad donde los jugadores
              puedan construir, explorar y hacer amistades duraderas.
            </p>
          </div>

          <div className="glass-effect p-8 text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4 neon-text-yellow">Nuestra Visión</h3>
            <p className="text-gray-300">
              Ser el servidor líder de Minecraft que establece el estándar para el juego impulsado por la comunidad, la innovación y
              la satisfacción del jugador en el mundo de los videojuegos.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text-green">Nuestro Viaje</h2>
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2021 - El Comienzo</h3>
                <p className="text-gray-300">MinePark se lanza con 20 jugadores y grandes sueños.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2022 - Comunidad en Crecimiento</h3>
                <p className="text-gray-300">Alcanzamos 1,000 jugadores registrados e introdujimos plugins personalizados.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2023 - Expansión Mayor</h3>
                <p className="text-gray-300">Actualización del hardware del servidor y lanzamiento de múltiples modos de juego.</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="glass-effect p-4 rounded-full">
                <Heart className="w-6 h-6 text-red-400" />
              </div>
              <div className="glass-effect p-6 flex-1">
                <h3 className="text-xl font-bold text-white mb-2">2026 - La Comunidad Primero</h3>
                <p className="text-gray-300">Más de 15,000 jugadores con enfoque en eventos comunitarios y retroalimentación.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12 neon-text-green">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">La Comunidad Primero</h3>
              <p className="text-gray-300">Cada decisión que tomamos prioriza el bienestar de nuestros jugadores y la comunidad.</p>
            </div>

            <div className="glass-effect p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovación</h3>
              <p className="text-gray-300">
                Evolucionamos y mejoramos constantemente para proporcionar experiencias de juego de vanguardia.
              </p>
            </div>

            <div className="glass-effect p-8 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Justicia</h3>
              <p className="text-gray-300">Oportunidades iguales y juego limpio para todos los miembros de nuestra comunidad.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
