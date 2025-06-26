import React from "react";
import { Helmet } from "react-helmet-async";

export default function Support() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-900 dark:text-gray-100">
      <Helmet>
        <title>HobbyHub | Support</title>
      </Helmet>

      <h1 className="text-4xl font-extrabold text-center text-lime-400 mb-10">
        Support & FAQs
      </h1>

      <section className="space-y-8 max-w-3xl mx-auto">
        <article>
          <h2 className="text-2xl font-semibold mb-3 text-lime-400">
            How do I create a hobby group?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            After registering and logging in, navigate to the "Create Group" page,
            fill in the group details, and submit. Your group will be live instantly!
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 text-lime-400">
            Can I join multiple groups?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Yes! HobbyHub allows you to join as many groups as you like, helping you
            explore different hobbies and communities.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 text-lime-400">
            What if I forget my password?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Currently, password reset is not implemented to keep the platform simple
            for examiners. We recommend registering with a memorable password.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-3 text-lime-400">
            How do I report inappropriate content or behavior?
          </h2>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            Please contact us directly via the <a href="/contact" className="text-lime-400 underline hover:text-lime-300">Contact page</a> with details. We take such reports seriously and
            will respond promptly.
          </p>
        </article>
      </section>
    </div>
  );
}
