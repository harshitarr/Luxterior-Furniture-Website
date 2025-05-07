export default function Hero() {
    const categories = [
      { src: "images/1.png", label: "Lighting" },
      { src: "images/2.png", label: "Bathroom" },
      { src: "images/3.png", label: "Living room" },
      { src: "images/4.png", label: "Office" },
      { src: "images/5.png", label: "Outdoor" },
    ];
  
    return (
      <section className="px-6 py-10">
        <h2 className="text-3xl text-[#283c49] text-center font-bold mb-6 py-10">Top Categories</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((item, index) => (
            <div key={index} className="relative group rounded overflow-hidden shadow-2xl cursor-pointer">
              <img src={item.src} alt={item.label} className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-black/55 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  