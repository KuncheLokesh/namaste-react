import React from 'react';
// import './About.css';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto p-8 bg-gray-50">
        {/* Introduction Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">About Our Food Delivery Service</h1>
          <p className="text-gray-600">
            Welcome to LockDelivary, your go-to platform for fast, reliable, and delightful food delivery. 
            From local favorites to international cuisines, our mission is to bring you the food you love 
            right to your doorstep. With a network of top restaurants and dedicated delivery partners, 
            we ensure fresh, hot, and delicious meals anytime you crave them.
          </p>
        </section>
      
        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-item bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Wide Selection of Restaurants</h3>
              <p className="text-gray-600">From top-rated local eateries to renowned global chains, enjoy a variety of cuisines.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Fast & Reliable Delivery</h3>
              <p className="text-gray-600">Track your order live and enjoy quick, on-time delivery.</p>
            </div>
            <div className="feature-item bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Exclusive Deals</h3>
              <p className="text-gray-600">Save more with special discounts, deals, and loyalty rewards on every order.</p>
            </div>
          </div>
        </section>
      
        {/* Team Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Dedicated Team</h2>
          <p className="text-gray-600 mb-4">Our team of passionate food lovers and tech experts works around the clock to create a seamless experience for you. Meet some of the faces behind LockDelivary.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="team-member text-center">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://cdn.theorg.com/7151b65b-c85e-41a4-ade5-bcbc53cb7101_thumb.jpg" alt="Team Member 1" />
              <h4 className="text-xl font-semibold text-gray-800">Vikram</h4>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
            <div className="team-member text-center">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="https://media.licdn.com/dms/image/v2/C5603AQHohzNeJwArEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1592851158236?e=1735776000&v=beta&t=a72krN4Kf9dwgl17xnvVD7lB74KzERv_Ox-xNCXhTPw" alt="Team Member 2" />
              <h4 className="text-xl font-semibold text-gray-800">Naga Raju</h4>
              <p className="text-gray-600">Chief Culinary Officer</p>
            </div>
            {/* Uncomment if you want to add another team member
            <div className="team-member text-center">
              <img className="w-32 h-32 rounded-full mx-auto mb-4" src="team-member3.jpg" alt="Team Member 3" />
              <h4 className="text-xl font-semibold text-gray-800">Raja Babu</h4>
              <p className="text-gray-600">Head of Logistics</p>
            </div>
            */}
          </div>
        </section>
      
        {/* Testimonials Section */}
        <section className="mb-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Testimonials</h2>
          <div className="testimonial mb-6">
            <p className="text-gray-600">
              "I love using LockDelivary! They have amazing variety, and the deliveries are always fast. Highly recommend!"
            </p>
            <h5 className="font-semibold text-gray-800">- Priya Verma, Frequent User</h5>
          </div>
          <div className="testimonial">
            <p className="text-gray-600">
              "Fantastic service and unbeatable prices. I especially love the exclusive deals!"
            </p>
            <h5 className="font-semibold text-gray-800">- Amit Shah, Food Enthusiast</h5>
          </div>
        </section>
      </div>
      
    );
};

export default About;
