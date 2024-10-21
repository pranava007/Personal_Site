import React from 'react'
import hrm from "../assets/H.png"
import cs from "../assets/C.png"
import boots from "../assets/B.png"
import js from "../assets/J.png"
import rec from "../assets/R.png"
import no from "../assets/N.png"
import my from "../assets/MY.png"
import m from "../assets/M.png"
import full from "../assets/F.png"


import first from "../assets/1.jpg"
import secound from "../assets/2.jpg"
import thead from "../assets/3.jpg"
import four from "../assets/4.jpg"
import five from "../assets/5.jpg"
import six from "../assets/6.jpg"
import seven from "../assets/7.jpg"
import aight from "../assets/8.jpg"




const Gallery = () => {
  return (
    <>
    <div className='m-10'>
     <h1 className='text-2xl font-serif ' >Internship – Guvi, Mentor – Naan Mudhalvan Program</h1>
     

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={first} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={secound} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={thead} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={aight} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={five} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={seven} alt=""/>
    </div>
    
</div>

<h1 className='text-2xl font-serif mt-5 ' >MERN Stack Certified</h1>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={full} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={cs} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={boots} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={js} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={rec} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={my} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={m} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={hrm} alt=""/>
    </div>
 
    
</div>
    </div>
    
    
    </>
  )
}

export default Gallery