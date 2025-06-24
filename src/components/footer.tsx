import { Search } from 'lucide-react';

export default function Footer() {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-[#1D2B29] mt-20 sm:mt-32 lg:mt-40">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center py-6">
        {/* Logo */}
        <img
          src="/logo_planaway.png"
          alt="Planaway Logo"
          className="w-40 md:w-52 lg:w-60 object-contain"
        />
        {/* Newsletter */}
        <div className="w-full lg:w-auto">
          <span className="block text-lg sm:text-xl font-bold">
            Subscribe to Our Newsletter
          </span>
          <form className="mt-2 p-3 bg-[#F2ECE3] rounded-3xl flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:w-[400px]">
            <div className="flex items-center gap-2 w-full">
              <Search color="#ABADB0" />
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your email"
                className="w-full text-[#1D2B29] placeholder-[#ABADB0] bg-transparent outline-none"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Link columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 py-10 sm:text-base text-center sm:text-left">
        
        {/* Contact */}
        <div>
          <p className="text-[#6C7370] text-xl">General Inquiry</p>
          <p className="font-semibold mt-1 break-words">hallo@planaway.com</p>
        </div>

        {/* Links 1 */}
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">Homepage</li>
          <li className="hover:underline cursor-pointer">Explore Activity</li>
          <li className="hover:underline cursor-pointer">Write a Review</li>
          <li className="hover:underline cursor-pointer">About Us</li>
        </ul>

        {/* Links 2 */}
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Terms & Condition</li>
          <li className="hover:underline cursor-pointer">Review Writing Guide</li>
          <li className="hover:underline cursor-pointer">Career</li>
        </ul>

        {/* Social Media */}
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">Instagram</li>
          <li className="hover:underline cursor-pointer">Tiktok</li>
          <li className="hover:underline cursor-pointer">Facebook</li>
          <li className="hover:underline cursor-pointer">Youtube</li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="border-t text-center text-xs py-4 text-[#6C7370]">
        Copyright © 2025 Planaway. All Rights Reserved. Powered by PT. Pencari Cinta.
      </div>
    </section>
  );
}
