import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="about"
      className="w-screen min-h-screen bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f3460]
             text-white flex flex-col items-center px-6 py-20 font-[Montserrat]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 transition duration-300 hover:text-indigo-400 hover:scale-105"
      >
        Sobre Mim
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-16 mb-16 max-w-5xl">
        <motion.img
          whileHover={{ scale: 1.10 }}
          src="/images/fotoMatheus.jpeg"
          alt="Foto de Matheus"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-gray-600"
        />

        <div className="max-w-3xl text-lg md:text-xl leading-relaxed space-y-6 text-center md:text-left text-gray-200">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Sou um desenvolvedor web motivado e proativo, com 1 ano de experiência como
            freelancer entregando projetos reais. Tenho habilidades em React.js, JavaScript,
            HTML, CSS, Tailwind, Bootstrap e SQL, com foco em construir aplicações
            responsivas e amigáveis ao usuário.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Estou sempre disposto a aprender, me adaptar e crescer em ambientes dinâmicos,
            trazendo habilidades de resolução de problemas, atenção aos detalhes e espírito
            colaborativo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Meu objetivo é me tornar um programador{" "}
            <span className="font-semibold text-indigo-300">Fullstack</span>, contribuindo
            para projetos impactantes enquanto expando continuamente minha expertise em
            desenvolvimento web moderno.
          </motion.p>
        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="max-w-5xl w-full grid md:grid-cols-2 gap-8 text-left"
      >
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-gray-950 via-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transition hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Cursos</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-200">
            <li>
              <span className="font-semibold">Harvard University – edX</span> <br />
              CS50x: Introduction to Computer Science <br />
              Conclusão de todos os 10 problem sets e projeto final fullstack. <br />
              Tópicos: Algoritmos, Estruturas de Dados, C, Python, SQL, Flask, HTML, CSS,
              JavaScript.
            </li>
            <li>
              <span className="font-semibold">React.js – freeCodeCamp</span> <br />
              Curso completo cobrindo fundamentos do React, componentes, gerenciamento de
              estado, hooks e construção de aplicações interativas. <br />
              Projetos práticos demonstrando interfaces responsivas e dinâmicas.
            </li>
          </ul>
        </motion.div>

          
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-gray-950 via-gray-800 to-gray-700 p-6 rounded-lg shadow-lg transition hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
        >
          <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Formação Acadêmica</h3>
          <ul className="space-y-3 list-disc list-inside text-gray-200">
            <li>
              <span className="font-semibold">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </span>{" "}
              <br />
              Centro Universitário Leonardo da Vinci – 2º semestre em andamento. <br />
              Conclusão prevista: 2027. <br />
              (Equivalente a Associate Degree em TI/Computação, não bacharelado).
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}