const testimonials = [
    {
      name: "Paolo Edgardo",
      title: "Product Manager",
      text: "The results given are very satisfying. Working with the exterior team was extraordinary.",
    },
    {
      name: "Jaseline Alexandra",
      title: "Housewife",
      text: "The service provided is very good and friendly. Everything matched with what I wanted.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-center">What our customers are saying</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-white p-6 rounded-lg shadow text-md  bg-[#283c49] transition-transform duration-300 hover:scale-105">
              <p className="mb-4 italic">“{t.text}”</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-white text-sm">{t.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  