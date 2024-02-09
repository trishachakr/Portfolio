"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
  <section>
    <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
    <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c78cc7] to-[#ff008c]">
         Hello, I'm {""} 
       </span>
       <br></br>
       <TypeAnimation
      sequence={[
        'Trisha',
        1500, 
        'an Artist',
        1000,
        'a Teacher',
        1000,
        'a Club Leader',
        1000
      ]}
      wrapper="span"
      speed={40}
      
      repeat={Infinity}
    />
        </h1>

        <div>
    <h2 className="text-[#eeb3ed] px-1 py-1 w-full sm:w-fit mb-4 bg-transparent bg-gradient-to-r from-[#c78cc7] to-[#ff008c] mt-3 rounded-2xl text-lg sm:text-xl lg:text-2xl font-bold ">
      <span className="block bg-[#040104] rounded-2xl px-5 py-5 ">  COMPUTATION ARTS PORTFOLIO  </span>  </h2>
</div>
<div>
    <p className="text-[#857683] text-base sm:text-lg mb-6 lg:text-xl">
        Personal description paragraph bleh bleh bleh big paragraph description i reallt want rhis spot super duper please
        </p>
        </div>



        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181218] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image
            src="/images/png.png"
            alt="memoji avatar"
            className="abosulte transform translate-x-1 translate-y-5 top-2 left-1/2"
            width={800}
            height={800}
            />
            </div>
            </div>
        </div>
    </section>
  )

    }

export default HeroSection