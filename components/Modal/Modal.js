import { getSession, useSession } from "next-auth/react";

const Modal = ({ setModal, modal }) => {
   const{data:session}= useSession();
   console.log(session);
    const handleBooking = ()=>{

    }
    return (
        <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold"></h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              readOnly
              defaultValue={session?.user?.email}
              className="input text-gray-800  w-full input-bordered "
            />

            <input
              name="name"
              defaultValue={session?.user?.name}
              type="text"
              readOnly
              className="input w-full text-gray-800 input-bordered"
            />
            
            <input
              name="email"
              type="text"
              defaultValue={modal?.price}
              readOnly
              className="input w-full text-gray-800 input-bordered"
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input text-gray-800 w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="meeting Location"
              className="input text-gray-800 w-full input-bordered"
            />
            <br />

            <input
              className="btn bg-green-500 hover:bg-green-600 border-none w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
    );
};

export default Modal;
