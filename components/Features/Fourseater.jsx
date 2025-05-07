export default function Fourseater() {
  const images = [
    { src: "images/11.png", label: "Urban Edge", description: "Sleek lines for bold city living" },
    { src: "images/12.png", label: "Timeless Classics", description: "Elegant pieces that never go out of style" },
    { src: "images/13.png", label: "Contemporary Comfort", description: "Modern design meets everyday ease." },
    { src: "images/14.png", label: "Cozy Lounger", description: "Warm neutrals and natural textures" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#283c49]">Featured Collections</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {images.map((item, index) => (
            <div key={index} className="relative w-full rounded shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img src={item.src} alt={item.label} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-3xl font-semibold mb-2">{item.label}</h2>
                <p className="text-white text-md italic">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
