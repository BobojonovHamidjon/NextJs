import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 pb-6 shadow-md rounded-lg p-4 bg-white">
      <Image src={post.image} width={150} height={100} alt={post.title} className="rounded-md w-full md:w-auto" />
      <div>
        <span className="text-purple-600 text-sm font-semibold">{post.category}</span>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p className="text-gray-600">{post.description}</p>
      </div>
    </div>
  );
}
