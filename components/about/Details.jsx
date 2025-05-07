export default function Details() {
    return (
      <section className="py-20 px-10 bg-gray-200">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
          

          <div className="flex-shrink-0">
            <img
              src="/images/deta.png"
              alt="Experience"
              className="w-[800px] h-[500px] object-cover rounded-lg"
            />
          </div>

          <div className="max-w-xl">
            <h2 className="text-5xl font-bold text-[#283c49] mb-10">
              Carefully Considered Details & Perfections
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Every element is thoughtfully designed with precision and elegance
              We blend craftsmanship, quality, and functionality into every space.
              From textures to finishes, every detail speaks refinement.<br/>
              <button className="mt-10 border-2 border-[#4a5e6a] cursor-pointer text-[#4a5e6a] p-2 transition-transform duration-300 hover:scale-105"> Learn More </button>

            </p>


          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
          
        <div className="max-w-xl py-50">
            <h2 className="text-5xl font-bold text-[#283c49] mb-10">
              Crafted in Combination of beauty Perfections
            </h2>
            <p className="text-gray-700 leading-relaxed">
            We create interiors that inspire comfort, beauty, and confidence.
             Each space is curated to reflect your unique personality and style.
             Innovation and artistry come together in every corner we design..<br/>
              <button className="mt-10 border-2 border-[#4a5e6a] cursor-pointer text-[#4a5e6a] p-2 transition-transform duration-300 hover:scale-105"> Learn More </button>

            </p>

          </div>

          <div className="flex-shrink-0">
            <img
              src="/images/deta2.jpg"
              alt="Experience"
              className="w-[800px] h-[500px] object-cover rounded-lg"
            />
          </div>



        </div>


      </section>
    );
  }
  