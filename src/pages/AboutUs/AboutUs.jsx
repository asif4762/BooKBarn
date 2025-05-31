import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <section className="relative px-6 py-16 md:py-24 bg-gradient-to-r from-blue-50 to-white text-gray-800 max-w-6xl mx-auto overflow-hidden">
      <Helmet><title>BookBarn | About Us</title></Helmet>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10 animate-pulse delay-2000"></div>

      <div className="text-center mb-14" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">About BookBarn</h2>
        <p className="text-lg md:text-xl text-gray-600">
          Where every page tells a story, and every reader finds their next adventure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Library"
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div data-aos="fade-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-blue-600">Our Story</h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            BookBarn was born from a love of literature and a mission to make reading more
            accessible to everyone. What started as a small online book collection has grown into
            a vibrant community of readers, authors, and lifelong learners.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            We believe books have the power to inspire, educate, and transform lives. Our platform
            offers an extensive range of titles — from timeless classics to the latest bestsellers,
            all curated with care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you’re a casual reader or a bibliophile, BookBarn is your go-to destination
            to discover, share, and celebrate the magic of books.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center" data-aos="zoom-in">
        <h4 className="text-2xl font-semibold text-blue-600 mb-3">Join Our Community</h4>
        <p className="text-gray-700 mb-6">
          Follow us on social media, sign up for our newsletter, and become a part of the
          BookBarn family.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={28} />
          </a>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={28} />
          </a>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
