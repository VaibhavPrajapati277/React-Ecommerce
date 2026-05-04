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
// import './App.css'


function Home() {
    const [mendata, setdata] = useState(
        [
            {
                "id": 1,
                "brand": "H & M",
                "name": "Men Blue Slim Shirt",
                "image": "https://images.unsplash.com/photo-1740711152088-88a009e877bb",
                "price": 499,
                "originalPrice": 699,
                "discount": "20%"
            },
            {
                "id": 2,
                "brand": "Zara",
                "name": "Men Black Casual Shirt",
                "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
                "price": 899,
                "originalPrice": 1299,
                "discount": "30%"
            },
            {
                "id": 3,
                "brand": "Levi's",
                "name": "Men Denim Shirt",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
                "price": 1299,
                "originalPrice": 1799,
                "discount": "28%"
            },
            {
                "id": 4,
                "brand": "Puma",
                "name": "Men Sports Shirt",
                "image": "https://images.unsplash.com/photo-1578932750294-f5075e85f44a",
                "price": 799,
                "originalPrice": 999,
                "discount": "20%"
            },
            {
                "id": 5,
                "brand": "Nike",
                "name": "Men Running Shirt",
                "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
                "price": 999,
                "originalPrice": 1499,
                "discount": "33%"
            },
            {
                "id": 6,
                "brand": "Adidas",
                "name": "Men Performance Tee",
                "image": "https://images.unsplash.com/photo-1600180758890-6f7a6d27f7c8",
                "price": 899,
                "originalPrice": 1199,
                "discount": "25%"
            },
            {
                "id": 7,
                "brand": "Roadster",
                "name": "Men Checked Shirt",
                "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
                "price": 599,
                "originalPrice": 999,
                "discount": "40%"
            },
            {
                "id": 8,
                "brand": "Allen Solly",
                "name": "Men Formal Shirt",
                "image": "https://images.unsplash.com/photo-1562158070-57c73a76a4c4",
                "price": 1099,
                "originalPrice": 1599,
                "discount": "31%"
            },
            {
                "id": 9,
                "brand": "U.S. Polo Assn.",
                "name": "Men Polo Shirt",
                "image": "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
                "price": 1199,
                "originalPrice": 1699,
                "discount": "29%"
            },
            {
                "id": 10,
                "brand": "Jack & Jones",
                "name": "Men Printed Shirt",
                "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
                "price": 899,
                "originalPrice": 1299,
                "discount": "30%"
            }
        ]
    );

    const [categories, setcategories] = useState(
        [
            {
                "id": 1,
                "Categoriesname": "Men",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 2,
                "Categoriesname": "Women",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 3,
                "Categoriesname": "Kids",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 4,
                "Categoriesname": "Shoes",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 5,
                "Categoriesname": "Watches",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 6,
                "Categoriesname": "Sunglasses",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 7,
                "Categoriesname": "Sportswear",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 8,
                "Categoriesname": "Accessories",
                "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
            },
            {
                "id": 9,
                "Categoriesname": "Jwellery",
                "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
            },
            {
                "id": 10,
                "Categoriesname": "Bags",
                "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
            },
        ]
    );


    return (
        <>
            <Header />
            {/* <CarouselComponent /> */}

            <Bigcarousal />
            {/* <CategoriesList  title="Categories"  categoriesData={categories} setfunction={setcategories} /> */}
            <CategoriesSwiper  title="Shop by Category"  categories={categories} setfunction={setcategories} />
            <Productcart title="Men" data={mendata} setfunction={setdata} /> 
            {/* <Productcart title="women" data={mendata} setfunction={setdata} /> */}
            {/* <Footer /> */}


            {/* <Login /> */}
            <Bottom />
            {/* <Signup /> */}
            {/* <Resetpass /> */}
            {/* <Footer />   */}
            {/* <Check /> */}

        </>
    )
}

export default Home