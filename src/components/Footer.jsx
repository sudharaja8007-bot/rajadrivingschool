import logo from "../assets/logo.jpeg";
export default function Footer() { // change logo here

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Raja DShool Logo"
                className="w-70 h-18 object-contain"
              />
              {/* <div>
                <h2 className="text-lg font-bold text-white">
                  Raja DShool
                </h2>
                <p className="text-xs tracking-widest text-gray-400">
                  DRIVING SCHOOL
                </p>
              </div> */}
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Learn to drive with confidence. Professional instructors,
              modern vehicles, and flexible timings for every student.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              <li className="hover:text-white cursor-pointer">Instructors</li>
              <li className="hover:text-white cursor-pointer">Testimonials</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Beginner Training</li>
              <li className="hover:text-white cursor-pointer">Advanced Driving</li>
              <li className="hover:text-white cursor-pointer">License Support</li>
              <li className="hover:text-white cursor-pointer">Refresher Course</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>📍 1/143 ENDAPATTI,<br/>
                SUGAR MILL POST, <br>
                </br>PALACODE,DHARMAPURI, <br/>
                TAMILNDE-636808</li>
              <li>📞 +91 9443614199, +91 9597658007</li>
              <li>✉️ rajadrivingschool@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Raja Driving Shool. All rights reserved.
          </p>
          <p className="mt-3 md:mt-0">
            Designed with ❤️ for safe driving
          </p>
        </div>

      </div>
    </footer>
  );
}
