"use client"

export default function Subscribe() {
    return (
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Subscribe to get the latest news about us</h2>
        <p className="text-gray-600 mb-6">We recommend you to subscribe to our newsletter to get daily updates.</p>
        <form className="flex justify-center max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const valid = /\S+@\S+\.\S+/.test(email);
            if (!valid) {
              alert("Please enter a valid email address.");
              return;
            }
            alert("Subscribed successfully!");
          }}>
          <input className="border border-gray-300 p-3 w-full rounded-l-md"
            type="email"
            name="email"
            placeholder="Enter your email address"
            
            required/>

          <button type="submit" className="bg-slate-800 text-white px-6 rounded-r-md cursor-pointer transition-transform duration-300 hover:scale-105 autofill:off">
            Subscribe
          </button>
        </form>
      </section>
    );
  }
  