import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <p className="mb-4">This Cookie Policy explains how HobbyHub uses cookies and similar technologies.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4">Cookies are small text files that help remember information and improve your experience.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To remember login sessions.</li>
        <li>To understand how users use our site.</li>
        <li>To personalize content and recommendations.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Types of Cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Essential:</strong> Required for site functionality.</li>
        <li><strong>Analytics:</strong> Helps us improve the user experience.</li>
        <li><strong>Functionality:</strong> Remembers your preferences.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Managing Cookies</h2>
      <p className="mb-4">You can manage cookies in your browser settings. Disabling cookies may limit features.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Updates</h2>
      <p>This policy may be updated occasionally. Revisit to stay informed.</p>
    </div>
  );
};

export default CookiePolicy;
