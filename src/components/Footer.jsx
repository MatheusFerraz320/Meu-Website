import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-gray-300 py-3 px-6 flex justify-center gap-8 shadow-lg">
      <a
        href="https://github.com/MatheusFerraz320"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition transform hover:scale-125 text-xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/matheus-ferraz-6a1525379/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition transform hover:scale-125 text-xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:matheusaugustosabinoferraz@outlook.com"
        className="hover:text-red-400 transition transform hover:scale-125 text-xl"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://wa.me/5513991621955"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400 transition transform hover:scale-125 text-xl"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}