import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3e1631] to-[#011631] py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto bg-[#f8bbc3]/80 rounded-2xl shadow-2xl shadow-black p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-[#3e1631]">About EaseMart</h1>

        <p className="text-[#011631] text-lg">
          Welcome to <span className="font-semibold text-[#da223b]">EaseMart</span>, your one-stop destination for quality products, seamless shopping, and a delightful online experience.<br />
          At EaseMart, we believe shopping should be simple, fast, and enjoyable. That’s why we bring together a wide range of products including electronics, fashion, and everyday essentials — all in one place.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#da223b]">Our Mission</h2>
          <p className="text-[#011631] text-base">
            At EaseMart, Our mission is to make online shopping easy, affordable, and accessible for everyone. We focus on delivering high-quality products while ensuring a smooth and secure shopping journey for our customers. — all at competitive prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#da223b]">Why Choose EaseMart?</h2>
          <p className="text-[#011631] text-base">EaseMart is built with a customer-first mindset. We prioritize:</p>
          <ul className="list-disc pl-6 text-[#011631] space-y-2 ml-4">
            <li>High-quality products at affordable prices</li>
            <li>Fast, reliable, and secure delivery</li>
            <li>Seamless and user-friendly shopping experience</li>
            <li>Trusted platform with genuine customer reviews</li>
            <li>Dedicated support for every customer need</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#da223b]">Our Vision</h2>
          <p className="text-[#011631] text-base">
            We envision a future where EaseMart becomes a trusted global e-commerce platform, delivering high-quality products, exceptional customer service, and a seamless, enjoyable shopping experience. We aim to continuously innovate, expand our offerings, and build lasting relationships with our customers by ensuring reliability, convenience, and satisfaction in every interaction.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-[#da223b] mb-2">Join the EaseMart Family</h3>
          <p className="text-[#011631] mb-4">
            Whether you’re shopping for the latest gadgets, stylish outfits, or everyday essentials — EaseMart has you covered.
          </p>
         <Link to={'/products'}><button className="bg-[#da223b] text-[#011631] font-semibold cursor-pointer px-6 py-2 rounded-xl hover:scale-105 transition duration-300">
            Start Shopping
          </button></Link> 
        </div>
      </div>
    </div>
  );
};

export default About;
