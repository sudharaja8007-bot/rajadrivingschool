import aboutImg from "../../assets/about-driving.png"; // change image path

export default function About() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            About Us
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Raja DSchool is a professional driving school dedicated to providing
            high-quality instruction and practical training for drivers of all
            skill levels. From beginners to experienced learners, we help every
            student gain confidence behind the wheel.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our mission is to create safe, responsible, and confident drivers by
            combining expert guidance, modern teaching methods, and real-world
            driving experience. We focus not just on passing driving tests, but
            on building lifelong safe driving habits.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            With a student-first approach, flexible schedules, and personalized
            training plans, Raja DSchool ensures every learner receives the
            attention and support they need to succeed.
          </p>

          <h3 className="text-3xl font-semibold text-blue-600 mb-6">
            Why Choose Us
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">•</span>
              <span>
                <strong>Experienced instructors</strong> with professional
                certification and real-world driving expertise
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">•</span>
              <span>
                <strong>Comprehensive courses</strong> covering traffic rules,
                road safety, defensive driving, and practical skills
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">•</span>
              <span>
                <strong>Modern vehicles</strong> with dual controls and
                well-maintained cars for safe and comfortable learning
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">•</span>
              <span>
                <strong>Flexible training schedules</strong> designed to suit
                students, working professionals, and beginners
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">•</span>
              <span>
                <strong>High success rate</strong> with focused preparation for
                driving tests and road confidence
              </span>
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="Raja Driving School Training"
            className="w-full max-w-xl rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
