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
import { kidsdata, mendata, womendata } from '../../Data/Data';
import ContactUs from './ContactUs';
// import './App.css'


function Home() {
    //     const [mendata, setdata] = useState(
    //         [
    //             {
    //                 "id": 1,
    //                 "brand": "H & M",
    //                 "name": "Men Blue Slim Shirt",
    //                 "image": "https://images.unsplash.com/photo-1740711152088-88a009e877bb",
    //                 "price": 499,
    //                 "originalPrice": 699,
    //                 "discount": "20%"
    //             },
    //             {
    //                 "id": 2,
    //                 "brand": "Zara",
    //                 "name": "Men Black Casual Shirt",
    //                 "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    //                 "price": 899,
    //                 "originalPrice": 1299,
    //                 "discount": "30%"
    //             },
    //             {
    //                 "id": 3,
    //                 "brand": "Levi's",
    //                 "name": "Men Denim Shirt",
    //                 "image": "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    //                 "price": 1299,
    //                 "originalPrice": 1799,
    //                 "discount": "28%"
    //             },
    //             {
    //                 "id": 4,
    //                 "brand": "Puma",
    //                 "name": "Men Sports Shirt",
    //                 "image": "https://images.unsplash.com/photo-1578932750294-f5075e85f44a",
    //                 "price": 799,
    //                 "originalPrice": 999,
    //                 "discount": "20%"
    //             },
    //             {
    //                 "id": 5,
    //                 "brand": "Nike",
    //                 "name": "Men Running Shirt",
    //                 "image": "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
    //                 "price": 999,
    //                 "originalPrice": 1499,
    //                 "discount": "33%"
    //             },
    //             {
    //                 "id": 6,
    //                 "brand": "Adidas",
    //                 "name": "Men Performance Tee",
    //                 "image": "https://images.unsplash.com/photo-1600180758890-6f7a6d27f7c8",
    //                 "price": 899,
    //                 "originalPrice": 1199,
    //                 "discount": "25%"
    //             },
    //             {
    //                 "id": 7,
    //                 "brand": "Roadster",
    //                 "name": "Men Checked Shirt",
    //                 "image": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
    //                 "price": 599,
    //                 "originalPrice": 999,
    //                 "discount": "40%"
    //             },
    //             {
    //                 "id": 8,
    //                 "brand": "Allen Solly",
    //                 "name": "Men Formal Shirt",
    //                 "image": "https://images.unsplash.com/photo-1562158070-57c73a76a4c4",
    //                 "price": 1099,
    //                 "originalPrice": 1599,
    //                 "discount": "31%"
    //             },
    //             {
    //                 "id": 9,
    //                 "brand": "U.S. Polo Assn.",
    //                 "name": "Men Polo Shirt",
    //                 "image": "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
    //                 "price": 1199,
    //                 "originalPrice": 1699,
    //                 "discount": "29%"
    //             },
    //             {
    //                 "id": 10,
    //                 "brand": "Jack & Jones",
    //                 "name": "Men Printed Shirt",
    //                 "image": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    //                 "price": 899,
    //                 "originalPrice": 1299,
    //                 "discount": "30%"
    //             }
    //         ]
    //     );
    //     const [womendata, setWomenData] = useState(
    //         [
    //             {
    //                 "id": 11,
    //                 "brand": "Zara",
    //                 "name": "Women Floral Dress",
    //                 "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    //                 "price": 1299,
    //                 "originalPrice": 1799,
    //                 "discount": "28%"
    //             },
    //             {
    //                 "id": 22,
    //                 "brand": "H & M",
    //                 "name": "Women Casual Top",
    //                 "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    //                 "price": 799,
    //                 "originalPrice": 1199,
    //                 "discount": "33%"
    //             },
    //             {
    //                 "id": 33,
    //                 "brand": "Forever 21",
    //                 "name": "Women Stylish Crop Top",
    //                 "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    //                 "price": 699,
    //                 "originalPrice": 999,
    //                 "discount": "30%"
    //             },
    //             {
    //                 "id": 44,
    //                 "brand": "Levi's",
    //                 "name": "Women Blue Denim Jacket",
    //                 "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    //                 "price": 1899,
    //                 "originalPrice": 2499,
    //                 "discount": "24%"
    //             },
    //             {
    //                 "id": 55,
    //                 "brand": "Nike",
    //                 "name": "Women Sports T-Shirt",
    //                 "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    //                 "price": 999,
    //                 "originalPrice": 1499,
    //                 "discount": "33%"
    //             },
    //             {
    //                 "id": 66,
    //                 "brand": "Puma",
    //                 "name": "Women Gym Wear Set",
    //                 "image": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
    //                 "price": 1499,
    //                 "originalPrice": 2199,
    //                 "discount": "32%"
    //             },
    //             {
    //                 "id": 77,
    //                 "brand": "Biba",
    //                 "name": "Women Ethnic Kurti",
    //                 "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    //                 "price": 899,
    //                 "originalPrice": 1399,
    //                 "discount": "36%"
    //             },
    //             {
    //                 "id": 88,
    //                 "brand": "ONLY",
    //                 "name": "Women Black Skinny Jeans",
    //                 "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    //                 "price": 1199,
    //                 "originalPrice": 1699,
    //                 "discount": "29%"
    //             },
    //             {
    //                 "id": 99,
    //                 "brand": "Adidas",
    //                 "name": "Women Running Jacket",
    //                 "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    //                 "price": 1599,
    //                 "originalPrice": 2299,
    //                 "discount": "30%"
    //             },
    //             {
    //                 "id": 100,
    //                 "brand": "Allen Solly",
    //                 "name": "Women Formal Shirt",
    //                 "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    //                 "price": 999,
    //                 "originalPrice": 1499,
    //                 "discount": "33%"
    //             }
    //         ]
    //     );

    //    const [kidsdata, setKidsData] = useState(
    //     [
    //         {
    //             "id": 101,
    //             "brand": "H & M",
    //             "name": "Kids Cartoon T-Shirt",
    //             "image": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    //             "price": 499,
    //             "originalPrice": 799,
    //             "discount": "38%"
    //         },
    //         {
    //             "id": 102,
    //             "brand": "Zara Kids",
    //             "name": "Kids Casual Hoodie",
    //             "image": "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7",
    //             "price": 899,
    //             "originalPrice": 1299,
    //             "discount": "30%"
    //         },
    //         {
    //             "id": 103,
    //             "brand": "Nike",
    //             "name": "Kids Sports Wear Set",
    //             "image": "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
    //             "price": 1199,
    //             "originalPrice": 1699,
    //             "discount": "29%"
    //         },
    //         {
    //             "id": 104,
    //             "brand": "Puma",
    //             "name": "Kids Running T-Shirt",
    //             "image": "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6",
    //             "price": 699,
    //             "originalPrice": 999,
    //             "discount": "30%"
    //         },
    //         {
    //             "id": 105,
    //             "brand": "Mothercare",
    //             "name": "Baby Winter Jacket",
    //             "image": "https://images.unsplash.com/photo-1519238359922-989348752efb",
    //             "price": 1499,
    //             "originalPrice": 1999,
    //             "discount": "25%"
    //         },
    //         {
    //             "id": 106,
    //             "brand": "Max Kids",
    //             "name": "Kids Printed Shirt",
    //             "image": "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    //             "price": 599,
    //             "originalPrice": 899,
    //             "discount": "33%"
    //         },
    //         {
    //             "id": 107,
    //             "brand": "Adidas",
    //             "name": "Kids Training Shorts",
    //             "image": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    //             "price": 799,
    //             "originalPrice": 1199,
    //             "discount": "33%"
    //         },
    //         {
    //             "id": 108,
    //             "brand": "Allen Solly Junior",
    //             "name": "Kids Formal Shirt",
    //             "image": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2",
    //             "price": 999,
    //             "originalPrice": 1499,
    //             "discount": "33%"
    //         },
    //         {
    //             "id": 109,
    //             "brand": "Gap Kids",
    //             "name": "Kids Denim Jacket",
    //             "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    //             "price": 1299,
    //             "originalPrice": 1799,
    //             "discount": "28%"
    //         },
    //         {
    //             "id": 110,
    //             "brand": "Bachaa Party",
    //             "name": "Kids Party Wear Dress",
    //             "image": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446",
    //             "price": 1099,
    //             "originalPrice": 1599,
    //             "discount": "31%"
    //         }
    //     ]
    // );

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
                "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=500&auto=format&fit=crop",
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
            categoryName: "Accessories",
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
            <Productcart title="women" data={womendata} />
            <Productcart title="kids" data={kidsdata} />
            {/* <ContactUs /> */}
            {/* <Productcart title="kids" data={kidsdata} setfunction={setKidsData} /> */}
            <Footer />



            <Bottom />


        </>
    )
}

export default Home