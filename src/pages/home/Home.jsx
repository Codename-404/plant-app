import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/19/16/54/bloom-1840303_1280.jpg"
        alt=""
        className="absolute w-full h-full object-cover"
      />

      <div className="w-full h-full relative backdrop-blur-sm backdrop-brightness-50 grid grid-cols-2 text-neutral-300 justify-center">
        <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
          <div className="w-full h-fit flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold drop-shadow-md">Welcome to,</h1>
            <h1 className="text-6xl text-white font-bold drop-shadow-md">
              Green lab
            </h1>
          </div>

          <div className="w-full h-fit flex flex-col justify-center items-center">
            <div className="w-20 h-1 bg-emerald-500 rounded-md"></div>

            <p className="">Where green grows everyday</p>
          </div>

          <Link
            to={"/browse"}
            className="w-fit h-fit bg-emerald-400 px-4 py-2 
          rounded-md shadow-sm shadow-neutral-700 hover:shadow-yellow-400 
          transition-all duration-300 text-black font-bold text-xl"
          >
            Get started
          </Link>
        </div>

        <div className="w-full h-full flex flex-col gap-2 justify-center items-center text-center px-10">
          <p className="about-us-description font-bold text-xl">
            Welcome to Green lab, where green grows everyday!
          </p>
          <p className="about-us-content">
            At Green lab, we are passionate about bringing nature closer to you.
            Our mission is to provide a wide range of high-quality plants that
            not only enhance the beauty of your surroundings but also contribute
            to a healthier and more sustainable lifestyle. From air-purifying
            plants to aromatic fragrant ones, we have something for every plant
            enthusiast.
          </p>
          {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
          <p className="about-us-content">
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you're a seasoned
            gardener or just starting your green journey, we're here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home
            or office.
          </p>
          {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

          <p className="about-us-content">
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}
