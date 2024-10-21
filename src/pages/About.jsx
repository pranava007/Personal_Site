import React from "react";
import person from "../assets/about.jpg";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <>
 <div className="min-h-screen mt-20">
  <div className="flex flex-col md:flex-row max-w-4xl mx-auto p-6">
    <div className="flex-1 flex  md:hidden justify-center lg:hidden md:justify-start items-center">
      <img 
        src={person} 
        alt="Profile" 
        className="rounded-full lg:hidden md:hidden lg:rounded-none w-40 h-40 md:w-48 md:h-48 lg:w-80 lg:h-80 shadow-lg" 
      />
    </div>

    <div className="flex-1 p-6 md:p-10 flex flex-col justify-center font-serif ">
      <Button className="bg-blue-500   text-white lg:w-32 rounded-md mb-4">
        About Us
      </Button>
       
       <h1 className=" " >DO Some Awesome Stuff With Me. </h1>
      <p className="  mt-4 text-lg leading-relaxed">
        Hi, I’m Pranavamuthu from Karaikudi, a certified MERN stack developer from Guvi. I hold a Master's degree in Computer Applications (MCA).
      </p>
      <p className="mt-2 text-lg leading-relaxed">
        My coding journey began in 2022, guided by Kumaration, an IT professional who provided me with valuable mentorship, project opportunities, and a stipend.
      </p>
      <p className="mt-2 text-lg leading-relaxed">
        During a 3-month internship under the Naan Mudhalvan government program in collaboration with Guvi, I served as a mentor, teaching college students Git, GitHub, and full-stack web development.
      </p>
      <p className="mt-2 text-lg leading-relaxed">
        I managed 50 students at Mahindra Engineering College and Anna University.
      </p>
      <p className="mt-2 text-lg leading-relaxed">
        All my project work is well-maintained in GitHub repositories, and I continue to expand my skills in development.
      </p>
      <p className="mt-2 text-lg leading-relaxed">
        I'm currently learning web hacking to enhance my skills.
      </p>
    </div>
  </div>
</div>



    </>
  );
};

export default About;
