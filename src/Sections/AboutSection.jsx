import React from "react";
import { Link } from "react-scroll";

const AboutUsSection = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-5xl font-semibold text-gray-800 mb-8">
          Welcome to Your New Beginning
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Our website is your ultimate guide along the path of immigration to
          the United States. Be it for pursuing the American dream, reuniting
          with loved ones, or seeking newer horizons, we provide clear and
          up-to-date information about visa options and citizenship. We will
          guide you to find the most affordable places in the country. We help
          you find the best possible education for your children. We will assist
          you in finding tourist places to spend time on the weekends. The
          website offers different kinds of cuisines the country provides. We
          work toward slicing through the complexity of U.S. immigration laws
          into easy guides, expert tips, and resources molded to your unique
          situation. Learn about life in the U.S., and get support to make your
          transition smooth and successful. Your new beginning starts here!
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Visa & Citizenship
            </h3>
            <p className="text-gray-700">
              We provide clear, up-to-date information on visa options and the
              citizenship process, making your journey to the U.S. as smooth as
              possible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Affordable Places
            </h3>
            <p className="text-gray-700">
              Find the most affordable cities and towns in the U.S., ensuring
              you make the most out of your relocation while staying within
              budget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Education for Your Children
            </h3>
            <p className="text-gray-700">
              Learn about educational opportunities for your children, from
              public schools to prestigious universities, to help them thrive in
              the U.S.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tourism & Weekend Fun
            </h3>
            <p className="text-gray-700">
              Discover the best tourist spots and weekend getaways in the U.S.
              to enjoy your free time and create lasting memories.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cuisine Exploration
            </h3>
            <p className="text-gray-700">
              Explore the diverse and delicious cuisines from all around the
              world, available right in the United States.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Immigration Guidance
            </h3>
            <p className="text-gray-700">
              We break down U.S. immigration laws into easy-to-understand
              guides, tips, and resources that are tailored to your unique
              situation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button className="bg-yellow-500 text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-yellow-600 transition">
            <Link
              activeClass="active"
              to="process"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Start Your Journey
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
