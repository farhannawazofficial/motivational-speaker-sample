const Navbar = () => {
  return (
    <nav className="h-20 fixed flex items-center justify-between px-10 bg-white w-screen z-[999]">
      <div>
        <p className="text-blue-500 font-bold text-lg">
          Syed Arif<span className="text-black"> Ali Shah</span>
        </p>
      </div>
      <div className="lg:flex gap-5 font-semibold hidden">
        <a href="/home" className="">
          Home
        </a>
        <a href="/book-know" className="text-gray-500">
          Book Konw
        </a>
        <a href="/e-book" className="text-gray-500">
          E-book
        </a>
        <a href="workshp" className="text-gray-500">
          Workshop
        </a>
        
        <a href="" className="text-gray-500">
          Contact
        </a>
      </div>
      {/* Button */}
      <div className="lg:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {/* Button */}
    </nav>
  );
};

export default Navbar;
