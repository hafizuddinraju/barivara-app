import Link from "next/link";
import Navbar from "../Navbar";


export const Header = () => {
    return (
      <div className="relative h-screen">
        
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative  h-full bg-gray-900 bg-opacity-75">
          <Navbar></Navbar>
        
        
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full mt-32 max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight leading-10 text-white sm:text-4xl ">
                A good business can either <br className="hidden md:block" />
                make or break you, {' '}
                  <span className="text-teal-accent-400">the choice is yours</span>
                </h2>
                <p className="max-w-xl mb-4 text-justify text-base text-gray-400 md:text-lg">
                I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.
                </p>
                <Link
                  href="/signup"
                  aria-label=""
                  className="inline-flex bg-green-500 p-3 rounded-md items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-white hover:bg-green-700"
                >
                  Signup
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };