export default function Experience() {
    return (
      <section className="py-15 px-6 grid md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
        <img src="/images/exp.png" alt="Experience" className="h-[600px] rounded-lg ml-[-10%]" />
        <div>
          <h2 className="text-6xl font-bold text-[#283c49] leading-tight">We provide you the best experience</h2>
          <p className="text-gray-600 mt-[40px] mb-[50px]">
          You don’t worry about the results because all of these interiors are made by professionals with an elegant style and premium materials.
          Every detail is thoughtfully crafted to reflect sophistication and comfort.
          </p>
          <div className="flex gap-17">
            <div>
              <p className="text-6xl font-bold text-[#4a5e6a]">17+</p>
              <p className="text-sm pt-3 ">Years experience</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[#4a5e6a]">85+</p>
              <p className="text-sm pt-3">Awards gained</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[#4a5e6a]">537+</p>
              <p className="text-sm pt-3">Furnitures sold</p>
            </div>
          </div>
          <button className="mt-10 border-2 border-[#4a5e6a] cursor-pointer text-[#4a5e6a] p-2 transition-transform duration-300 hover:scale-105"> Explore More </button>
          </div>
      </section>
    );
  }
  