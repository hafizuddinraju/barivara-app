import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import{useSession, signOut} from 'next-auth/react'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const {data:session} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(router.route == '/'){
      if(textColor){

        setTextColor( 'black'||'white')
      }
      else{
        setTextColor('white')

      }
      
    }
    else{
      setTextColor('black')
      setColor('white')
    }

  },[router.route, color])
  
  const handleSignout = ()=>{
     signOut();
    
    
  }
 
  


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
   
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  const menu = <>
        <li className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
            <Link
              href="/"
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
              href="/rooms"
              aria-label="rooms"
              title="rooms"
              className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
            >
             Rooms
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
      {
        session?.user?
        <>
         <li  className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
          <Link
            href="/dashboard"
            aria-label="dashboard"
            title="dashboard"
            className={({isActive})=>isActive?"font-medium tracking-wide text-primary transition-colors duration-200 hover:text-deep-purple-accent-400":"font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"}
          >
           Dashboard
          </Link>
      </li>
      <li aria-label="dashboard"
      onClick={ ()=>handleSignout()}
            title="logout"
             className='hover:border-b-2 p-6 font-semibold border-b-green-500 duration-100'>
          
           <FiLogOut className='text-2xl'></FiLogOut>
          
      </li>

        
        </>
        :
        ' '
      }
      
     

      
        
      
    
    </>

  return (
   <>
    
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full  z-10  ease-in duration-300'
    >
      
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
      <label htmlFor="my-drawer" className="sm:block md:hidden drawer-button"><AiOutlineMenu size={20} style={{ color: `${textColor}` }} /></label>
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
              <Link href='/rooms'>Rooms</Link>
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

export default Navbar;
