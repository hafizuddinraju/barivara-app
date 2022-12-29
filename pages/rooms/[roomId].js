import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { MdOutlineReport, MdVerified } from "react-icons/md";
import { useCallback, useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { getSession, useSession } from 'next-auth/react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { getRoom } from '../../lib/helper';
import Spinner from '../../components/Spinner';
const SingleRoom = () => {
  const router = useRouter()
  const data = router.asPath.slice(7,200)
  if(!data){
    return <Spinner></Spinner>
  }
  console.log(data)
  const [modal, setModal] = useState({});
  const [roomData, setRoomData] = useState({})
  useEffect(()=>{
    getRoom(data).then(res => setRoomData(res))

  },[data])
  
   const {data:session} = useSession()
   console.log(session)
   console.log(roomData);
    const {name, picture, bathroom, phone, room, description, kitchen, price,quantity} = roomData
    
    const handleReportSubmit = ()=>{

    }
    const handleChange = ()=>{
      
    }
    return (
        <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 mt-20 text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <PhotoProvider>
            <PhotoView src={picture}>
              <img
                src={picture}
                alt=""
                className="w-full rounded-md h-60 sm:h-96 bg-gray-500"
              />
            </PhotoView>
          </PhotoProvider>
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
            <div className="space-y-2">
              <div
                rel="noopener noreferrer"
                className=" text-center text-2xl font-semibold sm:text-3xl"
              >
                {name}
              </div>
              
              <div className="flex justify-between items-center">
                <div
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400  font-semibold hover:underline"
                >
                  Rooms: {room}
                </div>
                <div
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:underline"
                >
                  Bathroom: {bathroom}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div
                  rel="noopener noreferrer"
                  className="text-xl  text-green-500 hover:underline"
                >
                  Price: {price}
                </div>
                <div
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 font-semibold hover:underline"
                >
                  Kitchen: {kitchen}
                </div>
              </div>
            </div>
            <div className="text-gray-100 text-justify">{description}</div>
            <div className="flex justify-between items-center">
              <div
                rel="noopener noreferrer"
                className="text-xs  text-gray-400 font-semibold hover:underline"
              >
                phone: {phone}
              </div>
              <MdOutlineReport
                onClick={() => handleReportSubmit(rm?.data)}
                title="report product"
                className="text-2xl text-red-600"
              ></MdOutlineReport>
              
            </div>
            <div className="text-center">
              {quantity === 0 ? (
                <label className="inline-flex disabled:opacity-75 items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-600 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                  Stock out
                </label>
              ) : (
                <label
                  htmlFor={
                    session && session?.user? "booking-modal" : ''
                  }
                  className="inline-flex items-center justify-center w-1/2 h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none"
                  onClick={() => setModal(roomData)}
                >
                  Book Now
                </label>
              )}
            </div>
          </div>
        </div>
        {modal && (
          <Modal
            modal={modal}
            setModal={setModal}
            
          ></Modal>
        )}
      </div>
    </div>
    );
};
export async function getServerSideProps({req}){
  const session = await getSession({req})
  if(!session){
    return{
      redirect:{
        destination:"/login",
        premanent:false
      }
    }
  }
  return{
    props:{session}
  }
}


export default SingleRoom;

