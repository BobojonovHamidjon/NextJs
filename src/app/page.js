import React from "react";
import Image from "next/image";
import CategoryCard from "@/Components/CategoryCard";

const blogs = [
  {
    id: 1,
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/blog1.png",
  },
  {
    id: 2,
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/blog2.png",
  },
  {
    id: 3,
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "A UX Case Study Creating a Studious Environment for Students",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/blog3.png",
  },
];

const categories = [
  { id: 1, title: "Business", description: "Lorem ipsum dolor sit amet.", bgColor: "bg-white", icon: "/icons/business.svg" },
  { id: 2, title: "Startup", description: "Lorem ipsum dolor sit amet.", bgColor: "bg-white", icon: "/icons/startup.svg" },
  { id: 3, title: "Economy", description: "Lorem ipsum dolor sit amet.", bgColor: "bg-white", icon: "/icons/economy.svg" },
  { id: 4, title: "Technology", description: "Lorem ipsum dolor sit amet.", bgColor: "bg-white", icon: "/icons/technology.svg" },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="relative bg-[#0E1629] text-white py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero-image.png')" }}>
        
        <div className="absolute inset-0 bg-black/50"></div>

      
        <div className="relative container mx-auto flex flex-col md:flex-row items-center px-6 py-16">
       
          <div className="md:w-1/2 text-center md:text-left space-y-6 transform scale-x-100">
            <p className="uppercase text-sm tracking-widest text-gray-400">
              Posted on <span className="text-yellow-400">Startup</span>
            </p>
            <h1 className="text-4xl font-bold leading-relaxed max-w-xl">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="text-gray-300 max-w-xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>
            <p className="text-gray-400">
              By <span className="text-yellow-400">James West</span> | May 23, 2022
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg">
              Read More &gt;
            </button>
          </div>

         

        </div>
      </section>
      <section>
      <div className="container mx-auto p-8">
 
      <h2 className="text-3xl font-bold mb-6">Popular blogs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg p-4">
            <Image src={blog.image} width={300} height={200} className="rounded-lg" alt="blog" />
            <p className="text-gray-500 text-sm mt-2">
              By <span className="text-blue-600">{blog.author}</span> | {blog.date}
            </p>
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <p className="text-gray-600 mt-1">{blog.description}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center">Choose A Category</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} icon={cat.icon} title={cat.title} description={cat.description} bgColor={cat.bgColor} />
        ))}
      </div>
    </div>
    </div>
      </section>
    </div>
  );
}
