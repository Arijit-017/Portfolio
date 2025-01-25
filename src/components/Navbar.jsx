import logo from '../assets/AJ-removebg-preview.png';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-8 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-16" />
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/arijitghosh017/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Arijit-017"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/Arijitgh017"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://www.instagram.com/only_arijit_17/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
