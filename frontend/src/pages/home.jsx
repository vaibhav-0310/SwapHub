import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import CategoryCarousel from '../components/categorycarousel';
import Buy from './Buy';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Main Content */}
      <main className="flex-grow bg-gray-100">
        {/* ✅ Category Carousel */}
        <section className="py-6">
          <CategoryCarousel />
        </section>

        {/* ✅ Four Rectangular Boxes with Links */}
        <section className="flex justify-center gap-6 py-6">
          {[
            { title: "Buy", image: "https://picsum.photos/seed/buy/300/200", path: "/buy" },
            { title: "Sell", image: "https://picsum.photos/seed/sell/300/200", path: "/sell" },
            { title: "Donate", image: "https://picsum.photos/seed/donate/300/200", path: "/donate" },
            { title: "Rent", image: "https://picsum.photos/seed/rent/300/200", path: "/rent" },
          ].map((item, index) => (
            <Link to={item.path} key={index} className="w-60 h-40 bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
              <img src={item.image} alt={item.title} className="w-full h-24 object-cover" />
              <div className="p-2 text-center font-semibold text-lg">{item.title}</div>
            </Link>
          ))}
        </section>

        {/* ✅ Product Grid from Buy Page */}
        <section className="py-6 flex-grow">
          <div className="container mx-auto">
            <Buy />
          </div>
        </section>
      </main>

      {/* ✅ Footer (Automatically pushed to bottom) */}
      <Footer />
    </div>
  );
};

export default Home;
