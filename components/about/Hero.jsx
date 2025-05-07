export default function Hero(){

    return(

        <section>
            <img src="/images/heroabout.png" alt="banner" className="w-full h-[600px] object-cover"/>
            <div className="bg-[#283c49] w-[500px] h-[300px] absolute top-1/3 left-13 rounded-2xl text-white p-13" >
              
              <h2 className="text-white text-5xl font-bold leading-snug">About Us </h2>
              <p className="mt-4 text-sm">
              Let us transform your space into an elegant and luxurious haven, crafted by expert interior designers. Discover timeless sophistication and personalized functionality that complements your unique lifestyle.
              </p>
            </div>
        </section>
  
    )


}