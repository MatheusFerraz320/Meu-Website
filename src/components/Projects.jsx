import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Professional Websites / Landing Pages",
      technologies: "HTML, CSS, JavaScript, React.js, Tailwind, Bootstrap",
      description:
        "Sites profissionais e landing pages responsivas, otimizadas para SEO e performance, com código limpo e boas práticas.",
      image: "/images/landingpage.png",
      codeLink: "https://github.com/seu-usuario/landing-pages"
    },
    {
      title: "Currency Converter",
      technologies: "HTML5, CSS3 + Bootstrap 5, JavaScript (ES6), Frankfurter API",
      description:
        "Conversor de moedas simples e responsivo, construído com HTML, CSS, JavaScript e a Frankfurter API. Permite converter valores entre diferentes moedas em tempo real, com interface limpa e feedback instantâneo.",
      features: [
        "Conversão de moedas em tempo real",
        "Suporte para USD, BRL, EUR, JPY (facilmente expansível)",
        "Layout responsivo usando Bootstrap 5",
        "Validação de entrada e mensagens de erro amigáveis",
        "Exibição da data de conversão da API",
        "Rodapé customizado com crédito do autor"
      ],
      image: "/images/currencyConverter.png",
      codeLink: "https://github.com/seu-usuario/currency-converter"
    },
    {
      title: "Habits Dashboard",
      technologies: "HTML, Bootstrap, JavaScript, Python (Flask), SQLite",
      description:
        "Aplicação completa para monitoramento de hábitos diários, com persistência de dados e layout responsivo. Projeto final do curso CS50x da Harvard.",
      features: [
        "Criação de dados e estrutura inicial do banco",
        "Inserção de hábitos diários",
        "Remoção de hábitos diários",
        "Habit check (marcar/desmarcar conclusão)",
        "Reset automático de hábitos por período",
        "Frontend com HTML, CSS e Bootstrap",
        "JavaScript para interações e atualização dinâmica",
        "Backend Python com Flask",
        "Banco de dados SQLite"
      ],
      image: "/images/healthyflow.png",
      codeLink: "https://github.com/seu-usuario/habits-dashboard"
    },
  ];

  return (
    <div
      id="projects"
      className="w-screen min-h-screen bg-gradient-to-r from-gray-100 to-white text-gray-900 flex flex-col items-center justify-center px-6 py-20 font-serif"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 transition duration-300 hover:text-gray-600 hover:scale-105"
      >
        Projetos Relevantes
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg transition hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-md mb-4 object-cover h-40 w-full"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm italic mb-3">{project.technologies}</p>
            <p className="text-base leading-relaxed mb-4">{project.description}</p>

            {project.features && (
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
                {project.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            )}

            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition mt-auto"
            >
              <FaGithub className="text-xl" /> Ver código no GitHub
            </a>
          </motion.div>
        ))}
      </div>

      <motion.a
        href="https://github.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex items-center gap-2 mt-12 text-lg font-semibold text-blue-600 hover:text-blue-800 transition"
      >
      </motion.a>
    </div>
  );
}