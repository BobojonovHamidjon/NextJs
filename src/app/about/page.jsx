import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-white  mt-24 py-16">
      <div className="container mx-auto px-6 md:px-12">

      <div className="bg-purple-50 max-w-[1280px] mx-auto p-6 md:p-12 rounded-lg shadow-lg flex flex-col items-center text-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full">
    <div>
      <h4 className="text-gray-600 uppercase text-sm font-semibold">Our Mission</h4>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 leading-snug">
        Creating valuable content for creatives all around the world
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
      </p>
    </div>
    <div>
      <h4 className="text-gray-600 uppercase text-sm font-semibold">Our Vision</h4>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 leading-snug">
        A platform that empowers individuals to improve
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
      </p>
    </div>
  </div>
</div>




        
        <div className="grid md:grid-cols-2 gap-12 items-center  mt-24 mb-24">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our team of creatives</h3>
            <p className="text-gray-600 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://s3-alpha-sig.figma.com/img/f8e6/8a26/fd526073f07987675c551110d3deb730?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AQ3SmqNid6oM6CIw32xqp1hG1ZKdLq84rYYqT6z-sZqsIpYn0XeC7n1BVKiDu4pfw1y9McerEORgCCqZqcdEXsQ3bUD73yB8~jbHqa~R~v238CuyeSFVE-vwDxn7txtG6RhZRhKAb36oUL16RSfd-6wO7AeCx3FnOHW5dQ3PgdUvmr2TTij1qepdVzhF~vz4h5EEWc7884RDemxZ-6xhDY67aVVe8EPOc5JhsrjRU8sVoliU5qlJgaGU8k3k4WFfbeuZG6gpPRPB8rApMiVglp1SmsK7aAjSy9SVA5jB1hPMTC7OEiw8rewkCQoWicnZaRqa-AfFdW~wjcvGeMRLVw__"
              alt="Teamwork"
              className="  w-[624px] h-[480px]rounded-lg shadow-lg"
            />
            <div className="absolute top-1/4 left-0 bg-yellow-400 w-12 h-12 rounded-br-lg"></div>
          </div>
        </div>

    
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
            <img 
              src="https://s3-alpha-sig.figma.com/img/0bea/29f8/b102cf84acef9a9da0fb129e98c1d7b5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cOuGp8XRkDvIyE2sFssyUfqJlUppbAKV2R-0Q8xBATCM-toolb9OXs343t8VXQMyly~GMoxi4MkFs0Kzy-IYh9EVyGa0CXmwp~zYd-V1G5t19qBPyc0xOqpT7voO3cz-8Dsn~WRv4JZBiGQ41ElaBr5sl5BbHgQj3P7BDQZwmimvPx~LwdVpgw4gu4eZ4I3EM4XiZwwleMxiiOW-sqh90~mpOtS8zkEMpFkIT6KXYvllXUU1Oe5qxUzb4qFHGT7MkZCUHI-Mb5cjaPjZSTLdTDgocrqkhf-0GFLGCHVRSp2Dk8OyM4WjO7YzvdPUe5-~0mYFMfTQ~sgHTbH5NvKY2A__"
              alt="Teamwork"
              className="  w-[624px] h-[480px]rounded-lg shadow-lg"
            />
            <div className="absolute top-1/4 left-0 bg-yellow-400 w-12 h-12 rounded-br-lg"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Why we started this Blog</h3>
            <p className="text-gray-600 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
