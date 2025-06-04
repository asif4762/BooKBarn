import React, { useEffect } from "react";
import { Facebook, Twitter, Instagram, BookHeart, Users, Target } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  const libraryImageUrl = "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80";
  const teamImageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80";

  return (
    <HelmetProvider>
      <section className="relative px-4 sm:px-6 py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-slate-900 overflow-hidden selection:bg-purple-300 selection:text-purple-900">
        <Helmet><title>BookBarn | About Us</title></Helmet>

        {/* Light theme subtle background blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-indigo-200 rounded-full opacity-30 blur-3xl -z-0 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-pink-200 rounded-full opacity-30 blur-3xl -z-0 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 md:w-80 md:h-80 bg-purple-200 rounded-full opacity-20 blur-3xl -z-0 animate-pulse delay-500"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r tracking-tight" style={{ color: "#1e88e5" }}>
              About BookBarn
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-700">
              Where every page tells a story, and every reader finds their next adventure in the vast cosmos of literature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={libraryImageUrl}
                alt="A cozy library with shelves full of books"
                className="relative rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-500 ease-in-out aspect-video object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E7FF/4B5563?text=Book+Haven"; }}
              />
            </div>
            <div data-aos="fade-left" className="prose prose-lg max-w-none prose-p:text-slate-700 prose-headings:bg-clip-text prose-headings:text-transparent prose-headings:bg-gradient-to-r prose-headings:from-purple-700 prose-headings:to-indigo-700">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5"style={{ color: "#1e88e5" }}>Our Story</h2>
              <p className="leading-relaxed">
                BookBarn was forged in the crucible of passion for literature, with a singular mission: to democratize reading and make the boundless universe of books accessible to all. What began as a humble constellation of digital tomes has blossomed into a vibrant galaxy, a nexus for readers, authors, and perpetual seekers of knowledge.
              </p>
              <p className="leading-relaxed">
                We champion the transformative power of narratives—their capacity to ignite inspiration, disseminate wisdom, and reshape destinies. Our platform is a meticulously curated cosmos, offering an expansive spectrum of literary works, from timeless classics that echo through the ages to the incandescent brilliance of contemporary bestsellers.
              </p>
            </div>
          </div>

          <div className="mb-16 md:mb-24 text-center" data-aos="zoom-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r"style={{ color: "#1e88e5" }}>
              Our Guiding Stars
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1">
                <BookHeart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Passion for Reading</h3>
                <p className="text-slate-600 text-sm">Fostering a lifelong love for books and the worlds they unlock.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
                <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Community Centric</h3>
                <p className="text-slate-600 text-sm">Building a vibrant and inclusive space for all book lovers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-1">
                <Target className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Accessibility for All</h3>
                <p className="text-slate-600 text-sm">Making diverse literature easily available to everyone, everywhere.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <div data-aos="fade-left" className="prose prose-lg max-w-none prose-p:text-slate-700 prose-headings:bg-clip-text prose-headings:text-transparent prose-headings:bg-gradient-to-r prose-headings:from-purple-700 prose-headings:to-indigo-700 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5" style={{ color: "#1e88e5" }}>Meet the Curators</h2>
              <p className="leading-relaxed">
                Behind BookBarn is a dedicated crew of bibliophiles, tech wizards, and dreamers, all united by a shared love for stories. We're committed to enhancing your reading journey every step of the way.
              </p>
              <p className="leading-relaxed">
                Whether you’re a casual reader charting new literary territories or a seasoned bibliophile navigating familiar constellations, BookBarn is your celestial guide to discover, share, and celebrate the enduring magic of books.
              </p>
            </div>
            <div data-aos="fade-right" className="relative group md:order-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={teamImageUrl}
                alt="A diverse team collaborating"
                className="relative rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-500 ease-in-out aspect-video object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E7FF/4B5563?text=Our+Team"; }}
              />
            </div>
          </div>

          <div className="mt-16 md:mt-20 text-center" data-aos="zoom-in">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r "style={{ color: "#1e88e5" }}>
              Join Our Literary Universe
            </h3>
            <p className="text-slate-700 mb-8 max-w-xl mx-auto">
              Follow our cosmic journey on social media, subscribe to our stellar newsletter, and become an integral part of the BookBarn family.
            </p>
            <div className="flex justify-center gap-6 sm:gap-8">
              <a
                href="#"
                className="text-slate-600 hover:text-purple-600 transition-colors duration-300 transform hover:scale-110"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={32} />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={32} />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-pink-600 transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

const App = AboutUs;
export default App;
