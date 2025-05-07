export default function Navbar() {

    return(
              
        <header className="flex justify-between items-center px-80 py-6 shadow-sm bg-white">
             
             <h1 className="text-2xl font-bold"> Luxterior</h1>
             <nav className="space-x-6 text-[#283c49]">
                <a href="/">Home</a>
                <a href="/about">About US</a>
                <a href="/Features">Features</a>
                <a href='/Contactus'>Contact Us</a>
             </nav>

        </header>
    )
}