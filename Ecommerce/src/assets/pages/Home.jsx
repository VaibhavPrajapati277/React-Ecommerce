import { useState, useRef } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productcart from '../components/Productcart';
import Bottom from '../components/Bottom';
import Bigcarousal from '../components/Bigcarousal';
import CategoriesSwiper from '../components/CategoriesSwiper';

import {
    bagdata,
    headphonesdata,
    jwellerydata,
    kidsdata,
    mendata,
    shoesdata,
    sportsweardata,
    sunglassesdata,
    watchdata,
    womendata
} from '../../Data/Data';

function Home() {

    const [categories, setcategories] = useState([
        {
            id: 201,
            categoryName: "Men",
            image:
                "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500&auto=format&fit=crop",
        },
        {
            id: 202,
            categoryName: "Women",
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop",
        },
        {
            id: 203,
            categoryName: "Kids",
            image:
                "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=500&auto=format&fit=crop",
        },
        {
            id: 204,
            categoryName: "Shoes",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",
        },
        {
            id: 205,
            categoryName: "Watches",
            image:
                "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop",
        },
        {
            id: 206,
            categoryName: "Sunglasses",
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop",
        },
        {
            id: 207,
            categoryName: "Sportswear",
            image:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop",
        },
        {
            id: 208,
            categoryName: "Headphones",
            image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
        },
        {
            id: 209,
            categoryName: "Jewellery",
            image:
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop",
        },
        {
            id: 210,
            categoryName: "Bags",
            image:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop",
        },
    ]);

    // refs
    const menRef = useRef(null);
    const womenRef = useRef(null);
    const kidsRef = useRef(null);
    const shoesRef = useRef(null);
    const watchesRef = useRef(null);
    const sportswearRef = useRef(null);
    const sunglassesRef = useRef(null);
    const headphonesRef = useRef(null);
    const jewelleryRef = useRef(null);
    const bagsRef = useRef(null);

    // scroll function
    const scrollToSection = (ref) => {

        const isMobile = window.innerWidth < 768;

        const yOffset = isMobile ? -80 : -120;


        const element = ref.current;

        const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    // mapping
    const categoryRefs = {
        Men: menRef,
        Women: womenRef,
        Kids: kidsRef,
        Shoes: shoesRef,
        Watches: watchesRef,
        Sunglasses: sunglassesRef,
        Sportswear: sportswearRef,
        Headphones: headphonesRef,
        Jewellery: jewelleryRef,
        Bags: bagsRef,
    };

    return (
        <>
            <Header />

            <Bigcarousal />

            <CategoriesSwiper
                title="Shop by Category"
                categories={categories}
                setfunction={setcategories}
                scrollToSection={scrollToSection}
                categoryRefs={categoryRefs}
            />

            <div ref={menRef}>
                <Productcart title="Men" data={mendata} className="scroll-mt-28" />
            </div>

            <div ref={womenRef}>
                <Productcart title="Women" data={womendata} className="scroll-mt-28" />
            </div>

            <div ref={kidsRef}>
                <Productcart title="Kids" data={kidsdata} className="scroll-mt-28" />
            </div>

            <div ref={shoesRef}>
                <Productcart title="Shoes" data={shoesdata} className="scroll-mt-28" />
            </div>

            <div ref={watchesRef}>
                <Productcart title="Watches" data={watchdata} className="scroll-mt-28" />
            </div>

            <div ref={sunglassesRef}>
                <Productcart title="Sunglasses" data={sunglassesdata} />
            </div>

            <div ref={sportswearRef}>
                <Productcart title="Sportswear" data={sportsweardata} />
            </div>

            <div ref={headphonesRef}>
                <Productcart title="Headphones" data={headphonesdata} />
            </div>

            <div ref={jewelleryRef}>
                <Productcart title="Jewellery" data={jwellerydata} />
            </div>

            <div ref={bagsRef}>
                <Productcart title="Bags" data={bagdata} />
            </div>

            <Footer />
            <Bottom />
        </>
    )
}

export default Home