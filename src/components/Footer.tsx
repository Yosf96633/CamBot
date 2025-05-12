import React from 'react';
import { Mail, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-black text-base font-bold">
            C
          </div>
          <span className="text-xl tracking-wide">CamBot</span>
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4" />
          <p
            className="hover:underline cursor-pointer hover:text-gray-300 transition duration-200"
          >
            support@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-xs text-gray-400 flex items-center justify-center gap-1">
        © 2025 CamBot. All rights reserved. <Heart className="h-3.5 w-3.5 text-red-500" />
      </div>
    </footer>
  );
}

export default Footer;
