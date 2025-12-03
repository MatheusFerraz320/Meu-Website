import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-screen h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-purple-100 
                 text-gray-900 flex items-center justify-center relative font-[Poppins]"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-wide animate-pulse"
        >
          Matheus Ferraz - Fullstack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl leading-relaxed mb-8 max-w-2xl"
        >
          Criando experiências digitais modernas e impactantes com código limpo e design criativo.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="inline-block px-8 py-4 bg-indigo-600 rounded-lg shadow-lg 
                     hover:bg-indigo-500 transition text-lg font-semibold text-white"
        >
          Ver Projetos
        </motion.a>
      </div>
    </div>
  );
}