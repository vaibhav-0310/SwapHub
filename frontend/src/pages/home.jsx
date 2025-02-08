import React from 'react';
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
