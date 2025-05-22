import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Top Section */}
      <footer className="footer bg-base-200 text-base-content p-10 flex flex-wrap justify-between">
        <div>
          <h6 className="footer-title">Hobbies</h6>
          <a className="link link-hover">Drawing</a>
          <a className="link link-hover">Photography</a>
          <a className="link link-hover">Gaming</a>
          <a className="link link-hover">Cooking</a>
        </div>
        <div>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Support</a>
        </div>
        <div>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </div>
      </footer>

      {/* Bottom Section */}
      <footer className="footer items-center justify-between bg-base-200 px-10 py-4 border-t text-base-content border-base-300 flex flex-col md:flex-row gap-4">
        {/* Branding */}
        <Link to="/" className="flex items-center gap-3">
          <img src="https://i.ibb.co/xQr2zTk/icons8-app-100.png" alt="Logo" className="w-10 h-10" />
          <div>
            <p className="text-lg font-bold">HobbyHub</p>
            <p className="text-sm">Connecting hobbyists since 2025</p>
          </div>
        </Link>

        {/* Social Links */}
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current hover:text-blue-500" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932..." />
            </svg>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current hover:text-red-600" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631..." />
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current hover:text-blue-700" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642..." />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
