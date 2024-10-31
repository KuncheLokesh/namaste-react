import React from 'react';
// import './About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* Introduction Section */}
            <section className="intro-section">
                <h1>About Our Food Delivery Service</h1>
                <p>
                    Welcome to LockDelivary, your go-to platform for fast, reliable, and delightful food delivery. 
                    From local favorites to international cuisines, our mission is to bring you the food you love 
                    right to your doorstep. With a network of top restaurants and dedicated delivery partners, 
                    we ensure fresh, hot, and delicious meals anytime you crave them.
                </p>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose Us</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3>Wide Selection of Restaurants</h3>
                        <p>From top-rated local eateries to renowned global chains, enjoy a variety of cuisines.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Fast & Reliable Delivery</h3>
                        <p>Track your order live and enjoy quick, on-time delivery.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Exclusive Deals</h3>
                        <p>Save more with special discounts, deals, and loyalty rewards on every order.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2>Our Dedicated Team</h2>
                <p>Our team of passionate food lovers and tech experts works around the clock to create a seamless experience for you. Meet some of the faces behind LockDelivary.</p>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="https://cdn.theorg.com/7151b65b-c85e-41a4-ade5-bcbc53cb7101_thumb.jpg" alt="Team Member 1" />
                        <h4>Vikram</h4>
                        <p>Co-Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://media.licdn.com/dms/image/v2/C5603AQHohzNeJwArEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1592851158236?e=1735776000&v=beta&t=a72krN4Kf9dwgl17xnvVD7lB74KzERv_Ox-xNCXhTPw" alt="Team Member 2" />
                        <h4>Naga Raju</h4>
                        <p>Chief Culinary Officer</p>
                    </div>
                    {/* <div className="team-member">
                        <img src="team-member3.jpg" alt="Team Member 3" />
                        <h4>Raja Babu</h4>
                        <p>Head of Logistics</p>
                    </div> */}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>Customer Testimonials</h2>
                <div className="testimonial">
                    <p>
                        "I love using LockDelivary ! They have amazing variety, and the deliveries are always fast. Highly recommend!"
                    </p>
                    <h5>- Priya Verma, Frequent User</h5>
                </div>
                <div className="testimonial">
                    <p>
                        "Fantastic service and unbeatable prices. I especially love the exclusive deals!"
                    </p>
                    <h5>- Amit Shah, Food Enthusiast</h5>
                </div>
            </section>
        </div>
    );
};

export default About;
