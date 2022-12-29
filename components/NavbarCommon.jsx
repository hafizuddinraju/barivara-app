import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavbarCommon = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('gray');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  const menu = <>
        <li className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
            <Link
              href="/home"
              aria-label="home"
              title="home"
              className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
            >
              Home
            </Link>
        </li>
        <li className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
            <Link
              href="/about"
              aria-label="about"
              title="about"
              className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
            >
              About Us
            </Link>
        </li>
        <li className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
            <Link
              href="/categories"
              aria-label="categories"
              title="categories"
              className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
            >
              Categories
            </Link>
        </li>
        <li className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
            <Link
              href="/blog"
              aria-label="blog"
              title="blog"
              className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
            >
              Blog
            </Link>
        </li>
        
          <li className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
          <Link
            href="/contact"
            aria-label="contact"
            title="contact"
            className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
          >
           Contact
          </Link>
      </li>
          <li className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
          <Link
            href="/dashboard"
            aria-label="dashboard"
            title="dashboard"
            className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
          >
           Dashboard
          </Link>
      </li>
      
    
    </>

  return (
   <>
    
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full  z-10  ease-in duration-300'
    >
      
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
           <span className='text-green-500'>Bari</span>vara
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          {menu}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose className='text-white' size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/home'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>About Us</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/categories'>Categories</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/blog'>Blog</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </>
  );
};

export default NavbarCommon;
