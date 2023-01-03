import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import { fetchRooms } from "../../features/rooms/roomsSlice";



const Rooms = () => {
  const { isLoading, rooms, error } = useSelector((state) => state.rooms);
  console.log(rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-10 lg:mt-10">
      <div className="flex flex-col w-full mb-6  lg:flex-col gap-4 md:mb-8">
        <p className="w-full mx-auto text-4xl font-bold text-center text-gray-700  lg:max-w-md">
          All Rooms
        </p>
        <p className="w-full mx-auto text-center text-gray-700 lg:text-sm lg:max-w-md">
          Collaboratively negotiate out-of-the-box process improvements via
          exceptional deliverables. Progressively leverage existing unique.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:row-gap-8">
        {rooms?.map((rm) => {
         const { _id, picture, name,description, room, bathroom } = rm;
          return (
            <div key={_id} className='shadow-md rounded'>
              
              <img
                className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
                src={picture}
                alt=""
              />
              <p className="mb-2 px-3 text-xl font-bold leading-none sm:text-2xl">
                {name}
              </p>
              <div className="flex px-3 justify-between items-center my-3 text-white">
                    <p className="text-gray-400 font-medium">
                      Rooms: {room}
                    </p>
                    <p className="text-gray-400 font-medium">
                      Bathroom: {bathroom}
                    </p>
                  </div>
              <p className="text-gray-700 px-3 text-justify">
              {description?.length > 50 ? (
                      <small>
                        {" "}
                        {description.slice(0, 50) + "..."}{" "}
                        <Link
                          className="text-sky-700"
                          href={`/rooms/${_id}`}
                        >
                          Read More
                        </Link>
                      </small>
                    ) : (
                    description
                    )}
              </p>
              <div className="text-center my-4">
                <Link href={`/rooms/${_id}`}>
                <button className="btn btn-xs">View Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;
