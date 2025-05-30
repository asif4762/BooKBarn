import React from "react";

const AboutUs = () => {
  return (
    <section className="px-6 py-12 md:py-20 bg-white text-gray-800 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">About BookBarn</h2>
        <p className="text-lg text-gray-600">
          Where every page tells a story, and every reader finds their next adventure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Library"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Story</h3>
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

      <div className="mt-16 text-center">
        <h4 className="text-xl font-semibold text-blue-600 mb-2">Join Our Community</h4>
        <p className="text-gray-700 mb-4">
          Follow us on social media, sign up for our newsletter, and become a part of the
          BookBarn family.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
