const steps = [
    {
      title: "Briefing",
      desc: "Determine the concept and model you want, then choose what colors and materials to use.",
    },
    {
      title: "Processing",
      desc: "Once briefing is complete, we begin crafting based on the concept chosen.",
    },
    {
      title: "Finishing",
      desc: "Final adjustments and quality checks are done carefully before delivery.",
    },
  ];
  
  export default function Process() {
    return (
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
         
          <div className="space-y-6">
            <h2 className="text-6xl leading-tight font-bold  text-[#283c49] mb-8 ">We provide the best process experience</h2>
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 shadow-xl p-2 transition-transform duration-300 hover:scale-105">
                <span className="text-lg font-bold text-white bg-[#4a5e6a] p-2 mt-2">{`0${i + 1}`}</span>
                <div className="mb-7">
                  <h3 className="font-semibold text-2xl text-[#4a5e6a] ">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Right: Image */}
          <img src="/images/exp2.png" alt="Process" className="w-full rounded-lg" />
        </div>
      </section>
    );
  }
  