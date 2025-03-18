"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CategoryCard({ icon, title, description, bgColor }) {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsActive(true);
    router.push(`/category`);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-6 rounded-lg shadow-md cursor-pointer flex flex-col items-center text-center transition-all ${
        isActive ? "bg-gray-200" : bgColor
      }`}
    >
      <div className="mb-4">
        <Image src={icon} width={48} height={46} alt={`${title} icon`} />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
