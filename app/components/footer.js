import { Instagram } from 'lucide-react'; // Install with: npm install lucide-react
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-4 text-md text-gray-600 flex flex-col items-center gap-2">
     
      <Link
        href="https://www.instagram.com/te.stdio/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </Link>
       <p>© TE Studio {year}</p>
    </footer>
  );
};

export default Footer;
