import { useState, useEffect } from "react";

function Bigcarousal() {
    const images = [
        "/images/Mybanner.png",
        "/images/Banner1.jpg",
        "/images/Banner3.webp",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    // ✅ Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="w-full max-w-7xl mx-auto relative">

            <div className="overflow-hidden rounded-2xl">
                <img
                    src={images[currentIndex]}
                    alt="carousel"
                    className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px] object-cover"
                />
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full"
            >
                ❮
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full"
            >
                ❯
            </button>

            <div className="flex justify-center gap-2 mt-3">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 md:h-3 md:w-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-black" : "bg-gray-400"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Bigcarousal;