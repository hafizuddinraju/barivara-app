import Link from "next/link";

const About = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Brand new
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              About Us
            </h5>
            <p className="mb-5 text-justify text-gray-800">
            We are a technology provider of custom hardware and software development solutions and digital transformation consulting services.

            We help our clients adapt and evolve in the face of disruptive new technologies, dynamic global markets and rapidly changing regulatory environments. We do it by modernizing their legacy systems, automating business processes and creating the technological foundation to withstand and embrace continuous change. We develop and deploy unique data analytics capabilities across their infrastructure and introduce competitive advantages by utilizing the advances in technology such as IoT, AI, Cloud, Big Data, AR/VR and others.
            </p>
            <div className="flex items-center">
                <Link href='/'>
                <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </button>
                </Link>
              
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default About;