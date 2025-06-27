import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

      <p className="mb-4">Welcome to HobbyHub. By accessing or using our platform, you agree to comply with these Terms of Use. Please read them carefully.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You must be at least 13 years old to use this platform.</li>
        <li>You agree not to use the service for any illegal or unauthorized purpose.</li>
        <li>You are responsible for any content you post or share within groups.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Content Ownership</h2>
      <p className="mb-4">You retain ownership of the content you create, but grant HobbyHub a license to display and distribute it on our platform.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Account Security</h2>
      <p className="mb-4">Keep your account credentials secure. You are responsible for all activities under your account.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Termination</h2>
      <p className="mb-4">We reserve the right to suspend or terminate accounts that violate our rules or misuse the platform.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
      <p>We may update these terms at any time. Continued use implies acceptance of the revised terms.</p>
    </div>
  );
};

export default TermsOfUse;
