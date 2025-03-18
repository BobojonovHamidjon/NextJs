import BlogCard from "@/Components/BlogCard";
const posts = [
  {
    id: 1,
    category: "Business",
    title: "Top 6 free website mockup tools 2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
  {
    id: 2,
    category: "Business",
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
  {
    id: 3,
    category: "Business",
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
  {
    id: 4,
    category: "Business",
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
  {
    id: 5,
    category: "Business",
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
  {
    id: 6,
    category: "Business",
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
  {
    id: 7,
    category: "Business",
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
  {
    id: 8,
    category: "Business",
    title: "Step-by-step guide to choosing great font pairs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    image: "/blog1.png",
  },
];
export default function CategoryPage({ params }) {
  return (
    <div className="max-w-5xl mx-auto mb-  mt-30 p-6">
   <div className="bg-purple-50 mb-18 py-16">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-4">Business</h1>
    <p className="text-lg text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
    </p>
    <div className="text-sm text-gray-500 mt-4 uppercase tracking-wide">
      BLOG &gt; BUSINESS
    </div>
  </div>
</div>

    <input
      type="text"
      placeholder="Searching ..."
      className="w-full p-3 border rounded-md mb-6"
    />

    <div className="space-y-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  </div>
  );
}
