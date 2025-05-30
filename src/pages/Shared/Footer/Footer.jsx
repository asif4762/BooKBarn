
const Footer = () => {
  return (
    <footer className="bg-[#1876D1] text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} BookBarn. All rights reserved.
        </div>
        <div className="flex space-x-4 text-sm">
          <a href="#about" className="hover:text-white transition">Facebook</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-white">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
