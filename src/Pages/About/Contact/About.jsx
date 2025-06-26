import React from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-10 text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>HobbyHub | About Us</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-center text-lime-400 mb-6">
        About HobbyHub
      </h1>

      <p className="text-lg leading-relaxed">
        At HobbyHub, we believe that hobbies bring people together and enrich lives.
        Our mission is to create a friendly platform where local hobbyists can discover groups,
        share their passions, and build meaningful communities.
      </p>

      <p className="text-lg leading-relaxed">
        Whether you're into painting, gaming, reading, or outdoor adventures,
        HobbyHub helps you connect with like-minded people near you. Join events,
        create groups, and explore new interests with ease.
      </p>

      <section className="bg-lime-100 dark:bg-lime-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-lime-700 dark:text-lime-300">
          Why Choose HobbyHub?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-200">
          <li>Easy-to-use platform designed for local hobby communities.</li>
          <li>Discover and join hobby groups by category and location.</li>
          <li>Create your own groups and manage meetups seamlessly.</li>
          <li>Stay informed with upcoming events and special offers.</li>
          <li>Responsive design with dark and light modes for comfortable browsing.</li>
        </ul>
      </section>
    </div>
  );
}
