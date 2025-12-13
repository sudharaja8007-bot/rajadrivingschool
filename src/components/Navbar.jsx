import logo from "../assets/logo.jpeg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="Raja DShool Driving School Logo"
            className="w-50 h-12 object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Courses</li>
          <li className="hover:text-blue-600 cursor-pointer">Instructors</li>
          <li className="hover:text-blue-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu */}
        <button className="md:hidden text-2xl">☰</button>
      </nav>
    </header>
  );
}
