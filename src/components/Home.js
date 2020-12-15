import React from "react";
import image from "../home-bg.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="beautiful sky and sea" className="absolute object-cover w-full h-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-black-100 font-bold cursive leading-none lg-leading-snug home-name">Hi. I'm shunta</h1>
      </section>
    </main>
  )
}