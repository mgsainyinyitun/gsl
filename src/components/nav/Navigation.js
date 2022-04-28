import React from "react";


class Navigation extends React.Component {


  render() {
    return (
      <nav class="bg-gray-800 shadow-lg rounded-b-2xl absolute top-0 left-0 right-0 h-16">
        <div className="bg-gray-800 shadow-lg rounded-b-2xl hover:translate-y-6 transition delay-100 duration-300">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
              <div class="flex space-x-7">
                <div>
                  <a href="#" className="flex items-center py-4 px-2">
                    <img className="rounded-3xl" src="https://www.one77fs.co.uk/wp-content/uploads/2018/06/Cool-Example-Company-Logo-33-For-Logo-Inspiration-with-Example-Company-Logo-e1504694443294.png" alt="Logo" class="h-8 mr-2" />
                  </a>
                </div>
                {/* Primary Menu */}
                <div class="hidden md:flex items-center space-x-1">
                  <a
                    href=""
                    class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
                  >Home</a
                  >
                  <a
                    href=""
                    class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >Services</a
                  >
                  <a
                    href=""
                    class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >About</a
                  >
                  <a
                    href=""
                    class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                  >Contact Us</a
                  >
                </div>

                 {/* Mobile Menu */}
                 <div class=" mobile-menu border-2 hidden">
                  <ul className="text-white">
                    <li><a href="index.html" class="block text-sm px-2 py-4 text-white font-semibold">Home</a></li>
                    <li><a href="#services" class="block text-sm px-2 py-4  transition duration-300">Services</a></li>
                    <li><a href="#about" class="block text-sm px-2 py-4 transition duration-300">About</a></li>
                    <li><a href="#contact" class="block text-sm px-2 py-4  transition duration-300">Contact Us</a></li>
                  </ul>
                </div>
                
              </div>
              {/* Mobile  Menu */}
              <div class="md:hidden flex items-center">
                  <button class="outline-none mobile-menu-button">
                    <svg
                      class="w-6 h-6 text-gray-500"
                      x-show="!showMenu"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </nav>

    )
  }
}

export default Navigation;