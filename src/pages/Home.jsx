import React from "react";
import image from '../assets/webimage.jpg'


const Home = () => {
  return (
    <div className="flex p-3 mt-28 max-w-3xl mx-auto flex-col md:flex-row md:items-center ">
      <div className=" flex-1">
        <div className="font-bold dark:text-white text-4xl ">
          I'm{" "}
          <span className="px-2 py-1 mr-1 text-blue-500 rounded-lg ">
            Pranava
          </span>
          <span> Muthu </span>

          <p class="text-sm font-semibold text-black bg-clip-text ">
            <br />
            Certified MERN Stack Developer with a strong foundation <br /> in
            full-stack web development.
          </p>

        </div>
      </div>
       
       <div className="flex-1 " >
       <img src={image} alt="" srcset=""  /> 
       </div>

    </div>
  );
};

export default Home;
