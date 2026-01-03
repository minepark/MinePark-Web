"use client"

import { useEffect, useState } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export default function StorePage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  useEffect(() => {
    // Redirect to external store after 3 seconds
    const timer = setTimeout(() => {
      window.open("https://tienda.minepark.es", "_blank")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-8 neon-glow-green p-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src="/Logo.png"
                alt="MinePark Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-green">
            MinePark <span className="text-green-400">Tienda</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Apoya el servidor y obtén beneficios exclusivos, rangos e items para mejorar tu experiencia de juego.
          </p>

          <div className="glass-effect p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Redirigiendo a la Tienda...</h2>
            <p className="text-gray-300 mb-6">
              Serás redirigido automáticamente a nuestra tienda segura en unos segundos.
            </p>
            <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
              <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{ width: "100%" }}></div>
            </div>
          </div>

          <a
            href="https://tienda.minepark.es"
            target="_blank"
            rel="noopener noreferrer"
            className="minecraft-btn inline-flex items-center space-x-2 neon-glow-green"
          >
            <span>Visitar Tienda Ahora</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <div className="mt-8">
            <button
              onClick={() => copyToClipboard("mc.minepark.es")}
              className="minecraft-btn inline-flex items-center space-x-2 neon-glow-green mr-4"
            >
              <span>{copied ? "¡IP Copiada!" : "Copiar IP del Servidor"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-effect p-6 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Rangos VIP</h3>
              <p className="text-gray-300">Beneficios y privilegios exclusivos</p>
            </div>
            <div className="glass-effect p-6 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Cosméticos</h3>
              <p className="text-gray-300">Items y decoraciones únicas</p>
            </div>
            <div className="glass-effect p-6 text-center">
              <h3 className="text-xl font-bold text-purple-400 mb-2">Mejoras</h3>
              <p className="text-gray-300">Multiplicadores de XP y tasa de drops</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
