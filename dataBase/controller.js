import Rooms from "../model/room";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.find({});
    if (!rooms) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(rooms)
  } catch (error) {
    res.status(404).json({ error: "Error white Fetching Data" });
  }
};
export const getRoom = async (req, res) => {
  try {
    const {roomId} = req.query;
    if(roomId){
      const room = await Rooms.findById(roomId);
      res.status(200).json(room);
    }
    // res.status(404).json({ error: "Room not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Room...!" });
  }
};

export const postRoom = async(req, res)=> {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Rooms.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users/1
export const putRoom = async(req, res)=> {
  try {
    const { roomId } = req.query;
    const formData = req.body;

    if (roomId && formData) {
      const room = await Rooms.findByIdAndUpdate(roomId, formData);
      res.status(200).json(room);
    }
    res.status(404).json({ error: "Room Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : http://localhost:3000/api/users/1
export async function deleteRoom(req, res) {
  try {
    const { roomId } = req.query;

    if (roomId) {
      const room = await Rooms.findByIdAndDelete(roomId);
      return res.status(200).json(room);
    }

    res.status(404).json({ error: "Room Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Room...!" });
  }
}
