import { FaCar, FaRedoAlt, FaShieldAlt, FaClipboardList } from "react-icons/fa";

export default function OurCourses() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-10">
            Our Courses
          </h2>

          <div className="space-y-8">
            
            {/* Beginner Lessons */}
            <div className="flex items-start gap-5">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600 text-2xl">
                <FaCar />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Beginner Lessons
                </h3>
                <p className="text-gray-600">
                  For new drivers with little or no experience.
                </p>
              </div>
            </div>

            {/* Refresher Lessons */}
            <div className="flex items-start gap-5">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600 text-2xl">
                <FaRedoAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Refresher Lessons
                </h3>
                <p className="text-gray-600">
                  For drivers looking to improve their skills.
                </p>
              </div>
            </div>

            {/* Defensive Driving */}
            <div className="flex items-start gap-5">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600 text-2xl">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Defensive Driving
                </h3>
                <p className="text-gray-600">
                  Learn advanced safety techniques and road awareness.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center">
          <div className="bg-blue-50 rounded-2xl p-10 w-full max-w-sm text-center shadow-md">
            <div className="text-blue-600 text-5xl flex justify-center mb-6">
              <FaClipboardList />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Beginner Lessons
            </h3>
            <p className="text-gray-600">
              For new drivers looking to improve their skills
              with expert guidance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
