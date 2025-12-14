import instructorImg from "../../assets/instructor.png"; // your image

export default function Instructor() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-20">
          Our Instructor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* INSTRUCTOR CARD */}
          <div className="relative bg-blue-50 pt-24 pb-10 px-10 rounded-2xl shadow-md text-center">

            {/* IMAGE CIRCLE */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2">
              <div className="w-42 h-42 rounded-full bg-blue-600 flex items-center justify-center">
                <img
                  src={instructorImg}
                  alt="Instructor"
                  className="w-38 h-38 rounded-full object-cover bg-white"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              Raja C
            </h3>

            <p className="text-gray-600">
              Certified Driving Instructor
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Over 10+ years of professional driving experience, specializing in
              beginner training, defensive driving, and confidence building for
              new drivers.
            </p>
          </div>

          {/* TESTIMONIAL */}
          <div className="bg-blue-50 p-10 rounded-2xl shadow-md">
            <p className="text-5xl text-blue-600 mb-4 leading-none">“</p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Raja Driving School provided excellent instruction and support.
              My instructor was patient, knowledgeable, and friendly.
              I gained confidence and passed my driving test on the first attempt.
            </p>

            <h4 className="font-semibold text-gray-800">
              – Dheenadhayalan
            </h4>

            <p className="text-sm text-gray-500">
              Student
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
