export default function Footer() {
    return (
      <footer className="bg-slate-800 text-white py-12 px-6">
        <div className="grid md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="col-span-2">
            <h3 className="font-bold text-xl mb-2">Luxterior</h3>
            <p className="text-sm">We will help you to make an elegant and luxurious interior.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About</h4>
            <ul className="text-sm space-y-1">
              <li>About us</li>
              <li>Features</li>
              <li>News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="text-sm space-y-1">
              <li>Account</li>
              <li>Feedback</li>
              <li>Contact us</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get in touch</h4>
            <p className="text-sm">We’d love to hear from you.</p>
            <div className="flex space-x-3 mt-2">
            <ul>
              <li>Intagram : Luxteriorofficial</li>
              <li>Facebook : Luxterioroffcial</li>
              <li>Twitter : LuxteriorOfficial</li>
            </ul>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-gray-400">@ 2025 Luxterior. All rights reserved.</p>
      </footer>
    );
  }
  