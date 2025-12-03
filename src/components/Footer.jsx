import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-black text-gray-300 py-3 px-6 flex justify-center gap-8 shadow-lg">
      <a
        href="https://github.com/seu-usuario"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition transform hover:scale-125 text-xl"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/seuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition transform hover:scale-125 text-xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:seuemail@gmail.com"
        className="hover:text-red-400 transition transform hover:scale-125 text-xl"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://wa.me/5513999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400 transition transform hover:scale-125 text-xl"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
}