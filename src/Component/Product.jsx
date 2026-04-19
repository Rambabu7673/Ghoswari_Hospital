import React, { useState, useEffect } from "react";

const Product = ({ latestProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(latestProduct.length / cardsPerSlide);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // ✅ Current 2 cards
  const startIndex = currentIndex * cardsPerSlide;
  const visibleCards = latestProduct.slice(
    startIndex,
    startIndex + cardsPerSlide,
  );

  return (
    <>
      <div className=" lg:h-[50rem] bg-zinc-800 text-white grand_Father">
        <div className="text-center p-5 lg:p-10">
          <h1 className="text-[50px] font-bold tracking-wide">
            Latest Medical Services
          </h1>
          <p className="text-lg lg:p-10 tracking-wide">
            Lorem ipsum dolor sit, amet{" "}
            <span className="font-bold">consectetur adipisicing </span>
            elit.
          </p>
        </div>

        {/* ✅ SAME UI */}
        <div className="w-full min-h-screen flex justify-start flex-wrap p-5 lg:p-10 gap-1 parent">
          {visibleCards.map((elam, idx) => (
            <div key={idx} className="lg:w-[48%] w-full lg:flex rounded beta">
              <div className="w-full lg:h-[60%] bg-black flex flex-col gap-5 justify-center pota p-5 lg:p-10">
                <h1 className="text-3xl font-semibold tracking-wide text-green-600">
                  {elam.title}
                </h1>

                <h2 className="text-2xl font-semibold tracking-wide ">
                  {elam.product}
                </h2>

                <p className="text-lg font-semibold">{elam.description}</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ipsum vero distinctio in commodi ab minima hic velit ullam vitae,</p>
              </div>

              <div className="w-full lg:h-[60%]">
                <img src={elam.image} alt="" className="lg:h-[100%] w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ 3 DOTS */}
        <div className="flex justify-center gap-3 pb-5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
