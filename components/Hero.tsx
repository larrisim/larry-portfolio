"use client";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center">
      {/* Responsive full-width container with intrinsic height */}
      
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
         <Image
          src="/images/profile.png"
          alt="Larry Chang"
          fill
          sizes="100vw"
          style={{ objectFit: "contain", objectPosition: "center" }}
          priority 
        /> 

        {/* <img
          src="/images/profile.png"
          alt="Larry Chang"
          style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          objectPosition: "center",
          display: "block"
          }}
          /> */}
      </div>
      <div aria-hidden="true" className="h-10 sm:h-16" />


    </section>
  );
}