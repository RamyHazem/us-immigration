import React from "react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-16">
      <h2 className="text-5xl font-semibold text-center text-gray-800 mb-12">
        Education Opportunities for Immigrants
      </h2>

      {/* High School Education Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          High School Education
        </h3>
        <p className="text-lg text-gray-700">
          Immigrants are granted free education from Kindergarten through High
          School at public schools in all states in the country. Some states,
          like California, even allow immigrants without residency to attend
          school and earn a High School diploma.
        </p>
      </div>

      {/* College Education Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          College Education
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          College education funding is complex, with fees ranging from $24,513
          in public universities to $43,505 in private ones. Financial aid,
          scholarships, community colleges, and work-study options are available
          to immigrants.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Private Scholarships */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Private Scholarships
            </h4>
            <p className="text-gray-700">
              Many private universities provide scholarships for immigrant
              students. Websites like Scholarships.com and Fastweb.com list
              available opportunities.
            </p>
          </div>

          {/* Community Colleges */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Community Colleges
            </h4>
            <p className="text-gray-700">
              Community colleges offer affordable education compared to
              universities, making them a great option for immigrant students
              looking to save on tuition fees.
            </p>
          </div>

          {/* State Scholarships */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              State Scholarships
            </h4>
            <p className="text-gray-700">
              States like New York offer scholarships, such as the Excelsior
              Scholarship, to immigrant students attending public universities.
            </p>
          </div>

          {/* Work-Study Program */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Work-Study Program
            </h4>
            <p className="text-gray-700">
              If scholarships are unavailable, students can opt for a work-study
              program. Many universities offer part-time jobs to help pay for
              tuition.
            </p>
          </div>
        </div>
      </div>

      {/* University Scholarships Section */}
      <div>
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          University Scholarships
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Harvard */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Harvard University
            </h4>
            <p className="text-gray-700 mb-4">
              Harvard offers several scholarships for immigrant students,
              including the Horace W. Goldsmith Fellowship and Boustany MBA
              Harvard Scholarship.
            </p>
            <a href="https://www.harvard.edu/" className="text-blue-500">
              Visit Website
            </a>
          </div>

          {/* MIT */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">MIT</h4>
            <p className="text-gray-700 mb-4">
              MIT offers the MIT International Excellence Scholarship, covering
              40%-100% of tuition based on financial need.
            </p>
            <a href="https://www.mit.edu/" className="text-blue-500">
              Visit Website
            </a>
          </div>

          {/* UCLA */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">UCLA</h4>
            <p className="text-gray-700 mb-4">
              UCLA offers a competitive immigrant scholarship, covering 20%-60%
              of tuition fees.
            </p>
            <a href="https://www.ucla.edu/" className="text-blue-500">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
