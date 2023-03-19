import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 bg-opacity-75 text-gray-300 px-4 py-8">
      <div className="max-w-7xl mx-auto text-center">
        <nav className="flex justify-center mb-4">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/#aboutMe">
                <div className="flex items-center ml-10 text-lg cursor-pointer hover:border-b border-transparent">
                  About Me
                </div>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <div className="flex items-center ml-10 text-lg cursor-pointer hover:border-b border-transparent">
                  Projects
                </div>
              </Link>
            </li>
            <li>
              <Link href="/#skills">
                <div className="flex items-center ml-10 text-lg cursor-pointer hover:border-b border-transparent">
                  Skills
                </div>
              </Link>
            </li>
            <li>
              <Link href="/#contact">
                <div className="flex items-center ml-10 text-lg cursor-pointer hover:border-b border-transparent">
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center mb-4">
          <a href="https://github.com/kkristiansd" target="_blank" rel="noopener noreferrer" className="text-3xl mx-2 hover:text-white">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kristians-danilovs/" target="_blank" rel="noopener noreferrer" className="text-3xl mx-2 hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/kkristiansd/" target="_blank" rel="noopener noreferrer" className="text-3xl mx-2 hover:text-white">
            <FaInstagram />
          </a>
        </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Kris website. No rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;