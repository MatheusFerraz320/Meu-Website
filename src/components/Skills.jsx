import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "SQL", icon: <SiMysql className="text-yellow-600" /> },
  ];

  return (
    <div
      id="skills"
      className="w-screen min-h-screen bg-gradient-to-r from-[#360033] to-[#0b8793]
 text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12"
      >
        Tecnologias
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-5xl">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex flex-col items-center justify-center p-6 rounded-lg bg-black/30 shadow-lg cursor-pointer hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}