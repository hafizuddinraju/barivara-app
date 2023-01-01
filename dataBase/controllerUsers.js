import { hash } from "bcryptjs";
import Users from "../model/Schema";


export const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ error: "Error white Fetching Data" });
  }
};
export const getUser = async (req, res) => {
  try {
    const {userId} = req.query;
    if(userId){
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not Selected" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" });
  }
};

export const postUser = async(req, res)=> {
  try {
    const formData = req.body;
    console.log(formData);
    const {username, email, role, password} = formData;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Users.create({ username, email, role, password : await hash(password, 12)}, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : http://localhost:3000/api/users/1
export const putUser = async(req, res)=> {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json(user);
    }

    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!" });
  }
}
