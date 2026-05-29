import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productcart from '../components/Productcart';
import Bottom from '../components/Bottom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Resetpass from '../components/Resetpass';
// import CarouselComponent from '../components/CarouselComponent';
import Bigcarousal from '../components/Bigcarousal';
import CategoriesList from '../components/CategoriesList';
import CategoriesSwiper from '../components/CategoriesSwiper';
import {  bagdata, headphonesdata, jwellerydata, kidsdata, mendata, shoesdata, sportsweardata, sunglassesdata, watchdata, womendata } from '../../Data/Data';
import ContactUs from './ContactUs';
// import './App.css'


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
    ]
    );


    return (
        <>

            <Header />
            {/* <CarouselComponent /> */}

            <Bigcarousal />
            {/* <CategoriesList  title="Categories"  categoriesData={categories} setfunction={setcategories} /> */}
            <CategoriesSwiper title="Shop by Category" categories={categories} setfunction={setcategories} />
            <Productcart title="Men" data={mendata} />
            <Productcart title="Women" data={womendata} />
            <Productcart title="Kids" data={kidsdata} />
            <Productcart title="Shoes" data={shoesdata} />
            <Productcart title="Watches" data={watchdata} />
            <Productcart title="Sunglasses" data={sunglassesdata} />
            <Productcart title="Sports" data={sportsweardata} />
            <Productcart title="Headphones" data={headphonesdata} />
            <Productcart title="Jwellery" data={jwellerydata} />
            <Productcart title="Bags" data={bagdata} />
            {/* <ContactUs /> */}
            {/* <Productcart title="kids" data={kidsdata} setfunction={setKidsData} /> */}
            <Footer />



            <Bottom />


        </>
    )
}

export default Home