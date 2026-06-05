import React from 'react'

const PateintGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1580281657527-47b3f5d7d9f8",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629",
    },
  ];
  return (
    <section
      className="min-h-screen w-full bg-[#030712] py-20 px-4 sm:px-6 lg:px-10 overflow-hidden"
     
    >
      {/* HEADING */}
      <div className="text-center mb-16 animate-pulse mt-20">
        <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-semibold">
          Our Gallery
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4">
          Patient <span className="text-cyan-400">Gallery</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8 text-sm sm:text-base">
          Explore our hospital environment, patient care, treatment facilities,
          and healthcare services.
        </p>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded border border-white/10 bg-white/5 backdrop-blur-lg hover:-translate-y-3 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-[fadeIn_1s_ease]"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt="gallery"
                loading="lazy"
                className="w-full h-[250px] sm:h-[280px] lg:h-[300px] object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-white text-lg font-bold">Hospital Care</h2>

              <p className="text-gray-300 text-sm mt-1">
                Advanced treatment and patient support.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PateintGallery
