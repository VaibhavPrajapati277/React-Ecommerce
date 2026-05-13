import { useEffect, useState, useMemo } from "react";
import ProductCard from "./ProductCard";

function Productcart({ title, data = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [chunkSize, setChunkSize] = useState(6);

    // ✅ Responsive chunk size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setChunkSize(2);
            else if (window.innerWidth < 768) setChunkSize(3);
            else if (window.innerWidth < 1024) setChunkSize(4);
            else setChunkSize(6);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ✅ Create chunks
    const chunks = useMemo(() => {
        const result = [];
        for (let i = 0; i < data.length; i += chunkSize) {
            result.push(data.slice(i, i + chunkSize));
        }
        return result;
    }, [data, chunkSize]);

    const totalSlides = chunks.length;

    // ✅ Navigation
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === totalSlides - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? totalSlides - 1 : prev - 1
        );
    };

    // ✅ Auto slide
    // useEffect(() => {
    //     if (totalSlides <= 1) return;

    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) =>
    //             prev === totalSlides - 1 ? 0 : prev + 1
    //         );
    //     }, 7000);

    //     return () => clearInterval(interval);
    // }, [totalSlides]);

    // ✅ Reset index if needed
    useEffect(() => {
        if (currentIndex >= totalSlides) {
            setCurrentIndex(0);
        }
    }, [totalSlides, currentIndex]);

    return (
        <div className="w-full py-6">
            {/* Title */}
            <h2 className="text-center py-4 font-bold text-xl">
                {title}
            </h2>

            {/* Carousel */}
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden">

                {/* LEFT BUTTON */}
                <button
                    onClick={prevSlide}
                    className="
                        absolute left-2 top-1/2 -translate-y-1/2 
                        bg-black/70 hover:bg-black 
                        text-white p-3 md:p-4 
                        rounded-full z-20 shadow-lg
                        transition
                    "
                >
                    ❮
                </button>

                {/* RIGHT BUTTON */}
                <button
                    onClick={nextSlide}
                    className="
                        absolute right-2 top-1/2 -translate-y-1/2 
                        bg-black/70 hover:bg-black 
                        text-white p-3 md:p-4 
                        rounded-full z-20 shadow-lg
                        transition
                    "
                >
                    ❯
                </button>

                {/* Slides */}
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {chunks.map((group, i) => (
                        <div key={i} className="min-w-full w-full">
                            <div
                                className="
                                    grid 
                                    grid-cols-2 
                                    sm:grid-cols-3 
                                    md:grid-cols-4 
                                    lg:grid-cols-6 
                                    gap-4 
                                    px-4 sm:px-6
                                "
                            >
                                {group.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        data={product}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Productcart;