const benefits = [
    { title: "Best Quality", desc: "All of our furniture uses the best materials and choices for our customers." },
    { title: "Free Shipping", desc: "Free shipping everything you buy furniture from us without exception." },
    { title: "Warranty", desc: "Every time you buy our furniture products, you will get a warranty without exception." },
  ];
  
  export default function Benefits() {
    return (
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#283c49] mb-18">Benefits you get when using our services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl max-h-5xl mx-auto ml-[8%] ">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h3 className="font-bold text-left text-3xl mb-5  text-[#4a5e6a] ">{benefit.title}</h3>
              <p className=" text-[#4a5e6a] text-left pr-[80px]">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }