import Bookings from "../model/bookingSchema";


export const getBookings = async (req, res) => {
  try {
    const booked = await Bookings.find({});
    if (!booked) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(booked)
  } catch (error) {
    res.status(404).json({ error: "Error white Fetching Data" });
  }
};
export const getBook = async (req, res) => {
  try {
    const {emailId} = req.query;
    if(emailId){
      const booked = await Bookings.findById(emailId);
      res.status(200).json(booked);
    }
    res.status(404).json({ error: "Booking not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Booked...!" });
  }
};

export const postBooking= async(req, res)=> {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Bookings.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users/1
// export const putRoom = async(req, res)=> {
//   try {
//     const { roomId } = req.query;
//     const formData = req.body;

//     if (roomId && formData) {
//       const room = await Rooms.findByIdAndUpdate(roomId, formData);
//       res.status(200).json(room);
//     }
//     res.status(404).json({ error: "Room Not Selected...!" });
//   } catch (error) {
//     res.status(404).json({ error: "Error While Updating the Data...!" });
//   }
// }

// delete : http://localhost:3000/api/users/1
export async function deleteBooking(req, res) {
  try {
    const { bookingId } = req.query;

    if (bookingId) {
      const booked = await Bookings.findByIdAndDelete(bookingId);
      return res.status(200).json(booked);
    }

    res.status(404).json({ error: "Booking Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Booking...!" });
  }
}
