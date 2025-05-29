import { useState } from "react";
import {
  Sun,
  Moon,
  Mail,
  Phone,
  Instagram,
  Github,
  User,
  Calendar,
  Ruler,
  Book,
  Briefcase,
  // Send,
} from "lucide-react";
import Ghibli from "../images/IkramGhibli.png";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-100 to-green-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-700 scroll-smooth font-sans">
        {/* Navbar */}
        <nav className="bg-emerald-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md py-4 px-6 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-extrabold tracking-wide text-emerald-700 dark:text-indigo-400 select-none">
              Ikramul
            </h1>
            <div className="flex items-center space-x-8 font-medium text-lg">
              {["Home", "About", "Services", "Contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="hover:text-emerald-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {section}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle Dark Mode"
                className="p-2 rounded-full bg-emerald-300 dark:bg-gray-700 shadow hover:bg-emerald-400 dark:hover:bg-indigo-600 transition"
              >
                {darkMode ? (
                  <Sun size={22} className="text-yellow-400" />
                ) : (
                  <Moon size={22} className="text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Section */}
        <main
          id="top"
          className="container mx-auto flex flex-col md:flex-row items-start gap-16 px-6 md:px-12 py-12 flex-grow"
        >
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-emerald-400 dark:border-indigo-500 shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={Ghibli}
                alt="Ikramul's Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Info Section */}
          <section className="flex-grow space-y-12 bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-2xl shadow-emerald-200 dark:shadow-indigo-900 font-serif">
            <div>
              <h2 className="text-3xl font-bold mb-5 border-b-4 border-emerald-400 dark:border-indigo-500 inline-block pb-1 tracking-wide">
                Personal Information
              </h2>
              <ul className="text-xl leading-relaxed space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-3">
                  <User className="w-6 h-6 text-emerald-600 dark:text-indigo-400" />
                  <span>
                    <strong>Name:</strong> Ikramul
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-emerald-600 dark:text-indigo-400" />
                  <span>
                    <strong>Date of Birth:</strong> 26 January 2000
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Ruler className="w-6 h-6 text-emerald-600 dark:text-indigo-400" />
                  <span>
                    <strong>Height:</strong> 171 cm
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Book className="w-6 h-6 text-emerald-600 dark:text-indigo-400" />
                  <span>
                    <strong>Education:</strong> B.Tech in CSE, BVEC (2022)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-5 border-b-4 border-emerald-400 dark:border-indigo-500 inline-block pb-1 tracking-wide">
                Career Objective
              </h2>
              <p className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed max-w-3xl">
                Passionate, disciplined individual striving to serve the nation
                through public service. Preparing for SSC CGL 2025 with complete
                focus and dedication.
              </p>
            </div>
          </section>
        </main>

        {/* Services */}
        <section
          id="services"
          className="container mx-auto px-6 md:px-12 py-14 space-y-10 font-serif"
        >
          <h2 className="text-4xl font-extrabold border-b-4 border-emerald-400 dark:border-indigo-500 inline-block mb-8 tracking-wide">
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Web Development",
              "UI Design",
              "AI & Machine Learning",
              "Tech Guidance",
            ].map((title) => (
              <div
                key={title}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-emerald-400 dark:hover:shadow-indigo-600 transition-shadow duration-300 cursor-default select-none"
              >
                <Briefcase className="w-8 h-8 text-emerald-600 dark:text-indigo-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-emerald-600 dark:text-indigo-400">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {title === "Web Development"
                    ? "React, Tailwind, JavaScript"
                    : title === "UI Design"
                    ? "Responsive Layouts & User Interfaces"
                    : title === "AI & Machine Learning"
                    ? "Basic Exploration & Projects"
                    : "Peer Mentorship & Support"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section Wrapper */}
        <section
          id="contact"
          className="container mx-auto px-6 md:px-12 py-16 font-serif"
        >
          <h2 className="text-4xl font-extrabold border-b-4 border-emerald-400 dark:border-indigo-500 inline-block mb-10 tracking-wide">
            Contact
          </h2>

          {/* Flex Container for Contact & Form */}
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-12 md:space-y-0">
            {/* Contact Details */}
            <div className="md:w-1/2 space-y-10 bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-2xl shadow-emerald-200 dark:shadow-indigo-900">
              {[
                {
                  icon: (
                    <Mail className="w-7 h-7 text-emerald-600 dark:text-indigo-400" />
                  ),
                  label: "Email:",
                  value: "ikramul9401@gmail.com",
                  href: "mailto:ikramul9401@gmail.com",
                },
                {
                  icon: (
                    <Phone className="w-7 h-7 text-emerald-600 dark:text-indigo-400" />
                  ),
                  label: "Phone:",
                  value: "+91-9365628411",
                },
                {
                  icon: (
                    <Instagram className="w-7 h-7 text-emerald-600 dark:text-indigo-400" />
                  ),
                  label: "Instagram",
                  href: "https://www.instagram.com/brother_ikram/",
                },
                {
                  icon: (
                    <Github className="w-7 h-7 text-emerald-600 dark:text-indigo-400" />
                  ),
                  label: "Github",
                  href: "https://github.com/yourusername",
                },
              ].map(({ icon, label, value, href }) => (
                <p
                  key={label}
                  className="text-lg text-gray-900 dark:text-gray-300 flex items-center space-x-4"
                >
                  {icon}
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                    >
                      {label} {value}
                    </a>
                  ) : (
                    <span>
                      <strong>{label}</strong> {value}
                    </span>
                  )}
                </p>
              ))}
            </div>

            {/* Message Form */}
            <div className="md:w-1/2 bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-2xl shadow-emerald-200 dark:shadow-indigo-900">
              <h3 className="text-2xl font-bold mb-5 border-b-4 border-emerald-400 dark:border-indigo-500 inline-block pb-1 tracking-wide">
                Send a Message
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-900 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-900 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:focus:ring-indigo-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold bg-emerald-500 dark:bg-indigo-500 text-white rounded-lg shadow-md hover:bg-emerald-600 dark:hover:bg-indigo-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gradient-to-r from-emerald-600 to-indigo-600 dark:from-gray-800 dark:to-gray-900 text-white py-10 mt-16 relative">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-6 text-center">
            {/* Motivational Quote */}
            <p className="text-xl font-semibold tracking-wide text-yellow-300 dark:text-gray-300 italic">
              "Keep pushing forward. Success is just around the corner!"
            </p>

            {/* Decorative Divider */}
            <div className="w-32 h-1 bg-yellow-300 dark:bg-gray-500 rounded-full"></div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4">
              {[
                {
                  icon: <Instagram size={28} />,
                  href: "https://www.instagram.com/brother_ikram/",
                },
                {
                  icon: <Github size={28} />,
                  href: "https://github.com/yourusername",
                },
                {
                  icon: <Mail size={28} />,
                  href: "mailto:ikramul9401@gmail.com",
                },
              ].map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-transform transform hover:scale-125 hover:-rotate-2 duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Decorative Divider */}
            <div className="w-32 h-1 bg-yellow-300 dark:bg-gray-500 rounded-full"></div>

            {/* Copyright Section */}
            <p className="text-lg font-medium">
              © {new Date().getFullYear()}{" "}
              <span className="font-bold">Ikramul</span> | All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
