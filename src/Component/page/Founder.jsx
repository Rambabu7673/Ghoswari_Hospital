const Founder = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"  id="About">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hospital.jpg"
          alt="bg"
          className="w-full h-full object-cover scale-110 blur-sm"
        />
      </div>

      {/* Gradient Overlay (Multi Layer) */}
      <div className="absolute inset-0 bg-gray-300 text-black"></div>

      {/* Color Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/10 to-blue-600/20"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        {/* Heading */}
        <div className="text-center text-black">
          <h2 className="text-3xl sm:text-4xl font-bold">Ghoswari Hospital</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-black">
            Delivering trusted healthcare with compassion, innovation, and
            excellence.
          </p>
        </div>

        {/* Glass Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://scontent.fpat11-3.fna.fbcdn.net/v/t39.30808-6/506137497_1348339573291859_3797650608226071240_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=iNWbBAQV2TAQ7kNvwEz8pQM&_nc_oc=Adq1ICRGGGbojSmDS2ck8vq6Bv3_SHjxUESO8qwu3Y8JQWe-0bzISzF-B2m869rK9A69xZy67ScOg0gB-WFXmQ1M&_nc_zt=23&_nc_ht=scontent.fpat11-3.fna&_nc_gid=Gde7yH2wGyhneOVklpa1kg&_nc_ss=7a3a8&oh=00_Af2DYP2mDFcH6TKUFusmpHINqVZJN_tsMq8ECytlTgUw1Q&oe=69E9B2C4"
              alt="Hospital"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content Glass */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 text-black shadow-xl">
            <p className="text-sm sm:text-base md:text-lg leading-7  mb-4">
              Ghoswari Hospital is a trusted and rapidly growing healthcare
              center committed to delivering high-quality medical services with
              modern technology, skilled professionals, and a patient-first
              approach. The hospital has become a symbol of trust and
              reliability in providing safe and effective treatment.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-7 mb-4">
              Founded by <b>Dr. Raju Kumar</b>, a highly experienced Critical
              Care Specialist, the hospital is driven by a mission to save lives
              and provide advanced medical care with compassion. His expertise
              in handling critical cases has strengthened the hospital’s
              reputation in the region.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-7 mb-4">
              Over the years, Ghoswari Hospital has evolved with advanced
              infrastructure, modern equipment, and a dedicated medical team,
              offering services like emergency care, ICU support, diagnostics,
              and general medicine.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-7">
              The hospital’s goal is to make healthcare accessible, affordable,
              and efficient for everyone. With its digital presence, it is now
              easier for patients to connect and receive quality care.
            </p>
          </div>
        </div>

        {/* Extra Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl text-center border border-white/20">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-sm">
              Affordable and quality healthcare for all.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl text-center border border-white/20">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm">To become a leading trusted hospital.</p>
          </div>

          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl text-center border border-white/20">
            <h3 className="text-xl font-semibold mb-2">24/7 Care</h3>
            <p className="text-sm">Emergency support anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
