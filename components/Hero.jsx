export default function Hero(){

    return(

        <section>
            <img src="/images/hero.png" alt="banner" className="w-full h-[600px] object-cover"/>
            <div className="bg-[#283c49] w-[500px] h-[300px] absolute top-1/3 right-13 rounded-2xl text-white p-13" >
              
              <h2 className="text-white text-4xl font-bold leading-snug">We help you make modern interior</h2>
              <p className="mt-4 text-sm">
                We will help you to make an elegant and luxurious interior designed by professional interior designers.Experience timeless beauty and functionality tailored to your lifestyle.
              </p>
            </div>
        </section>
    )


}