import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "Início", href: "#hero" },
    { name: "Sobre", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 flex justify-center"
    >
      <ul className="flex gap-8 py-4 text-white font-semibold">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="transition duration-500 transform hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
