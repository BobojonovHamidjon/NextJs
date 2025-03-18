"use client";

import Image from "next/image";

export default function BlogPost() {
  return (
    <div className="max-w-4xl mx-auto mt-26 px-4">
 
      <div className="relative w-full h-[441px]">
        <Image
          src="/image.png"
          alt="Blog Post"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

     
      <div className="mt-6">
        <div className="flex items-center space-x-4">
          
          <div className="w-12 h-12 relative">
            <Image
              src="/profile.png" 
              alt="Author"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
         
          <div>
            <span className="block text-xl font-semibold text-purple-600">
              Andrew Jonson
            </span>
            <span className="text-gray-500">Posted on 27th January 2022</span>
          </div>
        </div>

       
        <h1 className="text-3xl font-bold mt-4">
          Step-by-step guide to choosing great  <br />
           font pairs
        </h1>


        <p className="text-gray-600 mt-2">
          Startup <span className="text-blue-500">#business</span>, <span className="text-blue-500">#screen</span>, <span className="text-blue-500">#life</span>
        </p>

     
        <p className="text-gray-700 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
        </p>

        <p className="text-gray-700 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, corporis neque hic repellat voluptatem quidem illo perferendis deserunt aspernatur. Nobis, exercitationem! Quia ex asperiores odio esse corporis vel quae consectetur repellat tempora laboriosam, eius impedit perferendis illo tenetur velit! Voluptates unde harum esse mollitia placeat nulla aspernatur suscipit, quaerat reiciendis quod, beatae eius neque eum vero illum, eligendi eaque provident libero nesciunt dolor ipsum! Pariatur sequi magni aliquam modi aut animi maiores quaerat dolores asperiores fugit non possimus quisquam impedit nobis repellat corrupti doloremque officia minima, explicabo facere vitae, corporis voluptatem. Tempora laborum quam sit sequi eligendi modi dolor. Pariatur corrupti voluptatum architecto suscipit saepe fuga quos aliquid id vero nesciunt! Explicabo quae consequatur quasi nesciunt omnis possimus natus expedita excepturi accusamus qui officia molestias, consequuntur quo architecto iusto, nostrum aperiam ipsum et beatae laudantium quos cumque ut. Aut fuga neque aperiam fugit libero ducimus dolore laborum nihil delectus laboriosam?
        </p>
      </div>
    </div>
  );
}
