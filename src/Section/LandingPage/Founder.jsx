import foundersImg from "../../assets/founders.jpeg";

export default function Founder() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">
          Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE SIDE */}
          <div className="flex justify-center">
            <div className="bg-blue-600 p-4 rounded-3xl shadow-lg">
              <img
                src={foundersImg}
                alt="Raja Driving School Founders"
                className="w-[320px] h-[420px] object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-2">
              Raja C & Sudha Raja
            </h3>

            <p className="text-blue-600 font-medium mb-6">
              Founders – Raja Driving School
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              Raja Driving School was founded by <strong>Raja C</strong> and
              <strong> Sudha Raja</strong>, a husband-and-wife team driven by a
              shared passion for road safety and quality driver education.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              With over <strong>10+ years of experience</strong>, they have
              trained hundreds of students to become confident, responsible,
              and skilled drivers. Their mission is to make driving education
              simple, safe, and accessible for everyone.
            </p>

            {/* STATS */}
            <div className="flex gap-6">
              <div className="bg-blue-50 px-6 py-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>

              <div className="bg-blue-50 px-6 py-4 rounded-xl text-center">
                <p className="text-2xl font-bold text-blue-600">1000+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
