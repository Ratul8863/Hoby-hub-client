import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">At HobbyHub, your privacy is important to us. This policy outlines how we collect, use, and protect your information.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Name, email, and other profile details during registration.</li>
        <li>Usage data such as group participation, clicks, and preferences.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To personalize your experience.</li>
        <li>To improve our services and UI.</li>
        <li>To send updates or provide support.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">We do not sell your data. Third-party services may be used strictly for functionality (e.g., Firebase).</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <p className="mb-4">You may update or delete your profile, and request data removal by contacting us.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Security</h2>
      <p className="mb-4">We use modern security practices, but no system is 100% secure.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates</h2>
      <p>This policy may be updated. We encourage you to review it regularly.</p>
    </div>
  );
};

export default PrivacyPolicy;
